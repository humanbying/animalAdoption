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
  }
}
export default ServerActions
