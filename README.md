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

## Detalhes do Backend

Nosso backend foi desenvolvido utilizando Python com o framework Flask. O Flask facilita a criação de APIs RESTful, permitindo que o front-end se comunique eficientemente com o back-end. Utilizamos SQLite para o banco de dados, que é leve e ideal para aplicações pequenas a médias.

### Arquivos do Backend

#### `server.py`

O arquivo `server.py` é responsável por fornecer uma API para lidar com as solicitações dos usuários e interagir com o banco de dados. Utilizamos a biblioteca Flask para criar endpoints que recebem os dados do front-end, processam essas informações e retornam respostas apropriadas.

- **Endpoint `/api/enviar-email`**: Recebe um e-mail do front-end, valida o e-mail utilizando a API Hunter.io e, se for válido, adiciona ao banco de dados.

#### `menu.py`

O `menu.py` fornece uma interface de linha de comando para gerenciar os e-mails armazenados no banco de dados. Ele permite adicionar, listar, atualizar, deletar e exportar e-mails.

- **Funções principais**:
  - `adicionar_email`: Adiciona um e-mail ao banco de dados.
  - `listar_emails`: Lista todos os e-mails armazenados.
  - `atualizar_email`: Atualiza um e-mail existente no banco de dados.
  - `deletar_email`: Deleta um e-mail do banco de dados.
  - `exportar_emails`: Exporta todos os e-mails para um arquivo JSON.

#### `db.py`

O `db.py` contém as funções de manipulação direta do banco de dados, como conectar ao banco, criar tabelas e executar operações CRUD.

- **Funções principais**:
  - `conectar_db`: Gerencia a conexão com o banco de dados.
  - `criar_tabela`: Cria a tabela de e-mails se ela não existir.
  - `adicionar_email`: Insere um novo e-mail na tabela.
  - `listar_emails`: Retorna todos os e-mails do banco.
  - `atualizar_email`: Atualiza um e-mail existente.
  - `deletar_email`: Remove um e-mail do banco.
  - `exportar_emails`: Exporta os e-mails para um arquivo JSON.

### Integração Front-End e Back-End

No front-end, utilizamos Axios para enviar solicitações HTTP ao nosso back-end Flask. Quando um usuário insere seu e-mail na página inicial, o Axios envia uma solicitação POST para o endpoint `/api/enviar-email`, onde o e-mail é validado e, se for válido, armazenado no banco de dados.

### API Hunter.io

A API Hunter.io é utilizada para validar os endereços de e-mail antes de armazená-los no banco de dados. Esta API verifica se o e-mail é entregue, se é arriscado ou inválido. Isso garante que somente e-mails válidos sejam armazenados e utilizados para futuras comunicações.

## Pré-requisitos

- Node.js (v20.12.2 ou superior)
- Python (v3.12.3 ou superior)

## Configuração do Ambiente

1. Clone este repositório para o seu ambiente local:

    ```bash
    git clone <https://github.com/RafaelDevProjects/SeaBlueFuture.git>
    cd SeaBlueFuture
    ```

2. Instale as dependências do front-end:

    ```bash
    cd SeaBlueFuture
    npm install
    ```

3. Inicie o ambiente virtual Python e instale as dependências do back-end:

    Para Mac:

    ```bash
    cd Server
    source venv/bin/activate
    pip install -r requirements.txt
    ```

    Para Windows:

    ```bash
    cd Server
    .\venv\Scripts\Activate.ps1
    pip install -r requirements.txt
    ```


## Executando o Projeto

1. Inicie o servidor back-end:

    Para Mac:

    ```bash
    cd Server
    source venv/bin/activate
    python server.py
    ```

    Para Windows:

    ```bash
    cd Server
    .\venv\Scripts\Activate.ps1
    python server.py
    ```

2. Em outro terminal, inicialize o servidor front-end:

    ```bash
    cd SeaBlueFuture
    npm run dev
    ```

3. Para utilizar o menu do backend para gerenciar os e-mails, abra um novo terminal e execute:

    Para Mac:

    ```bash
    cd Server
    source venv/bin/activate
    python menu.py
    ```

    Para Windows:

    ```bash
    cd Server
    .\venv\Scripts\Activate.ps1
    python menu.py
    ```

Certifique-se de que a porta `5000` (back-end) não esteja sendo usada por outros processos em sua máquina.


## Participantes

- Rafael De Almeida Sigoli (RM554019)
- Lucas Bertolassi Iori (RM554019)
