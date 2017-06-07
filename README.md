# jQuery to React

#### Description
This project demonstrates one way to incorporate React into an exisiting jQuery app. Familiarity with React is helpful but not required. Also, React Router and Redux are intentionally left out of this app. The goal is show how React can be implemented without a lot of refactoring and layering of other libraries.  

## Project Requirements
This project uses React and Node.js. 

## Instructions
Clone the repo and then

`$ npm install` or if you have Yarn installed `$ yarn install`

## index.html
The project's index.html file is placed in the public folder. It could be placed anywhere, but ultimately should be placed where it works best for your project. Just make sure there is a script tag pointing the bundle.js file created by webpack.

## File Structure

## app

#### index.js
The jQuery component is located in the index.js file. This is also the entry point for webpack. The jQuery component is at the top of the tree and passes information down to the React component. 

## react
The React component is in the React folder. The files names start with the letters A, B, and C. Starting files with letters isn't a recommneded naming convention, but it does make it easier to see where the data is flowing at each point. 

#### A-table.js
The file A-table.js is the top component in React and stores the state for the React Component. It's the parent and passes information down as props to the lower components.

#### B-color-tiles.js & B-rows.js
These components are siblings and the color prop is split between the two.

#### C-row.js
This is the base component that is made up of a table row. This component is rendered from an array passed down to the B-rows.js from A-table.js.

## CSS

The CSS files are broken up into two different files with no particular intention. This is done to show that webpack can integrate the CSS files in the app folder with the CSS link `<link rel="stylesheet" href="style2.css">` at the top of the html.index file. 

When the color tiles appear at the bottom of the table rendered by React, they will rotate with a CSS animation. The hover animation is declared in the style2.css file, while the initial style is declared in the style.css file in the app. 

Integrating React with jQuery should be easy if you use the style-loader and css-loader in webpack.

## Webpack

One way to start incorporation React in jQuery is to use the ProvidePlugin to point to jQuery variables.
Use this [link](https://webpack.js.org/plugins/provide-plugin/#usage-jquery) to learn more.

