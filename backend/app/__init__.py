from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from .routes.chatbot_routes import chatbot_bp

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)  # Permite peticiones desde el frontend
    
    # Configuración de la base de datos
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://usuario:contraseña@localhost/nombre_db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    # Inicializar la base de datos
    db.init_app(app)
    
    # Registrar blueprints
    app.register_blueprint(chatbot_bp, url_prefix='/api')
    
    return app 