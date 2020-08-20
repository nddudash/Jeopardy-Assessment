import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/welcome/Welcome.js";
import Clock from "./components/clock/Clock.js";
import Contact from "./components/contact/Contact.js"
import {Route, Switch} from "react-router-dom"
import Navigation from "./components/navigation/Navigation.js"
import FouroFour from "./components/fourofour/FouroFour.js"

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
      <div className = "App">
        <Navigation />
        
        <Switch>
          <Route
            exact
            path = "/"
            render = {(props) => <Welcome {...props} name = "Cherry" />}
          />

          <Route 
            path = "/welcome/:name" 
            render = {(props) => <Welcome {...props} name = {props.match.params.name}/> } 
          />

          <Route 
            path = "/clock" 
            component = {Clock}
          />

          <Route 
            path = "/contact" 
            component = {Contact} 
          />

          <Route>
            <FouroFour />
          </Route>

        </Switch>
      </div>
    );
  }
}


export default App;
