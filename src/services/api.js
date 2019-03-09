const axios = require('axios')

const api = axios.create({baseURL: "http://auth-api-nodejs.herokuapp.com"})

export default api