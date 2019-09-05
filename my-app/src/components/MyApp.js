import React, { Component } from "react";
import { observer } from 'mobx-react';
import myLibModule from 'my-lib';

import myAppStore from '../stores/myAppStore';

console.log(myLibModule);
const { MyItemList } = myLibModule;

@observer
class MyApp extends Component {
  handleClick() {
    myAppStore.incrementCount();
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div>
          <h1>My App</h1>
          <button onClick={() => this.handleClick()}>Count</button><br/>
          <span>Item Count: {myAppStore.count}</span>
        </div>
        <div>
          <h1>My Item List</h1>
          <MyItemList/>
        </div>
      </div>
    );
  }
}

export default MyApp;