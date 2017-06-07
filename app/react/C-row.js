'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Row extends React.Component {
  render() {
    const color = this.props.color
    return (
        <tr>
          <td className='td-color'>
            {color}
          </td>
          <td className='table-data td-click' 
              onClick={ () => this.props.onDelete( color ) } >
                delete
          </td>
        </tr>
      )
  }
}

export default Row

