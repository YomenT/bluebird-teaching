import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressions2 extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Simplifying Rational Expressions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-medium" style={{ paddingTop: "25px" }}>
                        In the previous lesson, we went over the four possible operations for rational expressions: addition, multiplication, subtraction, and division.  
                        In this lesson, we're going to look at how we can simplify rational expressions.  
                    </p>

                    <p className="p-body-small">
                        Remember in the previous lesson where I mentioned rational expressions isn't always so black and white; I didn't always FOIL/distribute everything?  
                        Basically, you're not always going to want to FOIL or distribute terms.  We're going to learn why in this lesson.  Let's consider the problem below.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>(x - 3)</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5x</span>
                        </div>
                        &times;
                        <div className="frac" style={{ paddingLeft: "10px" }}>
                            <span className="top">(x + 4)</span>
                            <span className="symbol">/</span>
                            <span className="bottom">(x - 3)</span>
                        </div>
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressions2