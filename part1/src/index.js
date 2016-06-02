// rendering examples
// require('./render/non-es6.js');
// require('./render/es6.js');
// require('./render/no-jsx.js');


const React = require('react');
const ReactDOM = require('react-dom');


// render a react component (component lifecycle / props/ state)
// import HelloWorld from './components/HelloWorld.js';

// ReactDOM.render(
//   <div>
//     <HelloWorld name="fsfsdf" stuff="sdfsd" />
//   </div>,
//   document.getElementById('main')
// );



// creating modular / reusable components
import PhotoSearch from './components/PhotoSearch.js';

ReactDOM.render(
  <PhotoSearch />,
  document.getElementById('main')
);
