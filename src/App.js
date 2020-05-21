import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Gallery from './Gallery';
import Contact from './Contact';
import WhatWeDo from './WhatWeDo';
import Navbar from './Navbar';
import {Route, Link} from 'react-router-dom';



// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Home />
//         <Gallery />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/what-we-do" component={WhatWeDo} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.<br/>
//           ligma
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
