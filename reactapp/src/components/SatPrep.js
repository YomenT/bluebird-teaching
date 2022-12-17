import React from "react";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

import SatPrepLinkOutline from "./SatPrepLinkOutline";

// Heart of Algebra
import Logo from './Logo'
import Footer from './Footer'
import IntroductionToHeartOfAlgebra from "./IntroductionToHeartOfAlgebra"
import IntroductionToFunctions from './IntroductionToFunctions'
import FunctionNotation from './FunctionNotation'
import IntroToLinear from './IntroToLinear'
import ModellingLinear from './ModellingLinear'
import ParallelPerpendicular from './ParallelPerpendicular.js'
import SystemofLinearEquations1 from './SystemofLinearEquations1.js'
import SystemofLinearEquations2 from './SystemofLinearEquations2.js'
import HeartofAlgebraCompletion from './HeartofAlgebraCompletion.js'
import LinearInequalities from './LinearInequalities.js'
import GraphingLinearInequalities from './GraphingLinearInequalities.js'
import GraphingSystemsOfLinearInequalities from './GraphingSystemsOfLinearInequalities.js'

// Passport to Advanced Math
import PassportToAdvancedMathIntroduction from "./passport-to-advanced-math/PassportToAdvancedMathIntroduction.js";
import ExponentRules from "./passport-to-advanced-math/ExponentRules";
import ExponentRules2 from "./passport-to-advanced-math/ExponentRules2";
import PolynomialsPart1 from "./passport-to-advanced-math/PolynomialsPart1";
import PolynomialsPart2 from "./passport-to-advanced-math/PolynomialsPart2";
import PolynomialsPart3 from "./passport-to-advanced-math/PolynomialsPart3";
import FactoringPart1 from "./passport-to-advanced-math/FactoringPart1";
import FactoringPart2 from "./passport-to-advanced-math/FactoringPart2";
import QuadraticFunctionPart1 from "./passport-to-advanced-math/QuadraticFunctionPart1";
import QuadraticFunctionGraphicalAnalysis from "./passport-to-advanced-math/QuadraticFunctionGraphicalAnalysis";
import QuadraticFunctionGraphicalAnalysis2 from "./passport-to-advanced-math/QuadraticFunctionGraphicalAnalysis2";

class SatPrep extends React.Component {

    render() {
        return (
            <div>
                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>SAT Prep</h2>
                </div>
                <div className="aboutBodyDiv" style={{ paddingBottom: "150px" }}>
                    <p className="p-body">
                        We are very excited to start our own SAT preparation workshop!  There are four domains or groups of problems you will see on the math 
                        section of the SAT listed below.  
                    </p>
                    <ul className="p-body">
                        <li>Heart of Algebra</li>
                        <li>Problem Solving and Data Analysis</li>
                        <li>Passport to Advanced Math</li>
                        <li>Addtional Topics in Math</li>
                    </ul>
                    <p className="p-body" style={{ fontSize: "17px" }}>
                        <strong>Note: </strong> This page is a work in progress.  Since there are four groups of questions to the math portion of the SAT, 
                        this page will have four major updates; each update brings the next group of questions.  We will start with the Heart of Algebra.  
                        Unfortunately, my expertise lies in the math section of the SAT.  Until I am able to find additional help with the reading portion of 
                        the SAT, this page will only cover SAT math material.
                    </p>
                    <div>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=5qap5aO4i9A"
                        />
                    </div>
                    <Link to="/aboutsatprep">
                        <h3 className="h3-blue-headers" style={{ paddingTop: "75px", paddingBottom: "15px" }}>Pace Yourself</h3>
                    </Link>
                    <p className="p-body-small">
                        You know your schedule best!  Try to gauge how much you need to work on everyday to prepare yourself according 
                        to when you plan on taking the SAT.  It is nice to keep this chill.  Try to block out just 30 minutes a day to work on this, so you 
                        can have time to do other things you need/want!
                    </p>
                    <p className="p-body-small" style={{ paddingBottom: "150px" }}>
                        It is better to keep your study time on the shorter end, but try to make that time very engaging.  While spending time studying, try to 
                        ask yourself questions about the material.  If there are questions that you can't find answers to, <Link to="/contact" style={{ color: "#5b92e5" }}>let us know</Link>!  
                        The important thing is to try to stay engaged.  When you're not directly studying, try to mentally chew over the last material you 
                        went over!  I'll try to block off each section between horizontal lines to take no more than 30 minutes. 
                    </p>
                    <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868" }}></hr>
                    <p className="p-body" style={{ paddingBottom: "25px" }}>
                        Try to go through the following links in order.  Try to keep track of which links you've visited; The color change for visited links isn't working as expected.  Sorry 
                        for my poor coding skills, and thank you for your patience :)
                    </p>
                    <SatPrepLinkOutline />
                    {/* <div className="wrap-collabsible" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
                        <input id="HOA-collapsible" className="toggle" type="checkbox"></input>
                        <label for="HOA-collapsible" className="lbl-toggle">Heart of Algebra</label>
                        <div className="collapsible-content">
                            <div className="collapsible-inner" style={{  
                                paddingBottom: "150px",
                                }}>
                                <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                                    <IntroductionToHeartOfAlgebra />
                                    <IntroductionToFunctions />
                                    <FunctionNotation />
                                    <IntroToLinear />
                                    <ModellingLinear />
                                    <ParallelPerpendicular />
                                    <SystemofLinearEquations1 />
                                    <SystemofLinearEquations2 />
                                    <LinearInequalities />
                                    <GraphingLinearInequalities />
                                    <GraphingSystemsOfLinearInequalities />
                                    <HeartofAlgebraCompletion />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-collabsible" style={{ paddingBottom: "50px" }}>
                        <input id="PSADA-collapsible" className="toggle" type="checkbox"></input>
                        <label for="PSADA-collapsible" className="lbl-toggle">Problem Solving and Data Analysis</label>
                        <div className="collapsible-content">
                            <div className="collapsible-inner" style={{  
                                paddingBottom: "150px",
                                }}>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-collabsible" style={{ paddingBottom: "50px" }}>
                        <input id="PTAM-collapsible" className="toggle" type="checkbox"></input>
                        <label for="PTAM-collapsible" className="lbl-toggle">Passport to Advanced Math</label>
                        <div className="collapsible-content">
                            <div className="collapsible-inner" style={{  
                                paddingBottom: "150px",
                                }}>
                                    <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                                        <PassportToAdvancedMathIntroduction />
                                        <PolynomialsPart1 />
                                        <PolynomialsPart2 />
                                        <PolynomialsPart3 />
                                        <QuadraticFunctionPart1 />
                                        <QuadraticFunctionGraphicalAnalysis />
                                        <QuadraticFunctionGraphicalAnalysis2 />
                                        <FactoringPart1 />
                                        <FactoringPart2 />
                                        <ExponentRules />
                                        <ExponentRules2 />
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-collabsible">
                        <input id="ATIM-collapsible" className="toggle" type="checkbox"></input>
                        <label for="ATIM-collapsible" className="lbl-toggle">Addtional Topics in Math</label>
                        <div className="collapsible-content">
                            <div className="collapsible-inner" style={{  
                                paddingBottom: "150px",
                                }}>
                            </div>
                        </div>
                    </div> */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default SatPrep