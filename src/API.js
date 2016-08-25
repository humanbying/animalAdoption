import AppDispatcher from './AppDispatcher'
import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  addOnePet(data) {
    axios.post('/api/animals', data)
      .then(res => res.data)
      .then(data => {
        ServerActions.addPet(data)
      })
  }
}

export default API;
