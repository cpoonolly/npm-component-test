import React, { Component } from "react";
import { observer } from 'mobx-react';

import MyLibModel from '../models/myLibModel';

@observer
class MyLibComponent extends Component {
  constructor(props) {
    super(props);

    this.myLibModel = new MyLibModel(props.val);
  }

  render() {
    return (
      <div style={{display: flex, flexDirection: 'row'}}>
        <div style={{marginRight: '10px'}}>Count: {this.myLibModel.valueCount}</div>
        {this.myLibModel.values.map((value, index) => 
          <div key={index} style={{margin: "0 3px"}}>{value}</div>
        )}
      </div>
    )
  }
}

export default MyLibComponent;