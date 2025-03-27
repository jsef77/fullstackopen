const express = require('express')
const app = express()

app.use(express.json())

const persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello there!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info/', (req, res) => {
    const now = new Date(Date.now())
    const nowUTC = now.toUTCString()
    const personsLength = persons.length;

    res.send(`
        <p>Phonebook has info for ${personsLength} people </p>
        <p>${nowUTC}</p>
        `)})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)