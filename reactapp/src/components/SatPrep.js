import React from "react";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

// Heart of Algebra
import Logo from './Logo'
import Footer from './Footer'
import IntroductionToHeartOfAlgebra from "./IntroductionToHeartOfAlgebra"
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
                    <div className="wrap-collabsible" style={{ paddingBottom: "50px" }}>
                        <input id="HOA-collapsible" className="toggle" type="checkbox"></input>
                        <label for="HOA-collapsible" className="lbl-toggle">Heart of Algebra</label>
                        <div className="collapsible-content">
                            <div className="collapsible-inner" style={{  
                                paddingBottom: "150px",
                                }}>
                                <div style={{ marginLeft: "5%", marginRight: "5%" }}>
                                    <IntroductionToHeartOfAlgebra />
                                    <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                                    <h3 className="h3-blue-headers">Starting Easy: Introduction to Functions</h3>
                                    <p className="p-body" style={{ paddingBottom: "25px" }}>
                                        <strong>Definition: </strong> A function is just a relation where one x value corresponds to exactly one y value.
                                    </p>
                                    <p className="p-body-small">
                                        The best way to demonstrate this is by using the vertical line test.  Much like a lot of content covered in the Heart of Algebra, it's 
                                        that thing that you learned way back but haven't used in a while.  Basically, if you can draw vertical lines all across a coordinate plane, 
                                        and each line only crosses the graph once, then the graph does indeed represent a function.
                                    </p>
                                    <p className="p-body-small">
                                        I'm not the best artist, but I drew an example of this below.  Notice how in the first picture, each dotted line only crosses the 
                                        graph once.
                                    </p>
                                    <img 
                                        src={"https://i.ibb.co/rmjtXtc/pdfresizer-com-pdf-crop-1.png"}
                                        alt="Vertical Line Test"
                                        width={400}
                                        height={400} />
                                    <p className="p-body-small" style={{ paddingTop: "10px" }}>
                                        However, if we look at the drawing below, most of the dotted lines cross the graph twice.  It really only takes one vertical line to 
                                        cross twice for the test to fail.  Therefore, this graph does not represent a function.
                                    </p>
                                    <img 
                                        src={"https://i.ibb.co/Jrhw0Lm/Vertical.png"}
                                        alt="Vertical Line Test Fail"
                                        width={400}
                                        height={400} />
                                    <p className="p-body-small" style={{ paddingTop: "50px" }}>
                                        <i><strong>Question: </strong> Is a circle a function?</i>
                                    </p>
                                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                                    <p className="p-body">
                                        Circle the answer choice below that does not represent a function.
                                    </p>
                                    <p className="p-body-small">
                                        A)
                                    </p>
                                    <img 
                                        src={"https://i.ibb.co/0svShwz/Quadratic.png"}
                                        alt="Quadratic"
                                        width={200}
                                        height={200} />
                                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                                        B)
                                    </p>
                                    <img 
                                        src={"https://i.ibb.co/hB3wLmJ/Not-Function.png"}
                                        alt="Not a Function"
                                        width={200}
                                        height={200} />
                                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                                        C)
                                    </p>
                                    <img 
                                        src={"https://i.ibb.co/T2TGxr1/Linear.png"}
                                        alt="Linear"
                                        width={200}
                                        height={200} />
                                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                                        D)
                                    </p>
                                    <img 
                                        src={"https://i.ibb.co/RDBBgKm/Step.png"}
                                        alt="Step"
                                        width={200}
                                        height={200} />
                                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                                    <p className="p-body">
                                        Now that you've seen a sample problem involving functions and the vertical line test, try to create your own example problem.  This 
                                        example problem can be multiple choice just like the one you did, it can be a "select all that apply" type of question, etc.  Get 
                                        creative with this step!  
                                    </p>
                                    <p className="p-body-small">
                                        <i>Maybe try formulating an example problem that addresses that earlier question about circles?</i>
                                    </p>
                                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                                        Feel free in getting creative with testing it too.  Try sharing this problem with a family member, a friend, or even your math teacher.  
                                        You're always free to share the problem with us, too!
                                    </p>
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
                                        <FactoringPart1 />
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
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SatPrep