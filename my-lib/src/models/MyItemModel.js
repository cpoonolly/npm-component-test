import { observable, computed } from "mobx";

class MyItemModel {
  @observable values = [];

  constructor(numValues) {
    for (let i = 0; i < numValues; i++) {
      this.values.push(i);
    }
  }

  @computed
  get valueCount() {
    return this.values.length;
  }
}

export default MyItemModel;