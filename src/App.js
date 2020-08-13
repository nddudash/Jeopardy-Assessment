import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome/Welcome.js";
import Clock from "./components/clock/Clock.js";
import Contact from "./components/contact/Contact.js"
import {Route} from "react-router-dom"
import Navigation from "./components/navigation/Navigation.js"

// function App() {
//   return (
//     <div className="App">
//       A E S T H E T I C
//       <Welcome name="Baby" />
//       <Clock />
//       <Contact />
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        {/* define our routes */}
        <Navigation />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="eric" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}


export default App;
