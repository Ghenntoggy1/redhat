import openai
from flask import Flask, request, jsonify

openai.api_key = "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"

app = Flask(__name__)

@app.route('/process_string', methods=['POST'])
def process_string():
    input_string = request.json['input_string']
    response = openai.Image.create(
        prompt=input_string,
        model='image-alpha-001',
        size="1024x1024",
        response_format="url"
    )
    return jsonify({'output': response["data"][0]["url"]})


if __name__ == '__main__':
    app.run(debug=True)
    print(process_string())
    