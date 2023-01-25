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

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <strong>Standard Form: </strong> <span style={{ color: "#5b92e5" }}><i>y = ax<sup>2</sup> + bx + c</i></span>
                    </p>

                    <ul className="p-body">
                        <li>The "c" term represents the y-intercept.</li>
                        <li>If "a" is positive, the graph opens upward; if b is negative, the graph opens downward.</li>
                        <li>The "a" value also controls wide or narrow the parabola is going to be.</li>
                            <ul>
                                <li>If the "a" value is smaller than 1 but bigger than 0, then the parabola opens wider than normal.</li>
                                <li>If the "a" value is bigger than 1, then the parabola opens narrower than normal.</li>
                            </ul>
                    </ul>

                    <img 
                        src={"https://i.ibb.co/xX1sTRh/Quadratic-Function1.jpg"}
                        alt="Work Shown"
                        className="center-image"
                        width={400}
                        height={300} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunction