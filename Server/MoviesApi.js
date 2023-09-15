import axios from 'axios'
import fs from 'fs-extra'
import delay from 'delay'
let MoviesArr = []
for (let i = 0; i <= 25; i++) {
  const res = await axios.get(`http://moviesapi.ir/api/v1/movies?page=${i}`)
  for (let j = 0; j < res.data.length; j++) {
    const movie = res.data[j]
    MoviesArr.push(movie)
  }
  await delay(1000)
}

fs.writeFileSync('./db.json', JSON.stringify(MoviesArr))
// console.log()
// let MoviesArr = []
// for (let i = 1; i <= 250; i++) {
//     const res = await axios.get(`http://moviesapi.ir/api/v1/movies/${i}`)
//     MoviesArr.push(res.data)
// }
// fs.writeFileSync("./FullDataMovies.json" , JSON.stringify(MoviesArr))
