# API de Gerenciamento de Livros

Esta é uma API simples construída com Node.js e Express para gerenciar uma coleção de livros. Os dados são armazenados localmente em um arquivo JSON (`books.json`) e a API oferece operações básicas de **CRUD** (Criar, Ler, Atualizar e Deletar).

## Funcionalidades

- **Listar todos os livros:** Retorna a lista de todos os livros cadastrados.
- **Buscar um livro específico:** Retorna um livro pelo seu ID.
- **Cadastrar um novo livro:** Adiciona um novo livro à coleção.
- **Atualizar um livro:** Atualiza os dados de um livro existente.
- **Apagar todos os livros:** Remove todos os livros cadastrados.
- **Apagar um livro específico:** Remove um livro pelo seu ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework para construção de APIs.
- **Lodash**: Biblioteca utilitária para manipulação de objetos.
- **FS** e **Path**: Módulos nativos do Node.js para manipulação de arquivos e caminhos.

## Estrutura do Projeto

```
.
├── books.json        # Arquivo de armazenamento dos livros (é criado/atualizado automaticamente)
├── index.js          # Código principal da API
└── README.md         # Documentação do projeto
```

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. **Instale as dependências:**

   ```bash
   npm install express lodash
   ```

   > **Nota:** Os módulos `fs` e `path` já fazem parte do Node.js, portanto, não necessitam de instalação adicional.

3. **(Opcional) Crie o arquivo `books.json`:**

   Se o arquivo `books.json` não existir, a aplicação criará uma lista vazia automaticamente.

## Como Usar

1. **Inicie o servidor:**

   ```bash
   node index.js
   ```

2. **Acesse a API:**

   A API estará disponível na porta **3000**. Você pode fazer requisições para os seguintes endpoints:
   
   ```
   http://localhost:3000
   ```

## Endpoints

### 1. Listar Todos os Livros

- **URL:** `/`
- **Método:** `GET`
- **Descrição:** Retorna um array com todos os livros.
- **Exemplo de Resposta:**

  ```json
  [
    {
      "id": 1617951234567,
      "title": "Livro Exemplo",
      "description": "Descrição do Livro Exemplo",
      "author": "Autor Exemplo"
    }
  ]
  ```

### 2. Buscar um Livro Específico

- **URL:** `/:id`
- **Método:** `GET`
- **Descrição:** Retorna o livro cujo `id` corresponda ao parâmetro.
- **Exemplo de Requisição:** `GET /1617951234567`

### 3. Cadastrar um Novo Livro

- **URL:** `/`
- **Método:** `POST`
- **Descrição:** Adiciona um novo livro.
- **Corpo da Requisição (JSON):**

  ```json
  {
    "title": "Título do Livro",
    "description": "Descrição do Livro",
    "author": "Autor do Livro"
  }
  ```

- **Exemplo de Resposta:**

  ```json
  {
    "message": "Livro adicionado com sucesso!",
    "book": {
      "id": 1617951234567,
      "title": "Título do Livro",
      "description": "Descrição do Livro",
      "author": "Autor do Livro"
    }
  }
  ```

### 4. Atualizar um Livro

- **URL:** `/:id`
- **Método:** `PUT`
- **Descrição:** Atualiza os dados de um livro existente.
- **Corpo da Requisição (JSON):** Pode conter um ou mais dos campos a serem atualizados.

  ```json
  {
    "title": "Novo Título",
    "description": "Nova Descrição",
    "author": "Novo Autor"
  }
  ```

- **Exemplo de Resposta:**

  ```json
  {
    "message": "Livro atualizado com sucesso!"
  }
  ```

### 5. Apagar Todos os Livros

- **URL:** `/`
- **Método:** `DELETE`
- **Descrição:** Remove todos os livros.
- **Exemplo de Resposta:**

  ```json
  {
    "message": "Livros apagados com sucesso!",
    "books": []
  }
  ```

### 6. Apagar um Livro Específico

- **URL:** `/:id`
- **Método:** `DELETE`
- **Descrição:** Remove o livro com o `id` especificado.
- **Exemplo de Requisição:** `DELETE /1617951234567`
- **Exemplo de Resposta:**

  ```json
  {
    "message": "Livro removido com sucesso!"
  }
  ```

Experimente a API e, se tiver sugestões ou melhorias, sinta-se à vontade para contribuir!
