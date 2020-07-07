import React, { Component } from 'react'
import './App.css';
import UserSignupPage from './components/User/UserSignupPage';

export default class App extends Component {

  render() {
    return (
      <div className="container" >
        <div className="row">
          <UserSignupPage />
        </div>
      </div>
    )
  }
}






// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import UploadImageComponent from './components/uploadImage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h5>App Title</h5>


//         <UploadImageComponent />
//       </header>
//     </div>
//   );
// }

// export default App;
