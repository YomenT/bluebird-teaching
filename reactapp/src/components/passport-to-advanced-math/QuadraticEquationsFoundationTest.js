import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticEquationsFoundationTest extends React.Component {

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
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticEquationsFoundationTest