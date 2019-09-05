import React, { Component } from "react";
import { Provider, observer } from 'mobx-react';

import MyItem from '../components/MyItem';
import myItemStore from '../stores/myItemStore';

@observer
class MyItemList extends Component {
  handleClick() {
    myItemStore.addItem();
  }

  render() {
    return (
      <Provider myItemStore={myItemStore}>
        <button onClick={() => this.handleClick()}>Add Item</button><br/>
        <span>Item Count: {myItemStore.items.length}</span>
        <ul>
          {myItemStore.items.map((item, index) => 
            <li key={index}>
              <MyItem item={item}></MyItem>
            </li>
          )}
        </ul>
      </Provider>
    )
  }
}

export default MyItemList;