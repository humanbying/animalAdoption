import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const AnimalActions = {
  addOnePet(pet) {
    API.addOnePet(pet)
  }
}


export default  AnimalActions
