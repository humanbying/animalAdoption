import AppDispatcher from './AppDispatcher'
import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  addOnePet(data) {
    axios.post('/api/animals', data)
      .then(res => res.data)
      .then(data => {
        ServerActions.addPetGetAll(data)
      })
  },
  getAllPets() {
    axios.get('/api/animals')
      .then(res => {
        ServerActions.getAllPets(res.data)
      })
  }
}

export default API;
