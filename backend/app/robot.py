import sqlite3
import re
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class RobotArmChatbot:
    def __init__(self, db_path):
        """
        Inicializar el chatbot con la conexión a la base de datos
        
        Args:
            db_path (str): Ruta al archivo de base de datos SQLite
        """
        self.conn = sqlite3.connect(db_path)
        self.cursor = self.conn.cursor()
        self.last_results = None
        self.current_state = "greeting"
        self.user_requirements = {
            "payload": None,
            "reach": None,
            "precision": None,
            "application": None,
            "budget": None
        }
        
        # Verificar si las tablas existen, si no, crearlas
        self.initialize_database()
        
    def initialize_database(self):
        """
        Crea las tablas necesarias si no existen
        """
        # Tabla de brazos robóticos
        self.cursor.execute('''
        CREATE TABLE IF NOT EXISTS robot_arms (
            id INTEGER PRIMARY KEY,
            model TEXT NOT NULL,
            manufacturer TEXT NOT NULL,
            payload REAL,
            reach REAL,
            precision_mm REAL,
            price REAL,
            documentation_url TEXT,
            image_url TEXT
        )
        ''')
        
        # Tabla de aplicaciones
        self.cursor.execute('''
        CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY,
            robot_arm_id INTEGER,
            application_type TEXT NOT NULL,
            description TEXT,
            FOREIGN KEY (robot_arm_id) REFERENCES robot_arms (id)
        )
        ''')
        
        # Tabla de especificaciones técnicas adicionales
        self.cursor.execute('''
        CREATE TABLE IF NOT EXISTS technical_specs (
            id INTEGER PRIMARY KEY,
            robot_arm_id INTEGER,
            spec_name TEXT NOT NULL,
            spec_value TEXT NOT NULL,
            FOREIGN KEY (robot_arm_id) REFERENCES robot_arms (id)
        )
        ''')
        
        self.conn.commit()
    
    def process_user_input(self, user_input):
        """
        Procesa la entrada del usuario y genera una respuesta
        
        Args:
            user_input (str): Texto ingresado por el usuario
            
        Returns:
            str: Respuesta del chatbot
        """
        user_input = user_input.lower()
        
        # Estado de saludo inicial
        if self.current_state == "greeting":
            return self.handle_greeting(user_input)
        
        # Estado de recopilación de requisitos
        elif self.current_state == "gathering_requirements":
            return self.gather_requirements(user_input)
        
        # Estado de mostrar resultados
        elif self.current_state == "showing_results":
            return self.handle_results_state(user_input)
        
        # Estado de detalles de un brazo robótico específico
        elif self.current_state == "showing_details":
            return self.handle_details_state(user_input)
        
        # Estado de finalización
        elif self.current_state == "finished":
            if "nueva búsqueda" in user_input or "nuevo" in user_input or "reiniciar" in user_input:
                self.reset_state()
                return "Vamos a comenzar una nueva búsqueda. ¿Qué tipo de aplicación necesitas para el brazo robótico?"
            else:
                return "Gracias por utilizar nuestro servicio. Si deseas iniciar una nueva búsqueda, solo dímelo."
        
        # Estado por defecto
        else:
            return "No entiendo lo que necesitas. ¿Puedes ser más específico?"
    
    def handle_greeting(self, user_input):
        """
        Maneja el estado de saludo inicial
        """
        if "hola" in user_input or "buenos días" in user_input or "buenas tardes" in user_input or "ayuda" in user_input:
            self.current_state = "gathering_requirements"
            return ("¡Hola! Soy el asistente de selección de brazos robóticos. "
                   "Te ayudaré a encontrar el brazo robótico ideal para tus necesidades. "
                   "¿Para qué tipo de aplicación necesitas el brazo robótico? (por ejemplo: soldadura, ensamblaje, pintura, etc.)")
        else:
            self.current_state = "gathering_requirements"
            return ("Bienvenido al asistente de selección de brazos robóticos. "
                   "Para ayudarte mejor, necesito saber: ¿para qué tipo de aplicación necesitas el brazo robótico?")
    
    def gather_requirements(self, user_input):
        """
        Recopila los requisitos del usuario
        """
        # Detectar aplicación
        if self.user_requirements["application"] is None:
            applications = ["soldadura", "ensamblaje", "pintura", "pick and place", "paletizado", 
                           "fabricación", "medicina", "laboratorio", "empaquetado"]
            
            for app in applications:
                if app in user_input:
                    self.user_requirements["application"] = app
                    return (f"Entendido, necesitas un brazo para {app}. "
                           f"¿Cuál es la carga máxima (en kg) que necesitas que soporte el brazo robótico?")
            
            # Si no se detectó ninguna aplicación específica pero hay texto suficiente
            if len(user_input) > 10:
                self.user_requirements["application"] = user_input
                return "¿Cuál es la carga máxima (en kg) que necesitas que soporte el brazo robótico?"
            else:
                return ("No he podido entender la aplicación. Por favor, especifica para qué usarás el brazo robótico "
                       "(por ejemplo: soldadura, ensamblaje, pick and place, etc.)")
        
        # Detectar carga útil (payload)
        elif self.user_requirements["payload"] is None:
            payload_match = re.search(r'(\d+(?:\.\d+)?)', user_input)
            if payload_match:
                self.user_requirements["payload"] = float(payload_match.group(1))
                return f"Carga de {self.user_requirements['payload']} kg registrada. ¿Qué alcance (en metros) necesitas para el brazo?"
            elif "no sé" in user_input or "no estoy seguro" in user_input:
                self.user_requirements["payload"] = None  # Dejamos como None para no filtrar por este criterio
                return "No hay problema. ¿Qué alcance (en metros) necesitas para el brazo?"
            else:
                return "Por favor, indica la carga máxima en kg (solo el número) o responde 'no sé' si no estás seguro."
        
        # Detectar alcance (reach)
        elif self.user_requirements["reach"] is None:
            reach_match = re.search(r'(\d+(?:\.\d+)?)', user_input)
            if reach_match:
                self.user_requirements["reach"] = float(reach_match.group(1))
                return f"Alcance de {self.user_requirements['reach']} metros registrado. ¿Qué precisión (en mm) necesitas?"
            elif "no sé" in user_input or "no estoy seguro" in user_input:
                self.user_requirements["reach"] = None
                return "Entendido. ¿Qué precisión (en mm) necesitas para tus aplicaciones?"
            else:
                return "Por favor, indica el alcance necesario en metros (solo el número) o responde 'no sé' si no estás seguro."
        
        # Detectar precisión
        elif self.user_requirements["precision"] is None:
            precision_match = re.search(r'(\d+(?:\.\d+)?)', user_input)
            if precision_match:
                self.user_requirements["precision"] = float(precision_match.group(1))
                return f"Precisión de {self.user_requirements['precision']} mm registrada. Por último, ¿cuál es tu presupuesto aproximado (en $)?"
            elif "no sé" in user_input or "no estoy seguro" in user_input:
                self.user_requirements["precision"] = None
                return "No hay problema. Por último, ¿cuál es tu presupuesto aproximado (en $)?"
            else:
                return "Por favor, indica la precisión necesaria en mm (solo el número) o responde 'no sé' si no estás seguro."
        
        # Detectar presupuesto
        elif self.user_requirements["budget"] is None:
            budget_match = re.search(r'(\d+(?:\.\d+)?)', user_input)
            if budget_match:
                self.user_requirements["budget"] = float(budget_match.group(1))
                # Buscar resultados y cambiar de estado
                self.find_matching_robot_arms()
                self.current_state = "showing_results"
                return self.format_results()
            elif "no sé" in user_input or "no estoy seguro" in user_input or "flexible" in user_input:
                self.user_requirements["budget"] = None
                # Buscar resultados y cambiar de estado
                self.find_matching_robot_arms()
                self.current_state = "showing_results"
                return self.format_results()
            else:
                return "Por favor, indica tu presupuesto aproximado en $ (solo el número) o responde 'flexible' si no tienes un límite definido."
    
    def find_matching_robot_arms(self):
        """
        Busca brazos robóticos que coincidan con los requisitos del usuario
        """
        query = """
        SELECT r.*, GROUP_CONCAT(a.application_type, ', ') as applications
        FROM robot_arms r
        LEFT JOIN applications a ON r.id = a.robot_arm_id
        """
        
        conditions = []
        params = []
        
        if self.user_requirements["payload"] is not None:
            conditions.append("r.payload >= ?")
            params.append(self.user_requirements["payload"])
        
        if self.user_requirements["reach"] is not None:
            conditions.append("r.reach >= ?")
            params.append(self.user_requirements["reach"])
        
        if self.user_requirements["precision"] is not None:
            conditions.append("r.precision_mm <= ?")  # Menor o igual porque queremos más precisión
            params.append(self.user_requirements["precision"])
        
        if self.user_requirements["budget"] is not None:
            conditions.append("r.price <= ?")
            params.append(self.user_requirements["budget"])
        
        if conditions:
            query += " WHERE " + " AND ".join(conditions)
        
        query += " GROUP BY r.id"
        
        # Si tenemos aplicación definida, usamos coincidencia por similitud
        results = self.cursor.execute(query, params).fetchall()
        
        # Convertir a DataFrame para facilitar el manejo
        columns = [description[0] for description in self.cursor.description]
        df_results = pd.DataFrame(results, columns=columns)
        
        # Si tenemos aplicación y hay resultados, filtrar por similitud
        if self.user_requirements["application"] is not None and not df_results.empty:
            # Extraer aplicaciones como texto para vectorizar
            application_texts = df_results['applications'].fillna('').tolist()
            
            # Vectorizar textos para comparación
            vectorizer = TfidfVectorizer()
            tfidf_matrix = vectorizer.fit_transform(application_texts + [self.user_requirements["application"]])
            
            # Calcular similitud entre aplicación requerida y cada resultado
            query_vec = tfidf_matrix[-1]
            results_vec = tfidf_matrix[:-1]
            similarities = cosine_similarity(query_vec, results_vec).flatten()
            
            # Añadir puntuación de similitud al DataFrame
            df_results['similarity'] = similarities
            
            # Ordenar por similitud (descendente) y luego por precio (ascendente)
            df_results = df_results.sort_values(['similarity', 'price'], ascending=[False, True])
        else:
            # Si no hay aplicación específica, ordenar solo por precio
            if not df_results.empty:
                df_results = df_results.sort_values('price', ascending=True)
        
        # Guardar resultados
        self.last_results = df_results
    
    def format_results(self):
        """
        Formatea los resultados de la búsqueda para mostrarlos al usuario
        """
        if self.last_results is None or self.last_results.empty:
            self.current_state = "finished"
            return ("No he encontrado brazos robóticos que coincidan exactamente con tus requisitos. "
                   "¿Te gustaría modificar algún requisito? Puedes decir 'nueva búsqueda' para comenzar de nuevo.")
        
        # Limitar a los 5 mejores resultados
        top_results = self.last_results.head(5)
        
        response = "He encontrado los siguientes brazos robóticos que podrían adaptarse a tus necesidades:\n\n"
        
        for i, (_, row) in enumerate(top_results.iterrows(), 1):
            response += f"{i}. {row['manufacturer']} {row['model']}\n"
            response += f"   - Carga útil: {row['payload']} kg\n"
            response += f"   - Alcance: {row['reach']} m\n"
            response += f"   - Precisión: {row['precision_mm']} mm\n"
            response += f"   - Precio: ${row['price']:.2f}\n"
            
            if pd.notna(row['applications']):
                response += f"   - Aplicaciones: {row['applications']}\n"
            
            response += "\n"
        
        response += "Para ver más detalles sobre alguno de estos brazos robóticos, indica el número. "
        response += "También puedes decir 'nueva búsqueda' para empezar de nuevo o 'modificar' para ajustar tus requisitos."
        
        return response
    
    def handle_results_state(self, user_input):
        """
        Maneja las interacciones en el estado de mostrar resultados
        """
        if "nueva búsqueda" in user_input or "nuevo" in user_input:
            self.reset_state()
            return "Vamos a comenzar una nueva búsqueda. ¿Qué tipo de aplicación necesitas para el brazo robótico?"
        
        elif "modificar" in user_input:
            # Preguntar qué requisito quiere modificar
            return ("¿Qué requisito deseas modificar? Puedes decir 'aplicación', 'carga', 'alcance', 'precisión' o 'presupuesto'.")
        
        elif any(req in user_input for req in ["aplicación", "carga", "alcance", "precisión", "presupuesto"]):
            # Modificar un requisito específico
            if "aplicación" in user_input:
                self.user_requirements["application"] = None
                return "¿Para qué aplicación necesitas el brazo robótico?"
            elif "carga" in user_input:
                self.user_requirements["payload"] = None
                return "¿Cuál es la carga máxima (en kg) que necesitas?"
            elif "alcance" in user_input:
                self.user_requirements["reach"] = None
                return "¿Qué alcance (en metros) necesitas?"
            elif "precisión" in user_input:
                self.user_requirements["precision"] = None
                return "¿Qué precisión (en mm) necesitas?"
            elif "presupuesto" in user_input:
                self.user_requirements["budget"] = None
                return "¿Cuál es tu presupuesto aproximado (en $)?"
        
        # Verificar si el usuario seleccionó un número de resultado
        num_match = re.search(r'(\d+)', user_input)
        if num_match:
            selected_num = int(num_match.group(1))
            
            if selected_num > 0 and selected_num <= len(self.last_results) and selected_num <= 5:
                self.current_state = "showing_details"
                selected_index = selected_num - 1
                self.selected_robot_arm_id = self.last_results.iloc[selected_index]['id']
                return self.get_robot_arm_details(self.selected_robot_arm_id)
            else:
                return "Por favor, selecciona un número válido de la lista o indica si quieres una nueva búsqueda."
        
        return "No entiendo tu selección. Por favor, indica el número del brazo robótico que te interesa, di 'nueva búsqueda' para empezar de nuevo, o 'modificar' para ajustar tus requisitos."
    
    def get_robot_arm_details(self, robot_arm_id):
        """
        Obtiene los detalles completos de un brazo robótico
        """
        # Obtener información básica
        self.cursor.execute("""
        SELECT * FROM robot_arms WHERE id = ?
        """, (robot_arm_id,))
        
        basic_info = self.cursor.fetchone()
        
        if not basic_info:
            return "No se encontró información para este brazo robótico."
        
        # Convertir a diccionario para facilitar el acceso
        columns = [description[0] for description in self.cursor.description]
        arm_info = dict(zip(columns, basic_info))
        
        # Obtener aplicaciones
        self.cursor.execute("""
        SELECT application_type, description FROM applications WHERE robot_arm_id = ?
        """, (robot_arm_id,))
        
        applications = self.cursor.fetchall()
        
        # Obtener especificaciones técnicas adicionales
        self.cursor.execute("""
        SELECT spec_name, spec_value FROM technical_specs WHERE robot_arm_id = ?
        """, (robot_arm_id,))
        
        tech_specs = self.cursor.fetchall()
        
        # Formatear respuesta
        response = f"## Detalles del {arm_info['manufacturer']} {arm_info['model']}\n\n"
        
        response += "### Especificaciones básicas\n"
        response += f"- Fabricante: {arm_info['manufacturer']}\n"
        response += f"- Modelo: {arm_info['model']}\n"
        response += f"- Carga útil: {arm_info['payload']} kg\n"
        response += f"- Alcance: {arm_info['reach']} m\n"
        response += f"- Precisión: {arm_info['precision_mm']} mm\n"
        response += f"- Precio: ${arm_info['price']:.2f}\n"
        
        if applications:
            response += "\n### Aplicaciones\n"
            for app_type, description in applications:
                response += f"- {app_type}"
                if description:
                    response += f": {description}"
                response += "\n"
        
        if tech_specs:
            response += "\n### Especificaciones técnicas adicionales\n"
            for spec_name, spec_value in tech_specs:
                response += f"- {spec_name}: {spec_value}\n"
        
        if arm_info['documentation_url']:
            response += f"\n### Documentación\n"
            response += f"- [Manual técnico]({arm_info['documentation_url']})\n"
        
        response += "\n¿Deseas solicitar más información sobre este brazo robótico, ver otro de la lista, o iniciar una nueva búsqueda?"
        
        return response
    
    def handle_details_state(self, user_input):
        """
        Maneja las interacciones cuando se están mostrando los detalles de un brazo robótico
        """
        if "nueva búsqueda" in user_input or "nuevo" in user_input:
            self.reset_state()
            return "Vamos a comenzar una nueva búsqueda. ¿Qué tipo de aplicación necesitas para el brazo robótico?"
        
        elif "volver" in user_input or "lista" in user_input or "resultados" in user_input:
            self.current_state = "showing_results"
            return self.format_results()
        
        elif "solicitar" in user_input or "información" in user_input or "contacto" in user_input:
            self.current_state = "finished"
            return ("Gracias por tu interés. Un especialista en brazos robóticos te contactará pronto con más información sobre este modelo. "
                   "¿Hay algo más en lo que pueda ayudarte? Puedes decir 'nueva búsqueda' para explorar otras opciones.")
        
        elif "comparar" in user_input:
            return "La función de comparación estará disponible próximamente. Por ahora, puedes volver a la lista diciendo 'volver a la lista' para ver otros modelos."
        
        else:
            return ("¿Deseas solicitar más información sobre este brazo robótico, volver a la lista, o iniciar una nueva búsqueda? "
                   "Puedes decir 'solicitar información', 'volver a la lista' o 'nueva búsqueda'.")
    
    def reset_state(self):
        """
        Reinicia el estado del chatbot para una nueva búsqueda
        """
        self.current_state = "gathering_requirements"
        self.user_requirements = {
            "payload": None,
            "reach": None,
            "precision": None,
            "application": None,
            "budget": None
        }
        self.last_results = None
    
    def close(self):
        """
        Cierra la conexión a la base de datos
        """
        self.conn.close()


