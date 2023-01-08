import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class CompletingTheSquare extends React.Component {

    underlineLink(e) {
        e.target.style.textDecoration = "underline"
    }

    removeUnderline(e) {
        e.target.style.textDecoration = "'none';"
    }
    
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Completing the Square</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        We've covered factoring and the quadratic formula, and we mentioned that they both achieve the same results 
                        (finding the x-intercepts).  Factoring goes through the process of finding the factors of that quadratic 
                        equation, but if that's not very easy because they're not clean whole numbers, we use the quadratic formula.  
                        Completing the square is yet a third way to find the x-intercepts of a quadratic equation.  While I'm going to 
                        teach you this method, it's actually rarely used for that purpose.  It's hard to explain right now.  For now, 
                        I'm just going to teach you how to use it to find the x-intercepts; just like factoring and the quadratic 
                        formula.
                    </p>

                    <p className="p-body">
                        In this lesson, we're going to look at completing the square; our last method to finding the x-intercepts (or solving) 
                        for a quadratic equation.  Watch <a href="https://www.youtube.com/watch?v=xGOQYTo9AKY" style={{ color: "#5b92e5" }} 
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this video</a> to see an example of how this is done.
                    </p>

                    <p className="p-body">
                        Prefer reading about it?  Try <a style={{ color: "#5b92e5" }} href="https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratic-functions-equations/x2f8bb11595b61c86:more-on-completing-square/a/solving-quadratic-equations-by-completing-the-square"
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this resource</a> from Khan Academy, or 
                        try <a style={{ color: "#5b92e5" }} href="https://www.brainfuse.com/jsp/alc/resource.jsp?s=gre&c=35261&cc=108824" 
                        onMouseOver={this.underlineLink} onMouseOut={this.removeUnderline}>this resource</a> from Brainfuse.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CompletingTheSquare