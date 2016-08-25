import { EventEmitter } from "events";
import AppDispatcher from '../AppDispatcher'

let _pet;

class AnimalStore extends EventEmitter {
  constructor(){
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case "ADD_ONE_PET":
        _pet = action.data;
        this.emit('NEW_PET');
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

}

export default new AnimalStore;
