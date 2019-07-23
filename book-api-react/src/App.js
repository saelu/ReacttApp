import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
import HomePage from './components/Pages/HomePage';
import LoginPage from './components/Pages/LoginPage'
import SignupPage from './components/Pages/SignupPage'
import DashboardPage from './components/Pages/DashboardPage'
import UserRoute from './components/routes/UserRoute'
import GuestRoute from './components/routes/GuestRoute'



const App = ( {location}) => <div className = "ui container">

  <Route location = {location} path = "/" exact component = {HomePage} />
  <GuestRoute location = {location} path = "/login" exact component = {LoginPage} />
  <GuestRoute location = {location} path = "/signup" exact component = {SignupPage} />
  <UserRoute location = {location} path = "/dashboard" exact component = {DashboardPage} />
</div>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
