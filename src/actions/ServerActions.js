import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  addPet(data) {
    AppDispatcher.dispatch({
      type: "ADD_ONE_PET",
      data
    })
  }
}
export default ServerActions
