import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunction extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Closer Look at Quadratic Functions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Let's take a deeper look into quadratic functions.  Some of this stuff is going to be new; some of this is going to be review.  
                        Let's start with what we've learned so far about quadratic functions.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center" }}>
                        <strong>Standard Form: </strong> <span style={{ color: "#5b92e5" }}><i>y = ax<sup>2</sup> + bx + c</i></span>
                    </p>

                    <p className="p-body-small">

                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunction