from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from db import conectar_db, adicionar_email, ErroDeEmailExistente

app = Flask(__name__)
CORS(app)

# Obtém a porta do ambiente ou usa a porta 5000 como padrão
PORT = int(os.environ.get("PORT", 5000))

def verifica_email(email):
    """
    Verifica a validade de um email usando a API Hunter.io.

    Args:
        email (str): O email a ser verificado.

    Returns:
        tuple: Uma tupla contendo um booleano indicando se o email é válido e uma mensagem de erro, se aplicável.
    """
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
    """
    Rota para receber e verificar um email enviado via POST.

    Returns:
        str: Uma mensagem de sucesso ou erro, em formato JSON.
    """
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        # Verifica se o email é válido
        is_valido, mensagem_de_erro = verifica_email(email)
        if not is_valido:
            # Retorna uma mensagem de erro se o email não for válido
            return jsonify({'error': mensagem_de_erro}), 400

        try:
            # Tenta adicionar o email ao banco de dados
            with conectar_db() as connection:
                cursor = connection.cursor()
                cursor.execute("CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE)")
                adicionar_email(email, verifica_email)  # Passando verifica_email como argumento
        except ErroDeEmailExistente:
            # Retorna uma mensagem de erro se o email já existir no banco de dados
            return jsonify({'error': 'Email já existe.'}), 400

        # Retorna uma mensagem de sucesso se o email for adicionado com sucesso
        return jsonify({'message': 'Email recebido e salvo com sucesso!'})

if __name__ == '__main__':
    # Executa o aplicativo Flask
    app.run(debug=True, port=PORT)