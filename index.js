import axios from 'axios'
import {makeServer} from './mockedServer.js'
/* Add JavaScript code here! */
console.log('Hello World! You did! Welcome to Snowpack :D');

makeServer()

axios.get('/api/users')
  .then(response => response.data.users)
  .then(console.table)


axios.post('/api/users', {name: 'Eder'})
  .then(response => response.data)
  .then(console.log)

axios.get('/api/users')
  .then(response => response.data.users)
  .then(console.table)