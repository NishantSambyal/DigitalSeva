import { Config } from './types';
class RequestClass {
  request = async (config: Config) => {
    try {
      const data = await fetch(config.url, {
        method: config.method, // or 'PUT'
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: config.data,
      });
      return data.json();
    } catch (error) {
      console.error('Error:', error);
    }

    // .then(response => response.json())
    // .then(data => {
    //   return data;
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };
}
const Request = new RequestClass();

export { Request };
