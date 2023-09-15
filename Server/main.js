const express = require('express')
const cors = require('cors')
const fs = require('fs-extra')

const app = express()
app.use(express.json())
app.use(cors())
const database = fs.readJsonSync('./FullDataMovies.json')

app.get('/movies', async (req, res) => {
  let { page } = req.query
  page = parseInt(page)

  let startingpoint = page * 10 - 10
  let endingponit = page * 10
  const data = database.slice(startingpoint, endingponit)
  const metadata = {
    current_page: page,
    per_page: 10,
    page_count: 25,
    total_count: 250
  }
  res.json({
    data: data,
    metadata: metadata
  })
})
app.get('/movie', async (req, res) => {
  let { id } = req.query
  console.log(id)

  const data = database[id - 1]
  res.json({
    data: data
  })
})
app.get('/search', async (req, res) => {
  let { name } = req.query
  const data = database.filter(movie => {
    return movie.title.toLowerCase().includes(name.toLowerCase())
  })
  res.json({
    data: data
  })
})

app.listen(8585, () => {
  console.log('start shodam')
})
