import AppDispatcher from './AppDispatcher'
import axios from 'axios'

const API = {
  addOnePet(data) {
    axios.post('/api/animals', data)
      .then(res => res.data)
      .then(data => {
        console.log('calling from the API ', data)
      })
  }
}

export default API;
