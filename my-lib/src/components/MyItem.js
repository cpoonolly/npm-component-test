import React, { Component } from "react";
import { observer, inject } from 'mobx-react';

@inject('myItemStore')
@observer
class MyItem extends Component {
  render() {
    const { item, myItemStore } = this.props;

    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{marginRight: '10px'}}>Count: {item.valueCount}</div>
        <div style={{marginRight: '10px'}}>Percentage: {Math.floor(item.valueCount / myItemStore.totalValueCount * 100)}</div>
        {item.values.map((value, index) => 
          <div key={index} style={{margin: "0 3px"}}>{value}</div>
        )}
      </div>
    )
  }
}

export default MyItem;