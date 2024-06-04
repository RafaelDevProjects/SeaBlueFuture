import sqlite3

class ErroDeEmailExistente(Exception):
    pass

def conectar_db():
    """
    Esta função conecta ao banco de dados SQLite 'emails.db'.

    Retorna:
        Uma conexão com o banco de dados SQLite.
    """
    connection = sqlite3.connect('emails.db')
    return connection

def cadastrar_email(connection, email):
    """
    Esta função insere um email na tabela 'emails' do banco de dados.

    Argumentos:
        connection: Uma conexão com o banco de dados SQLite.
        email: O endereço de email a ser inserido.

    Retorna:
        Nada.
    """
    cursor = connection.cursor()
    try:
        cursor.execute("INSERT INTO emails (email) VALUES (?)", (email,))
        connection.commit()
    except sqlite3.IntegrityError:
        raise ErroDeEmailExistente("E-mail já existe no banco de dados.")
    finally:
        connection.close()