# Función para cargar datos de ejemplo a la base de datos
def load_sample_data(db_path):
    """
    Carga datos de ejemplo en la base de datos
    
    Args:
        db_path (str): Ruta a la base de datos
    """
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()
    
    # Verificar si ya hay datos
    cursor.execute("SELECT COUNT(*) FROM robot_arms")
    count = cursor.fetchone()[0]
    
    if count > 0:
        conn.close()
        return  # Ya hay datos, no hacer nada
    
    # Datos de ejemplo: Brazos robóticos
    robot_arms = [
        (1, "IRB 6700", "ABB", 300.0, 3.2, 0.05, 75000.0, "https://new.abb.com/products/robotics/industrial-robots/irb-6700", ""),
        (2, "UR10e", "Universal Robots", 12.5, 1.3, 0.1, 45000.0, "https://www.universal-robots.com/products/ur10-robot/", ""),
        (3, "KR QUANTEC", "KUKA", 240.0, 2.9, 0.06, 85000.0, "https://www.kuka.com/en-us/products/robotics-systems/industrial-robots/kr-quantec", ""),
        (4, "FANUC M-710iC", "FANUC", 50.0, 2.0, 0.07, 65000.0, "https://www.fanucamerica.com/products/robots/series/m-710", ""),
        (5, "GP8", "Yaskawa Motoman", 8.0, 0.8, 0.02, 28000.0, "https://www.motoman.com/en-us/products/robots/industrial/assembly/gp8", ""),
        (6, "TX2-90", "Stäubli", 15.0, 1.0, 0.02, 52000.0, "https://www.staubli.com/en-us/robotics/product-range/6-axis-industrial-robots/tx2-series/tx2-90/", ""),
        (7, "CR-15iA", "FANUC", 15.0, 1.5, 0.05, 35000.0, "https://www.fanucamerica.com/products/robots/series/collaborative-robot/cr-15ia-robot", ""),
        (8, "IRB 1100", "ABB", 4.0, 0.58, 0.01, 22000.0, "https://new.abb.com/products/robotics/industrial-robots/irb-1100", ""),
        (9, "HC10", "Yaskawa Motoman", 10.0, 1.2, 0.1, 38000.0, "https://www.motoman.com/en-us/products/robots/collaborative/hc10", ""),
        (10, "UR3e", "Universal Robots", 3.0, 0.5, 0.03, 23000.0, "https://www.universal-robots.com/products/ur3-robot/", ""),
    ]
    
    cursor.executemany('''
    INSERT INTO robot_arms (id, model, manufacturer, payload, reach, precision_mm, price, documentation_url, image_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', robot_arms)
    
    # Datos de ejemplo: Aplicaciones
    applications = [
        (1, 1, "Soldadura", "Ideal para soldadura de piezas pesadas"),
        (2, 1, "Ensamblaje", "Ensamblaje de componentes grandes"),
        (3, 1, "Paletizado", "Manipulación de cargas pesadas"),
        (4, 2, "Ensamblaje", "Ensamblaje colaborativo"),
        (5, 2, "Pick and Place", "Manipulación precisa de piezas"),
        (6, 3, "Soldadura", "Soldadura de alta precisión"),
        (7, 3, "Manipulación", "Manipulación de piezas pesadas"),
        (8, 4, "Paletizado", "Paletizado de cajas medianas"),
        (9, 4, "Ensamblaje", "Ensamblaje de componentes mecánicos"),
        (10, 5, "Pick and Place", "Alta velocidad para piezas pequeñas"),
        (11, 6, "Laboratorio", "Manipulación de muestras médicas"),
        (12, 6, "Farmacéutica", "Ensamblaje de dispositivos médicos"),
        (13, 7, "Colaborativo", "Trabajo junto a operarios humanos"),
        (14, 7, "Empaquetado", "Empaquetado flexible de productos"),
        (15, 8, "Fabricación electrónica", "Manipulación de PCBs"),
        (16, 8, "Pick and Place", "Alta precisión para componentes pequeños"),
        (17, 9, "Colaborativo", "Tareas compartidas con humanos"),
        (18, 9, "Inspección", "Control de calidad visual"),
        (19, 10, "Laboratorio", "Manipulación precisa de muestras"),
        (20, 10, "Fabricación electrónica", "Ensamblaje de componentes pequeños"),
    ]
    
    cursor.executemany('''
    INSERT INTO applications (id, robot_arm_id, application_type, description)
    VALUES (?, ?, ?, ?)
    ''', applications)
    
    # Datos de ejemplo: Especificaciones técnicas
    tech_specs = [
        (1, 1, "Ejes", "6"),
        (2, 1, "Repetibilidad", "±0.05 mm"),
        (3, 1, "Peso", "1600 kg"),
        (4, 1, "Consumo eléctrico", "4.5 kW"),
        (5, 2, "Ejes", "6"),
        (6, 2, "Repetibilidad", "±0.1 mm"),
        (7, 2, "Peso", "33.5 kg"),
        (8, 2, "Consumo eléctrico", "350 W"),
        (9, 3, "Ejes", "6"),
        (10, 3, "Repetibilidad", "±0.06 mm"),
        (11, 3, "Peso", "1120 kg"),
        (12, 3, "Consumo eléctrico", "5.1 kW"),
        # Continuar con los demás brazos robóticos...
    ]
    
    cursor.executemany('''
    INSERT INTO technical_specs (id, robot_arm_id, spec_name, spec_value)
    VALUES (?, ?, ?, ?)
    ''', tech_specs)
    
    conn.commit()
    conn.close()


# Código de ejemplo para usar el chatbot
if __name__ == "__main__":
    db_path = "robot_arms.db"
    
    # Cargar datos de ejemplo
    load_sample_data(db_path)
    
    # Iniciar el chatbot
    chatbot = RobotArmChatbot(db_path)
    
    print("¡Bienvenido al Asistente de Selección de Brazos Robóticos!")
    print("Escribe 'salir' para terminar la conversación.")
    
    # Saludar al usuario
    response = chatbot.process_user_input("hola")
    print(f"\nAsistente: {response}")
    
    # Bucle principal
    while True:
        user_input = input("\nTú: ")
        
        if user_input.lower() == "salir":
            print("\nAsistente: Gracias por usar el Asistente de Selección de Brazos Robóticos. ¡Hasta pronto!")
            break
        
        response = chatbot.process_user_input(user_input)
        print(f"\nAsistente: {response}")
    
    # Cerrar la conexión al terminar
    chatbot.close()