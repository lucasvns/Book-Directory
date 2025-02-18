import express from 'express'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

const filePath = path.resolve('./books.json')

const app = express()

function readBooks () {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

function saveBooks (books) {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2))
}

let books = readBooks()

app.use(express.json())

// Lista todos os livros cadastrados
app.get('/', (req, res) => {
  res.json(books)
})

// Busca um livro em especifico
app.get('/:id', (req, res) => {
  const id = req.params.id

  const book = books.filter((book) => book.id === Number(id))

  res.json(book)
})

// Cadastra um livro
app.post('/', (req, res) => {
  const { title, description, author } = req.body

  const id = new Date().valueOf()

  const newBook = { id, title, description, author }

  books.push(newBook)

  saveBooks(books)

  res.json({ message: 'Livro adicionado com sucesso!', book: newBook })
})

// Atualiza um livro em especifico
app.put('/:id', (req, res) => {
  const id = req.params.id
  const { title, description, author } = req.body

  const fieldsToUpdate = { title, description, author }

  const cleanedFields = _.pickBy(fieldsToUpdate, _.identity)

  const updatedBooks = books.map(book => book.id === Number(id) ? { ...book, ...cleanedFields } : book)

  saveBooks(updatedBooks)

  res.json({ message: 'Livro atualizado com sucesso!' })
})

app.delete('/', (req, res) => {
  books = []
  saveBooks(books)

  res.json({ message: 'Livros apagados com sucesso!', books })
})

// Apaga um livro
app.delete('/:id', (req, res) => {
  const id = req.params.id

  books.forEach((book, index) => {
    if (book.id === Number(id)) {
      books.splice(index, 1)
    }
  })

  saveBooks(books)

  res.json({ message: 'Livro removido com sucesso!' })
})

app.listen(3000, (req, res) => {
  console.log('Server is listening on port 3000...')
})
