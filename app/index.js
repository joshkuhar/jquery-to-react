'use strict';

import style from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './react/A-table';

const container = document.getElementById('root')

$('#submit').click(function(event){
    event.preventDefault();

    // JQuery returns an array of all <td/> 
    // elements that have the td-color class
    var colors = $.find('.td-color')

    // Checks length of array
    if(colors.length > 4){
      alert("You've reached your maximum amount of colors. Please delete one.")
      return
    }

    // Creates a new array
    var newColors = colors.map( (color) => {
      return color.innerText
    })
    
    var color = $('#color').val()
    newColors.push(color)
    $('#color').val('')
    
    // Destroys the React component
    // if there is one
    ReactDOM.unmountComponentAtNode(
        container
      )

    // Renders a new React component
    // and passes the newColors array
    // into the Table component as the
    // colors prop. Thus crossing the 
    // event horizon.
    ReactDOM.render(
        <Table 
          colors={newColors}
        />,
        container
      )
})




  