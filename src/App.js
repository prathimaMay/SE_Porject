// import SignUp from './SignUp';
// import '../Styles/App.css';
// import '../Styles/SignUp.css';

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import ForgotPassword from "./Components/ForgotPassword";
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
    <div className ="App">
        <Header />
            <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/forgotpassword" exact component={ForgotPassword} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/home" exact component={HomePage} />
            </Switch>
        <Footer />
    </div>
</Router>
  );
}

export default App;