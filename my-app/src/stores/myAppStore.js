import { observable, computed, action } from "mobx";

class MyAppStore {
  @observable items = [];

  @computed
  get itemCount() {
    return this.items.length;
  }

  @action
  addItem(item) {
    this.items.push(item);
  }
}

const myAppStore = new MyAppStore();

export default myAppStore;