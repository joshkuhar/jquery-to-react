'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Rows from './B-rows';
import Tiles from './B-color-tiles';

class Table extends React.Component {
  constructor(props){
    super(props)
    this.onDelete = this.onDelete.bind(this)
    this.state = {
      colors: []
    }
  }
  componentDidMount() {
    // *********
    // this is where the data enters the
    // React component, via this.props.colors
    // *********
    this.setState({
      colors: this.props.colors
    })
  }
  onDelete(color) {
    const colors = this.state.colors
    for(var i in colors){
      if(color == colors[i]){
        colors.splice(i, 1)
      }
    }
    this.setState({
      colors: colors
    })
  }
  render() {
    return(
      <div>
        <div className='library-header'>React Component</div>
        <table className='table-container'>
            <Rows 
              colors={this.state.colors}
              onDelete={this.onDelete}
            />
       </table>
       <Tiles colors={this.state.colors} />
      </div>
      )
  }
}


export default Table

