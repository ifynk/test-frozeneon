import axios from 'axios'

const JsdelivrApi = axios.create({
  baseURL: process.env.VUE_JSDELIVR_ENDPOINT,
})

export default JsdelivrApi
