import { EventEmitter } from "events";
import AppDispatcher from '../AppDispatcher'

let _pet;
let _pets;

class AnimalStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case "GET_ALL_PETS":
        _pet = action.data;
        this.emit('NEW_PET');
        break;
        case "RECEIVE_ALL_PETS":
        _pets = action.pets;
        this.emit('GOT_NEW_PET');
        break;
      }
    });
  }

  startListening(cb) {
    this.on('NEW_PET', cb);
  }

  stopListening(cb) {
    this.removeListener('NEW_PET', cb);
  }

  showPet() {
    return _pet;
  }

  getAllPets() {
    return _pets;
  }
}

export default new AnimalStore;
