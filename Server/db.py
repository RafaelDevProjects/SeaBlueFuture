import sqlite3
import json
from contextlib import contextmanager

class ErroDeEmailExistente(Exception):
    pass

@contextmanager
def conectar_db():
    """
    Context manager para conexão com o banco de dados SQLite.
    Garante que a conexão seja fechada corretamente após o uso.
    """
    connection = sqlite3.connect('emails.db')
    try:
        yield connection
    finally:
        connection.close()

def criar_tabela():
    """
    Cria a tabela 'emails' no banco de dados se ela não existir.
    """
    with conectar_db() as connection:
        cursor = connection.cursor()
        cursor.execute("CREATE TABLE IF NOT EXISTS emails (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE)")
        connection.commit()

def adicionar_email(email, verifica_email_func):
    """
    Adiciona um novo e-mail à tabela 'emails' se passar na verificação de e-mail.
    """
    try:
        is_valido, mensagem_de_erro = verifica_email_func(email)
        if not is_valido:
            raise ValueError(mensagem_de_erro)

        with conectar_db() as connection:
            cursor = connection.cursor()
            cursor.execute("INSERT INTO emails (email) VALUES (?)", (email,))
            connection.commit()
    except sqlite3.IntegrityError:
        raise ErroDeEmailExistente("E-mail já existe no banco de dados.")
    except Exception as e:
        raise ValueError(f"Falha ao verificar o e-mail: {str(e)}")

def listar_emails():
    """
    Retorna todos os e-mails da tabela 'emails'.
    """
    with conectar_db() as connection:
        cursor = connection.cursor()
        cursor.execute("SELECT * FROM emails")
        return cursor.fetchall()

def atualizar_email(id, novo_email):
    """
    Atualiza o e-mail com o novo e-mail na tabela 'emails' pelo ID.
    """
    with conectar_db() as connection:
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM emails WHERE email = ?", (novo_email,))
        if cursor.fetchone():
            raise ErroDeEmailExistente("E-mail já existe no banco de dados.")

        cursor.execute("UPDATE emails SET email = ? WHERE id = ?", (novo_email, id))
        connection.commit()

def atualizar_ids_apos_exclusao(connection, id_excluido):
    """
    Atualiza os IDs dos e-mails após a exclusão de um e-mail.
    """
    cursor = connection.cursor()
    cursor.execute("UPDATE emails SET id = id - 1 WHERE id > ?", (id_excluido,))
    connection.commit()

def deletar_email(id):
    """
    Exclui um e-mail da tabela 'emails' pelo ID.
    """
    with conectar_db() as connection:
        cursor = connection.cursor()
        cursor.execute("DELETE FROM emails WHERE id = ?", (id,))
        connection.commit()
        atualizar_ids_apos_exclusao(connection, id)

def exportar_emails():
    """
    Exporta os e-mails da tabela 'emails' para um arquivo JSON.
    """
    emails = listar_emails()
    emails_list = [{'id': email[0], 'email': email[1]} for email in emails]
    with open('emails.json', 'w') as f:
        json.dump(emails_list, f, indent=4)