import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const AnimalActions = {
  addOnePet(pet) {
    API.addOnePet(pet)
  },
  getAllPets() {
    API.getAllPets()
  },
  addOnePerson(person) {
    API.addOnePerson(person)
  },
  getAllPeople() {
    API.getAllPeople()
  }
}


export default  AnimalActions
