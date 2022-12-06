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

// Heart of Algebra
import IntroductionToHeartOfAlgebra from './IntroductionToHeartOfAlgebra';
import IntroductionToFunctions from './IntroductionToFunctions';
import FunctionNotation from './FunctionNotation';
import IntroToLinear from './IntroToLinear';
import ModellingLinear from './ModellingLinear';
import ParallelPerpendicular from './ParallelPerpendicular';
import SystemofLinearEquations1 from './SystemofLinearEquations1';
import SystemofLinearEquations2 from './SystemofLinearEquations2';
import LinearInequalities from './LinearInequalities';
import GraphingLinearInequalities from './GraphingLinearInequalities';
import GraphingSystemsOfLinearInequalities from './GraphingSystemsOfLinearInequalities';

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

      {/* Heart of Algebra */}
      <Route exact path='/heart_of_algebra/about' component={IntroductionToHeartOfAlgebra}></Route>
      <Route exact path='/heart_of_algebra/introduction_to_functions' component={IntroductionToFunctions}></Route>
      <Route exact path='/heart_of_algebra/function_notation' component={FunctionNotation}></Route>
      <Route exact path='/heart_of_algebra/introduction_to_linear' component={IntroToLinear}></Route>
      <Route exact path='/heart_of_algebra/modelling_linear' component={ModellingLinear}></Route>
      <Route exact path='/heart_of_algebra/parallel_perpendicular' component={ParallelPerpendicular}></Route>
      <Route exact path='/heart_of_algebra/systems_linear_equation_part1' component={SystemofLinearEquations1}></Route>
      <Route exact path='/heart_of_algebra/systems_linear_equation_part2' component={SystemofLinearEquations2}></Route>
      <Route exact path='/heart_of_algebra/linear_inequalities' component={LinearInequalities}></Route>
      <Route exact path='/heart_of_algebra/graphing_linear_inequalities' component={GraphingLinearInequalities}></Route>
      <Route exact path='/heart_of_algebra/graphing_system_linear_inequalities' component={GraphingSystemsOfLinearInequalities}></Route>
    </Switch>
  );
}

export default Main;