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


                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticEquationsFoundationTest