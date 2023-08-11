import Axios from "axios";

const API_URL = 'http://localhost:3020';
Axios.defaults.baseURL = API_URL;

class ConfAxios {
  _axios = Axios.create();

  post = async (url, data) => {


    const response = await fetch(`${API_URL}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),  // Utiliser la chaîne JSON comme corps de la requête
    });
    const responseData = await response.json();
    console.log(responseData,'cc')
    return responseData;
  };
  get = async (url) => {
    const response = await fetch(`${API_URL}/${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  };
  delete = async (url) => {
    const response = await fetch(`${API_URL}/${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    return responseData;
  };
 patch = async (url) => {
    const response = await fetch(`${API_URL}/${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    return responseData;
  };
  
}

export default new ConfAxios();
