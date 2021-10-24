import axios from 'axios'

const JsdelivrApi = axios.create({
  baseURL: process.env.VUE_APP_JSDELIVR_ENDPOINT,
})

export default JsdelivrApi
