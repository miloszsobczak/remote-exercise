import axios from 'axios'

const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

class Api {
  constructor(url) {
    this.url = url
  }

  get(resource = '', options = {}) {
    return this.makeRequest(resource, API_METHODS.GET, options);
  }

  post(resource = '', options = {}) {
    return this.makeRequest(resource, API_METHODS.POST, options);
  }

  put(resource = '', options = {}) {
    return this.makeRequest(resource, API_METHODS.PUT, options);
  }

  patch(resource = '', options = {}) {
    return this.makeRequest(resource, API_METHODS.PATCH, options);
  }

  delete(resource = '', options = {}) {
    return this.makeRequest(resource, API_METHODS.DELETE, options);
  }

  makeRequest(resource = '', method = API_METHODS.GET, options = {}) {
    const url = this.constructUrl(resource)

    return axios.request({ ...options, method, url})
  }

  constructUrl(resource) {
    return `${this.url}${resource}`
  }
}

export default Api
