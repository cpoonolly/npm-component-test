import { observable, computed } from "mobx";

class MyLibModel {
  @observable values;

  constructor(numValues) {
    this.values = [];

    for (let i = 0; i < numValues; i++) {
      this.values.push(i);
    }
  }

  @computed
  get valueCount() {
    return this.items.length;
  }
}

export default MyLibModel;