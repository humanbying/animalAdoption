import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  addPetGetAll(data) {
    AppDispatcher.dispatch({
      type: "GET_ALL_PETS",
      data
    })
  },
  getAllPets(pets) {
    AppDispatcher.dispatch({
      type: "RECEIVE_ALL_PETS",
      pets
    })
  },
  addPerson(data) {
    AppDispatcher.dispatch({
      type: "SEND_PERSON"
    })
  }
}
export default ServerActions
