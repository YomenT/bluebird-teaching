import React from "react";
import ReactPlayer from "react-player";

import Logo from '../Logo'
import Footer from '../Footer'

class CompletingTheSquare extends React.Component {
    
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
                        for a quadratic equation.  Watch the video below to see an example of how this is done.
                    </p>

                    <div>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=xGOQYTo9AKY"
                        />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default CompletingTheSquare