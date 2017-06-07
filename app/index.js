'use strict';

import style from './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Table from './react/A-table';

const container = document.getElementById('root')

$('#submit').click(function(event){
    event.preventDefault();

    // JQuery returns and array of all table data 
    // elements that have the td-color class
    var colors = $.find('.td-color')

    // This checks the length of the array
    // returned by JQuery 
    if(colors.length > 4){
      alert("You've reached your maximum amount of colors")
      return
    }

    // Creates a new array
    // map can also be expressed 
    // in ES5 as
    // .map(function(color){
    //   return color.innerText
    // })
    var newColors = colors.map( (color) => {
      return color.innerText
    })
    
    // The next three lines of code 
    // takes the value from the input
    // form, pushes it to the
    // newColors array, and clears the
    // form
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




  