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

## Modelagem do Banco de Dados

O projeto usa o serviço RDS da Amazon com Postgres como banco de dados. A estrutura de dados é composta por uma tabela chamada 'Task' com a seguinte modelagem:

### Tabela 'Task'

Esta tabela armazena as informações sobre as tarefas do aplicativo Todo.

| Campo      | Tipo             | Descrição            |
|------------|------------------|----------------------|
| id         | uuid             | Identificador único  |
| title      | string           | Nome da tarefa       |
| date       | timestamp(3)     | Prazo da tarefa      |
| isDone     | bool             | Status da tarefa     |

A tabela utiliza o campo 'id' como chave primária, que é um valor UUID gerado automaticamente. O campo 'title' armazena o nome da tarefa, 'date' guarda o prazo da tarefa com precisão de milissegundos, e 'isDone' mantém o status da tarefa, indicando se ela foi concluída ou não.

### Schema SQL

Você pode criar manualmente a tabela usando o seguinte comando SQL:

```sql
CREATE TABLE Task (
    id UUID PRIMARY KEY,
    title VARCHAR(255),
    date TIMESTAMP(3),
    isDone BOOLEAN
);
```

Ou você pode usar o Prisma para executar uma migração:

`npx prisma migrate dev --name init`

## Contribuindo
Sinta-se à vontade para enviar pull requests ou abrir issues para melhorar o projeto.

## Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter detalhes.
