# Como Rodar o Projeto

Este projeto consiste em uma aplicação web desenvolvida com React no front-end e Python no back-end.

## Pré-requisitos

- Node.js (v14 ou superior)
- Python (v3.7 ou superior)

## Configuração do Ambiente

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone <URL_DO_REPOSITORIO>
    cd SeaBlueFuture
    ```

2. Instale as dependências do front-end:

    ```bash
    cd SeaBlueFuture
    npm install
    ```

3. Instale as dependências do back-end:

    ```bash
    cd Server
    pip install -r requirements.txt
    ```

## Executando o Projeto

1. Inicialize o servidor back-end:

    ```bash
    cd Server
    python server.py
    ```

2. Inicialize o servidor front-end:

    ```bash
    cd SeaBlueFuture
    npm run dev
    ```

3. Acesse a aplicação no seu navegador em `http://localhost:3000`.

## Observações

- Certifique-se de que as portas `3000` (front-end) e `5000` (back-end) não estejam sendo usadas por outros processos em sua máquina.

