from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)

CORS(app)
CORS(app, resources={r"/api/*": {"origins": "*"}})
@app.route('/api/data', methods=['GET', 'POST'])
def my_endpoint():
  data = request.get_json()
  string = data['string'] # assuming the JSON payload has a "string" field
  processed_string = string.upper() # just an example processing step
  return jsonify({'processed_string': processed_string})

if __name__ == '__main__':
  app.run(debug=True, port=8080)