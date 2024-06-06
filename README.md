# SeaBlueFuture

## Sobre SeaBlueFuture

O SeaBlueFuture é uma plataforma online dedicada à conscientização, mobilização e ação em prol da preservação dos oceanos e do meio ambiente. Nosso objetivo é fornecer informações relevantes e impactantes sobre questões climáticas e oceânicas, destacando notícias importantes e tendências preocupantes, como enchentes, derretimento de geleiras e poluição por microplásticos. Através do nosso portal online, buscamos engajar e capacitar indivíduos a se tornarem agentes de mudança em suas comunidades.

## Funcionalidades

### Home

Na página inicial, os usuários têm acesso a um formulário onde podem inserir seu endereço de e-mail. Essa função permite que os usuários se cadastrem para receber atualizações e informações sobre notícias, eventos e iniciativas relacionadas ao mar e à preservação do meio ambiente. Ao fornecer seu endereço de e-mail, os usuários se tornam parte da comunidade SeaBlueFuture e recebem regularmente conteúdos relevantes e importantes para a conscientização e ação em prol dos oceanos.

Também na aba Home, os usuários encontram uma seção "Sobre", onde podem ler mais informações sobre o SeaBlueFuture, sua missão e seus objetivos.

### Notícias

A seção de notícias oferece aos usuários acesso a informações atualizadas e relevantes sobre questões ambientais, especialmente relacionadas aos oceanos. Utilizamos uma API para buscar e exibir notícias diretamente do IBGE, permitindo aos usuários se manterem informados sobre as últimas tendências e acontecimentos na preservação marinha.

### Doações

Na seção de doações, os usuários podem encontrar informações sobre organizações não governamentais (ONGs) e outras entidades dedicadas à preservação dos oceanos. Oferecemos recursos e links para que os usuários possam contribuir financeiramente ou oferecer apoio voluntário para essas organizações.

### Backend

O backend do SeaBlueFuture é construído em Flask, uma estrutura web em Python. Ele inclui funcionalidades para lidar com o cadastro de e-mails, verificação de e-mails usando a API do Hunter, e um menu interativo no terminal para adicionar, atualizar, deletar e exportar e-mails.

## Pré-requisitos

- Node.js (v20.12.2 ou superior)
- Python (v3.12.3 ou superior)

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

3. Inicie o ambiente virtual Python e instale as dependências do back-end:

    ```bash
    cd Server
    source venv/bin/activate
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

## Observações

- Certifique-se de que a portas `5000` (back-end) não estejam sendo usadas por outros processos em sua máquina.

## Participantes

- [Nome do Participante 1](https://github.com/participante1)
- [Nome do Participante 2](https://github.com/participante2)
- [Nome do Participante 3](https://github.com/participante3)