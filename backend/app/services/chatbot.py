from ..models.robot_model import RobotArm
from sqlalchemy import or_

class ChatbotService:
    def __init__(self):
        self.contexto = {}

    def procesar_mensaje(self, mensaje, user_id):
        # Mantener contexto por usuario
        if user_id not in self.contexto:
            self.contexto[user_id] = {'estado': 'inicio'}

        estado = self.contexto[user_id]['estado']
        respuesta = self._generar_respuesta(mensaje, estado, user_id)
        return respuesta

    def _generar_respuesta(self, mensaje, estado, user_id):
        if estado == 'inicio':
            return self._procesar_inicio(mensaje, user_id)
        elif estado == 'consulta_payload':
            return self._procesar_payload(mensaje, user_id)
        # Añadir más estados según sea necesario

    def _procesar_inicio(self, mensaje, user_id):
        mensaje = mensaje.lower()
        if 'payload' in mensaje or 'peso' in mensaje:
            self.contexto[user_id]['estado'] = 'consulta_payload'
            return "¿Qué capacidad de carga (en kg) necesitas para tu aplicación?"
        
        # Búsqueda general en la base de datos
        robots = RobotArm.query.filter(
            or_(
                RobotArm.aplicaciones.ilike(f'%{mensaje}%'),
                RobotArm.nombre.ilike(f'%{mensaje}%')
            )
        ).all()
        
        if robots:
            respuesta = "He encontrado estos robots que podrían interesarte:\n"
            for robot in robots:
                respuesta += f"- {robot.nombre} (Payload: {robot.payload}kg)\n"
            return respuesta
        
        return "¿En qué puedo ayudarte? Puedo recomendarte robots según:\n- Capacidad de carga\n- Aplicación específica\n- Alcance requerido"

    def _procesar_payload(self, mensaje, user_id):
        try:
            payload_requerido = float(mensaje)
            robots = RobotArm.query.filter(
                RobotArm.payload >= payload_requerido
            ).order_by(RobotArm.payload).limit(3).all()
            
            if robots:
                respuesta = "Basado en tu requerimiento de carga, te recomiendo:\n"
                for robot in robots:
                    respuesta += f"- {robot.nombre} (Payload: {robot.payload}kg)\n"
                self.contexto[user_id]['estado'] = 'inicio'
                return respuesta
            return "No encontré robots con esa capacidad de carga. ¿Podrías especificar un valor menor?"
        except ValueError:
            return "Por favor, ingresa un número válido para la capacidad de carga." 