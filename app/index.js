'use strict';

import style from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './react/A-table';
import { checkColor } from './helpers/color-list';

const container = document.getElementById('root')

$('#submit').click(function(event){
    event.preventDefault();

    // JQuery returns an array of all <td/> 
    // elements that have the td-color class
    var colors = $.find('.td-color')

    // Checks length of array
    if(colors.length > 4){
      alert("Only five colors can be displayed at a time. Please delete one.")
      return
    }

    // Creates a new array
    var newColors = colors.map( (color) => {
      return color.innerText
    })
    
    var color = $('#color').val()

    // Check if valid CSS keyword
    var checked = checkColor(color.trim())
    if (!checked) {
        alert('Please enter a valid CSS color.')
        return
    }

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




  