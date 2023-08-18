# Todo

Este projeto é um aplicativo Todo, construído com uma arquitetura de backend e frontend separada. Ele permite aos usuários criar e atualizar suas tarefas.

## Estrutura de Pastas

src<br>
│<br>
├── backend<br>
│ └── ... (códigos e arquivos relacionados ao backend)<br>
│<br>
└── frontend<br>
└── ... (códigos e arquivos relacionados ao frontend)<br>


## Tecnologias Utilizadas

### Backend

O backend é construído usando o [Nest](https://nestjs.com/), um framework para a construção de aplicações server-side eficientes e escaláveis em Node.js.

### Frontend

O frontend é construído usando o [Next.js](https://nextjs.org/), um framework popular para renderização do lado do servidor com React.

## Configuração

### Backend

1. Navegue para a pasta `src/backend`.
2. Crie um arquivo `.env` com a variável de conexão necessária para o banco de dados PostgreSQL. Substitua os valores de nome de usuário, senha, host e banco de dados de acordo com suas configurações.

   ```env
   DATABASE_URL="postgresql://usuario:senha@host:porta/todo"

3. Instale as dependências com npm install.
4. Inicie o servidor com npm start.

### Frontend
1. Navegue para a pasta src/frontend.
2. Instale as dependências com npm install.
3. Inicie o servidor com npm run dev.

## Contribuindo
Sinta-se à vontade para enviar pull requests ou abrir issues para melhorar o projeto.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter detalhes.