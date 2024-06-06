from db import criar_tabela, adicionar_email, listar_emails, atualizar_email, deletar_email, exportar_emails, ErroDeEmailExistente
from server import verifica_email
from colorama import init, Fore, Style

# Inicialize a biblioteca colorama para usar cores no terminal
init()

def menu():
    # Garanta que a tabela exista antes de iniciar o menu
    criar_tabela()

    while True:
        # Exiba o menu principal
        print("\n📧 Menu:")
        print(f"{Fore.BLUE}1. Adicionar e-mail{Style.RESET_ALL}")
        print(f"{Fore.GREEN}2. Listar e-mails{Style.RESET_ALL}")
        print(f"{Fore.YELLOW}3. Atualizar e-mail{Style.RESET_ALL}")
        print(f"{Fore.RED}4. Deletar e-mail{Style.RESET_ALL}")
        print(f"{Fore.MAGENTA}5. Exportar e-mails para JSON{Style.RESET_ALL}")
        print(f"{Fore.CYAN}6. Sair{Style.RESET_ALL}")
        
        # Solicite ao usuário para escolher uma opção
        escolha = input("Escolha uma opção: ")

        if escolha == '1':
            # Adicionar um novo e-mail
            email = input("Digite o e-mail para adicionar: ")
            try:
                adicionar_email(email, verifica_email)
                print(f"\n{Fore.GREEN}✅ E-mail adicionado com sucesso!{Style.RESET_ALL}")
            except ErroDeEmailExistente:
                print(f"\n{Fore.RED}❌ Erro: E-mail já existe.{Style.RESET_ALL}")
            except Exception as e:
                print(f"\n{Fore.YELLOW}⚠️ Falha ao adicionar o e-mail: {str(e)}{Style.RESET_ALL}")

        elif escolha == '2':
            # Listar todos os e-mails
            emails = listar_emails()
            if emails:
                print("\n📬 Lista de e-mails:")
                for email in emails:
                    print(f"ID: {email[0]}, E-mail: {email[1]}")
            else:
                print(f"\n{Fore.YELLOW}ℹ️ Nenhum e-mail encontrado.{Style.RESET_ALL}")

        elif escolha == '3':
            # Atualizar um e-mail existente
            id = input("Digite o ID do e-mail para atualizar: ")
            if id.isdigit():
                id = int(id)
                emails_ids = [email[0] for email in listar_emails()]
                if id in emails_ids:
                    novo_email = input("Digite o novo e-mail: ")
                    try:
                        # Verifica se o novo e-mail é válido
                        is_valido, mensagem_de_erro = verifica_email(novo_email)
                        if not is_valido:
                            raise ValueError(mensagem_de_erro)

                        # Atualiza o e-mail
                        atualizar_email(id, novo_email)
                        print(f"\n{Fore.GREEN}✅ E-mail atualizado com sucesso!{Style.RESET_ALL}")
                    except ErroDeEmailExistente:
                        print(f"\n{Fore.RED}❌ Erro: E-mail já existe.{Style.RESET_ALL}")
                    except ValueError as ve:
                        print(f"\n{Fore.YELLOW}⚠️ Erro: {str(ve)}{Style.RESET_ALL}")
                else:
                    print(f"\n{Fore.RED}❌ Erro: ID não encontrado.{Style.RESET_ALL}")
            else:
                print(f"\n{Fore.RED}❌ Erro: ID inválido.{Style.RESET_ALL}")

        elif escolha == '4':
            # Deletar um e-mail existente
            id = input("Digite o ID do e-mail para deletar: ")
            if id.isdigit():
                id = int(id)
                email_ids = [email[0] for email in listar_emails()]
                if id in email_ids:
                    try:
                        deletar_email(id)
                        print("E-mail deletado com sucesso!")
                    except:
                        print("Erro ao deletar e-mail.")
                else:
                    print("Erro: ID não encontrado.")
            else:
                print("Erro: ID inválido.")

        elif escolha == '5':
            # Exportar os e-mails para um arquivo JSON
            exportar_emails()
            print("E-mails exportados para emails.json")

        elif escolha == '6':
            # Sair do programa
            break

        else:
            # Exibe uma mensagem de erro para opções inválidas
            print("Opção inválida. Tente novamente.")

if __name__ == '__main__':
    menu()
