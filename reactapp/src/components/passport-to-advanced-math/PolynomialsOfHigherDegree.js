import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class PolynomialsOfHigherDegree extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Working With Polynomials Of Higher Degree</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-small">
                        The last few lessons might have been a bit tough.  Hopefully, this lesson should be a sort of break for you.
                    </p>

                    <p className="p-body">
                        We're going to learn how to handle polynomials of higher degrees.  That might sound scary, but it's actually really easy because we've actually 
                        already been doing the same method before.  
                    </p>

                    <p className="p-body-small">
                        We actually use factoring by grouping.  If you don't remember what that is, take a look at the example below.
                    </p>

                    <img 
                        src={"https://i.ibb.co/p17T5V8/Polynomials-Of-Higher-Degree1.png"}
                        alt="Work shown for handling polynomials of higher degree."
                        width={400}
                        height={400} />

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        We factor by grouping in a very similar manner like when we factor quadratics that have an "a" value greater than 1.
                    </p>

                    <p className="p-body-medium">
                        Remember that when we have a function that is factored like <span style={{ color: "#5b92e5" }}>y = (x - a)(x - b)(x - c)</span>, then we can 
                        find the zeros/solutions by setting that equation to zero.  If we do, <span style={{ color: "#5b92e5" }}>(x - a)(x - b)(x - c) = 0</span>, then 
                        <span style={{ color: "#5b92e5" }}>a</span>, <span style={{ color: "#5b92e5" }}>b</span>, and <span style={{ color: "#5b92e5" }}>c</span> are all 
                        the x-intercepts/solutions/zeros.
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default PolynomialsOfHigherDegree