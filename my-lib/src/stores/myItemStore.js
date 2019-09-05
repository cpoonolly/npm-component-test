import { observable, computed, action } from "mobx";

import MyItemModel from '../models/MyItemModel';

class MyItemStore {
  @observable items = [];

  @computed
  get totalValueCount() {
    return this.items.map(item => item.valueCount).reduce((sum, x) => sum + x);
  }

  @action
  addItem() {
    this.items.push(new MyItemModel(Math.floor(Math.random() * 10)));
  }
}

const myItemStore = new MyItemStore();

export default myItemStore;