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

                    <p className="p-body" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <div class="frac" style={{ paddingRight: "10px" }}>
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

                    <p className="p-body-small">
                        First thing, we're still going to multiply across like we did in the last lesson.  Once we do that, we should have the rational expression shown below.
                    </p>

                    <p className="p-body" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <div className="frac">
                            <span className="top">(x - 3)(x + 4)</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5x(x - 3)</span>    
                        </div>
                    </p>

                    <p className="p-body-small">
                        This is where, like in the last lesson, we stop for a second.  When it comes to working with rational expressions, we're usually trying to cancel 
                        out things.  If we go ahead and FOIL the numerator, we won't see it anymore, but do you see a way we might be able to cancel something out?  In 
                        this case, the numerator and the denominator both have a common factor (the x - 3); if we FOIL, we actually lose that common factor.
                    </p>

                    <p className="p-body-small">
                        Just like with normal fractions, we can canel out common factors that show up in the numerator and denominator.  If we do that, we'll be left with 
                        what's shown below.  
                    </p>

                    <p className="p-body" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <div className="frac">
                            <span className="top">(x + 4)</span>
                            <span className="symbol">/</span>
                            <span className="bottom">5x</span>    
                        </div>
                    </p>

                    <p className="p-body-small">
                        While you've probably learned these fraction tricks in school, I realize we haven't really done much of this in this SAT prep series.  <i>If you
                        have any questions feel free to shoot us an email.  We can set up a call time and settle any questions.</i>
                    </p>

                    <p className="p-body">
                        Something to keep in mind is that when it comes to simplifying rational expressions, the SAT might utilize some of your other skills as well.  
                        SAT questions related to simplifying rational expressions also utilize factoring in some fashion.  We'll practice this a bit in the practice problems 
                        ahead.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <p className="p-body-small">
                        Some of these questions are just going to be simplification questions.  This will not only give more practice, but this might actually happen in the 
                        SAT.  You might get a question that is just simplification.  
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressions2