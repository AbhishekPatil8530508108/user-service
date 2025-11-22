const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send('welcome to user service')
})

app.post('/user/register', (request, response) => {
  response.send('registration successful bro')
})

app.post('/user/login', (request, response) => {
  response.send('login successful')
})

app.listen(4000, '0.0.0.0', () => {
  console.log(`server started on port 4000`)
})
