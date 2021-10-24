import axios from 'axios'

const NpmRegistryApi = axios.create({
  baseURL: process.env.VUE_APP_NPM_REGISTRY_ENDPOINT,
})

export default NpmRegistryApi
