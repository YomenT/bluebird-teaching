import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage'
import About from './About'
import Contact from './Contact'
import AboutResources from './OtherResources'
import FocusLog from './FocusLog'
import Resources from './Resources'
import SatPrep from './SatPrep'
import AboutSATPrep from './AboutSATPrep'

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/about_resources' component={AboutResources}></Route>
      <Route exact path='/focus_log' component={FocusLog}></Route>
      <Route exact path='/resources' component={Resources}></Route>
      <Route exact path='/satprep' component={SatPrep}></Route>
      <Route exact path='/aboutsatprep' component={AboutSATPrep}></Route>
    </Switch>
  );
}

export default Main;