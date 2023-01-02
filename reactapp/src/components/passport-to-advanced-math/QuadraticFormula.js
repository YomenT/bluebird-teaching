import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFormula extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Graphical Analysis of Quadratic Functions (Part 2)</h2>
                </div>
                <div className="aboutBodyDiv">

                    <p className="p-body">
                        Remember how we talked about factoring being one way to finding the solutions or x-intercepts to a quadratic equation?  There 
                        is another method to get the same results; it's called the quadratic formula.  
                    </p>

                    <p className="p-body-small">
                        Why have two methods to produce the same result?  This is because a quadratic equation can't always be factored so easily.  For 
                        example, try factoring x<sup>2</sup> + 5x + 2 = 0.  
                    </p>

                    <p className="p-body-small">
                        You'll notice that there's no two whole numbers that you can think of that multiplies to get positive 2, and that also add to get 
                        positive 5.  This is the perfect example of when we might use the quadratic formula over factoring; even though they serve the same 
                        purpose.
                    </p>

                    <p className="p-body">
                        Below is the quadratic formula.  I know it looks a bit wacky, but we'll go through on how to actually use it.
                    </p>

                    <img 
                        src={"https://i.ibb.co/dM4xwyD/Quadratic-Formula1.png"}
                        alt="The Quadratic Formula"
                        width={250}
                        height={250} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFormula