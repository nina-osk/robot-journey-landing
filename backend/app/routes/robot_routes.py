from flask import Blueprint, jsonify
from ..services.robot import Robot  # Ajusta esta importación según tu clase/funciones

robot_bp = Blueprint('robot', __name__)

@robot_bp.route('/robot/status', methods=['GET'])
def get_robot_status():
    robot = Robot()  # Ajusta según tu implementación
    return jsonify({'status': robot.get_status()})

# Añade más rutas según necesites 