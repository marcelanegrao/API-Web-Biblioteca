# API Web Biblioteca - Entidade Livro
Este é o projeto de backend que implementa as operações CRUD (Create, Read, Update, Delete) para a entidade Livro, seguindo a arquitetura Controller/Repository conforme especificado no exercício.

## Tecnologias Utilizadas:

Linguagem: TypeScript
Framework Web: Node.js com Express.js (criação do servidor e mapeamento das rotas RESTful).
ORM (Persistência): TypeORM (gerencia a comunicação com o banco de dados).
Banco de Dados: SQLite (banco de dados relacional baseado em arquivo, leve e ideal para desenvolvimento no Codespace).
Execução: ts-node e Nodemon (executa o código TypeScript diretamente e reinicia o servidor automaticamente).

## Como rodar o projeto?

1. Instalação das Dependências
Abra o terminal e execute:
npm install (Certifique-se de estar na pasta biblioteca-api)

2. Inicialização do Servidor
O servidor será iniciado na porta 3000. Importante: Use um terminal apenas para rodar o servidor e deixe-o ativo.

## Testando os Endpoints (CRUD)
Para testar as rotas, você precisará de um segundo terminal aberto e ativo.

Dica Essencial: Saída Formatada (jq)
Para que o JSON retornado seja legível e organizado, utilize o utilitário jq no final dos comandos.
Se você não tiver o jq, instale-o com sudo apt-get install -y jq.

### Teste 1: Criar (POST /api/livros)
Cria um novo livro (ID 1).

curl -X POST http://localhost:3000/api/livros \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Exemplo"
  "autor": "Exemplo"
  "isbn": "1234567890123",
  "anoPublicacao": 2025,
  "disponivel": true
}' | jq .

### Teste 2: Ler Todos (GET /api/livros)
Retorna a lista completa de livros cadastrados.

curl -X GET http://localhost:3000/api/livros | jq .

### Teste 3: Ler por ID (GET /api/livros/{id})
Busca o livro com o id 1.

curl -X GET http://localhost:3000/api/livros/1 | jq .

### Teste 4: Atualizar (PUT /api/livros/{id})
Atualiza o titulo do livro 1.

curl -X PUT http://localhost:3000/api/livros/1 \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Exemplo (Edição Revisada)"
}' | jq .

### Teste 5: Excluir (DELETE /api/livros/{id})
Remove o livro com o ID 1.

curl -X DELETE http://localhost:3000/api/livros/1

## Visualizando o Banco de Dados

Para ver os dados do banco (database.sqlite) de forma visual e organizada no Codespace:

1. Vá para a aba Extensões do VS Code.
2. Procure e instale a extensão "SQLite Viewer".
3. Clique no arquivo database.sqlite no explorador de arquivos para visualizar a tabela Livro.
