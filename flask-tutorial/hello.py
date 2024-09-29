import os
import sys
from flask import Flask, request, jsonify
from flask_cors import CORS
from markupsafe import escape

class MyServer (Flask):
    last_insert = ''

app = MyServer(__name__)

@app.get('/record-get')
def record_get():
    response = jsonify({"data": "'" + app.last_insert + "'"})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response


@app.route('/record-post', methods=['POST'])
def record_post():
    
    content = request.get_json(force=True)
    app.last_insert = content["text"]
    return jsonify({"message":'Data received'})