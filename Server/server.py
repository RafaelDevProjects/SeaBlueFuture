from flask import Flask, request, jsonify
from flask_cors import CORS
import os  # Importe o módulo os aqui
import requests
from db import conectar_db, cadastrar_email, ErroDeEmailExistente

app = Flask(__name__)
CORS(app)

# Definindo a porta padrão como 5000, caso a variável de ambiente não esteja definida
PORT = int(os.environ.get("PORT", 5000))

def verifica_email(email):
    api_url = f'https://api.hunter.io/v2/email-verifier?email={email}&api_key=7286e78ff10ee9f5ced351d9e6008439a9d33ddc'
    response = requests.get(api_url)
    if response.status_code == 200:
        resultado_verificacao = response.json()
        if resultado_verificacao['data']['result'] == 'undeliverable':
            return False, 'Email não pode ser entregue.'
        if resultado_verificacao['data']['result'] == 'risky':
            return False, 'Email é arriscado.'
        if resultado_verificacao['data']['result'] == 'invalid':
            return False, 'Email é invalido.'
        return True, ''
    return False, 'falha ao verificar o e-mail.'

@app.route('/api/enviar-email', methods=['POST'])
def enviar_email():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        is_valido, mensagem_de_erro = verifica_email(email)
        if not is_valido:
            return jsonify({'error': mensagem_de_erro}), 400

        try:
            with conectar_db() as connection:
                cursor = connection.cursor()
                cursor.execute("CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE)")
                cursor.execute("INSERT INTO emails (email) VALUES (?)", (email,))
                connection.commit()
        except ErroDeEmailExistente:
            return jsonify({'error': 'Email já existe.'}), 400

        return jsonify({'message': 'Email recebido e salvo com sucesso!'})

if __name__ == '__main__':
    # Executa o servidor na porta definida pela variável de ambiente ou na porta 5000 por padrão
    app.run(debug=True, port=PORT)
