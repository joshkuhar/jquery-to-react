import React from 'react';
import ReactDOM from 'react-dom';

import Row from './C-row';

class Rows extends React.Component {
  render() {
    let rows = this.props.colors.map( (color, index ) => {
      return <Row 
            key={index}
            color={color}
            onDelete={this.props.onDelete}
          />
    })
    return (
        <tbody>{rows}</tbody>
      )
  }
}

export default Rows
