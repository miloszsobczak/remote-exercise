import Api from './Api';

class ApiBuilder {
  constructor() {
    this.url  = '';
  }

  setUrl(url = '') {
    if (!url) {
      throw new Error('Url param is required!');
    }

    this.url  = url;
    return this;
  }

  build() {
    return new Api(this.url);
  }
}

export default ApiBuilder;
