from flask import Flask
from flask_socketio import SocketIO, emit
from flask_login import LoginManager
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
app.config['DATABASE_URI'] = os.getenv('DATABASE_URI')

CORS(app)  # Enable CORS for all routes

socketio = SocketIO(app, cors_allowed_origins="*")
login_manager = LoginManager(app)
jwt = JWTManager(app)

# Default route
@app.route('/a7B9cD3f')
def home():
    return "Welcome to the Fitness Buddy App!"

# Register blueprints
from routes import routes_blueprint
app.register_blueprint(routes_blueprint)

@socketio.on('message')
def handle_message(data):
    emit('message', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)