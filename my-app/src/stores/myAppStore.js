import { observable, action } from "mobx";

class MyAppStore {
  @observable count = 0;

  @action
  incrementCount() {
    this.count++;
  }
}

const myAppStore = new MyAppStore();

export default myAppStore;