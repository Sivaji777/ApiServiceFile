/* axios library */ 
import axios from 'axios'
/* base URL */
import Url from './Url'
import Url1 from './Url1'

/* using get axios library */ 
const getdata = (Endpoint) => {
    return axios.get(Url1 + Endpoint).then((response) => {
      return response.data;
    });
  };


/* using post axios library */ 
const postCall = (url,body, config)=>{
    return new Promise((resolve, reject)=>{
        axios.post(Url + url, body, config).then((response)=>{
          console.log(response);
          resolve(response)
        }).catch((errore)=>{
            console.log(errore);
        })
    })
}

/* get picode */ 
const getpinCode=(params)=>{
    return postCall("/User/search_pin",params)
}
/* user data */
const getUserData = () => {
    return getdata("/users");
  }

export default {
    getpinCode,
    getUserData
}