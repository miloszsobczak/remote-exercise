const responseParser = {
  json: response => {
    if (response.status >= 400 && response.status < 600) {
      throw new Error(response.statusText);
    }
    return response.data
  }
}

export default responseParser