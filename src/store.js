import { createStore } from 'redux';
import todoAppReducer from './reducers/app-reducer';

export default class StoreSingleton {
  static getStore() {
    if (!this.store) {
      this.store = createStore(todoAppReducer);
    }
    return this.store;
  }
}