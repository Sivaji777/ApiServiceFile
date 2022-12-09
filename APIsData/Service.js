/* using Fetch Method */
  useEffect(() => {
    const url = 'https://rr-api.moshimoshi.cloud/api/rr/property_filter_list'
    const options = {
      body: JSON.stringify({ status: "location" }),
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res, 'ress');
      }).catch((err) => {
        console.log(err, 'error');
      })
  }, [])
  
  
  /* using Axios */
  
   const url = 'https://rr-api.moshimoshi.cloud/api/rr/property_filter_list'
  const payload = { status: "location" }
  const headers = {
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }

  useEffect(() => {
    axios.post(url, payload, headers).then((req, res) => {
      console.log(res, 'res');
    }).then((error) => {
      console.log(error);
    })
  }, [])


/* using fetch method-1 */
     const token = 'fpyzw76umprjq7cpogb22tnglr7e644neoxp1727'
     fetch('https://api.json-generator.com/templates/Ekx4iiPPM8Ee/data', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then((response) => response.json())
            .then((res) => {
                console.log(res, '11111111');
            })
            .catch((error) => {
            });

/* using fetch method-2 */
  const token = 'fpyzw76umprjq7cpogb22tnglr7e644neoxp1727'
  const payload = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        fetch( 'https://api.json-generator.com/templates/Ekx4iiPPM8Ee/data',payload)
            .then((response) => response.json())
            .then((res) => {
                console.log(res, '11111111');
            })
            .catch((error) => {
            });

/* using axios method-1 */
    const token = 'fpyzw76umprjq7cpogb22tnglr7e644neoxp1727'
    axios.get('https://api.json-generator.com/templates/Ekx4iiPPM8Ee/data', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then((res) => {
            setData(res.data.patients)
        }).catch((err) => {
            console.log(err, '111');
        })

/* using axios method-2 */
    const token = 'fpyzw76umprjq7cpogb22tnglr7e644neoxp1727'
    const payload = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        axios.get('https://api.json-generator.com/templates/Ekx4iiPPM8Ee/data', payload).then((res) => {
            setData(res.data.patients)
        }).catch((err) => {
            console.log(err, '111');
        })


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
