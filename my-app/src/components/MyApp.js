import React, { Component } from "react";
import { observer } from 'mobx-react';
import myLibModule from 'my-lib';

import myAppStore from '../stores/myAppStore';

console.log(myLibModule);

@observer
class MyApp extends Component {
  handleClick() {
    myAppStore.addItem(Math.floor(Math.random() * 10));
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={() => this.handleClick()}>Add Item</button><br/>
        <span>Item Count: {myAppStore.itemCount}</span>
        <ul>
          {myAppStore.items.map((item, index) => 
            <li key={index}>
              <MyLibComponent val={item}></MyLibComponent>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default MyApp;