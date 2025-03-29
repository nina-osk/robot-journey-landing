from flask_sqlalchemy import SQLAlchemy
from app.database import db

class RobotArm(db.Model):
    __tablename__ = 'robot_arms'
    
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    payload = db.Column(db.Float)
    alcance = db.Column(db.Float)
    precision = db.Column(db.Float)
    aplicaciones = db.Column(db.Text)
    documentacion_url = db.Column(db.String(500))
    
    def to_dict(self):
        return {
            'id': self.id,
            'nombre': self.nombre,
            'payload': self.payload,
            'alcance': self.alcance,
            'precision': self.precision,
            'aplicaciones': self.aplicaciones,
            'documentacion_url': self.documentacion_url
        } 