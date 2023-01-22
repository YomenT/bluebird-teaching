import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticEquationsFoundationTest extends React.Component {

    wrongAnswer(e) {
        e.target.style.color = "#E32636"
        e.target.style.pointerEvents = "none"
        e.getElementsByTagName('p')[0].innerHTML = "testing"
    }

    rightAnswer(e) {
        e.target.style.color = "#018749"
        e.target.style.pointerEvents = "none"
    }

    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Let's Review Quadratics</h2>
                </div>
                <div className="aboutBodyDiv">

                    <p className="p-body-medium" style={{ paddingTop: "25px" }}>
                        There's still more to know about quadratics; particularly, how the SAT applies quadratic equations and what we 
                        learned (factoring, quadratic formula, and completing the square) into its questions.  Sometimes, there will 
                        be a question directly to solve a quadratic equation; however, most of the time, you'll be using your skills 
                        in factoring, the quadratic formula, and completing the square in various other applications.
                    </p>

                    <p className="p-body">
                        Before moving on, it's important to really make sure we have the foundations of quadratics 100% understood.  
                        Below are a series of questions that'll hopefully ensure that understanding of quadratics is ready to go.
                    </p>

                    <p className="p-body-small">
                        Remember that this isn't a test or quiz.  I'm obviously not going to grade any of this.  I'm not even going to 
                        see whether you got anything right or wrong.  It's really all up to you.  After you've answered the questions, do 
                        you feel like there are still any questions in your head?  Something doesn't seem right?  If there's any doubt at 
                        all, please feel free to reach out!  We're happy to answer any questions, or just discuss quadratics; sometimes 
                        discussing a topic is really the best practice there is.  Ever wondered how quadratics are used in the real world?  
                        Feel free to discuss that with us, or look that up on your own.  Either way, don't hesitate to "talk" quadratics.
                    </p>

                    <p className="p-body-small">
                        <i>
                            Most of the questions are going to be multiple choice.  Remember to use the answer choices as guidence if you're 
                            stuck.
                        </i>
                    </p>

                    <p className="p-body-small">
                        <strong>
                            <i>
                                You can use a calculator for any of these questions.
                            </i>
                        </strong>
                    </p>

                    <p className="p-body" style={{ paddingTop: "50px" }}>
                        <strong>Answer the following questions using the factoring method.</strong>
                    </p>

                    <p className='p-body'>1.  Find the factors for x<sup>2</sup> + 2x - 24 = 0</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>A)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>C)  (x - 4) and (x + 6)</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  </p>

                    <p className='p-body'>2.  Find the solutions for x<sup>2</sup> + x - 12 = 0</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>A)  x = 3 and x = -4</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  </p>

                    <p className='p-body'>3.  Find the x-intercepts for 3x<sup>2</sup> - 9x - 12 = 0</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>A)  x = 4 and x = -1</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  </p>

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        <strong>Answer the following questions using the quadratic formula.</strong>
                    </p>

                    <p className='p-body'>4.  Find the x-intercepts for 2x<sup>2</sup> - 8x - 2 = 0</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>A)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>D)  x = 4.236 and x = -0.236</p>

                    <p className='p-body'>6.  Find the roots for x<sup>2</sup> - 4x - 5 = 8</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>A)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>B)  x = 6.123 and -2.123</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  </p>

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        <strong>Answer the following questions using completing the square.</strong>
                    </p>

                    <p className='p-body'>7.  Find the x-intercepts for x<sup>2</sup> - 4x - 32 = 0</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>A)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>B)  x = 8 and x = -4</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  </p>

                    <p className='p-body'>8.  Find the factors for x<sup>2</sup> + 8x + 15 = 0</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>A)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  </p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>C)  x = -3 and x = -5</p>
                    <p className="p-body-small" id="answer-choice" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  </p>

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        <strong>
                            The following questions still involve direct work with quadratics, but they just aren't multiple 
                            choice anymore.  Answer them to the best of your ability; if you need help, please reach out to us!
                        </strong>
                    </p>

                    <p className="p-body">
                        9.  Put 9 - 3x = 2x<sup>2</sup> into standard form.
                    </p>

                    <p className="p-body">
                        10.  
                    </p>

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        <strong>
                            Think of these next few questions as short-answer.  Obviously, since no one is actually 
                            going to grade you, you don't have to actually write down answers, but we strongly encourage 
                            actually answering each of these questions in your head.
                        </strong> 
                    </p>

                    <p className="p-body-small">
                        If you are confused by any of the questions, aren't sure how to answer any of the questions, or would 
                        just like to talk about any of the questions, please feel free to reach out to us!
                    </p>

                    <p className="p-body-medium">
                        9.  Can you summarize the steps for using completing the square, factoring, or the quadratic formula to 
                        solve a quadratic equation?  
                    </p>

                    <p className="p-body-medium">
                        10.  When going through the above multiple choice questions, were there any mistakes you kept repeating?  
                        Usually repeated mistakes are very small, like forgetting the correct sign, but these small mistakes might 
                        just lead you to the wrong answer on the SAT.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticEquationsFoundationTest