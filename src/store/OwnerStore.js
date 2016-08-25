import { EventEmitter } from "events";
import AppDispatcher from '../AppDispatcher'

let _person;
let _people;

class OwnerStore extends EventEmitter {
  constructor(){
    super();
    AppDispatcher.register(action => {
      switch(action.type) {
        case "SEND_PERSON":
        _person = action.data;
        this.emit('NEW_PERSON');
        break;
        case "RECEIVE_ALL_PEOPLE":
        _people = action.people;
        this.emit('GOT_NEW_PERSON');
        break;
      }
    1});
    }


  startListening(cb) {
    this.on('NEW_PERSON', cb);
  }

  stopListening(cb) {
    this.removeListener('NEW_PERSON', cb);
  }
  //
  // showPet() {
  //   return _pet;
  // }
  //
  getAllPeople() {
    return _people;
  }
}

export default new OwnerStore;
