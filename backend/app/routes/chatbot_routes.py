from flask import Blueprint, request, jsonify
from ..services.chatbot import ChatbotService

chatbot_bp = Blueprint('chatbot', __name__)
chatbot_service = ChatbotService()

@chatbot_bp.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    mensaje = data.get('mensaje')
    user_id = data.get('user_id', 'default_user')
    
    if not mensaje:
        return jsonify({'error': 'Mensaje no proporcionado'}), 400
    
    respuesta = chatbot_service.procesar_mensaje(mensaje, user_id)
    return jsonify({'respuesta': respuesta})

@chatbot_bp.route('/robots', methods=['GET'])
def get_robots():
    from ..models.robot_model import RobotArm
    robots = RobotArm.query.all()
    return jsonify([robot.to_dict() for robot in robots]) 