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

                    <p className="p-body" style={{ paddingTop: "25px" }}>
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
                        width={325}
                        height={175} />

                    <p className="p-body" style={{ paddingTop: "30px" }}>
                        If you haven't caught it, all those variables (a, b, and c) all come straight from the quadratic equation that you're working with.  Remember 
                        that example equation I gave you earlier?  In x<sup>2</sup> + 5x + 2 = 0, the a value is 1, the b value is 5, and the c value is 2.  You just 
                        plug those values into the quadratic formula and solve for x.  
                    </p>

                    <p className="p-body">
                        That funny symbol right in front of the "-b" is actually representing a "+" sign and a "-" sign.  You'll see it in my work below, but remember how 
                        quadratic equations possibly have two solutions?  This is how we get our two solutions with the quadratic equation.  
                    </p>

                    <img 
                        src={"https://wikimedia.org/api/rest_v1/media/math/render/svg/6a1536aafb8b9a1e6eb3afb5a0982a65b7f63ca4"}
                        alt="The Two Solutions"
                        width={411}
                        height={61} />

                    <p className="p-body-small" style={{ paddingTop: "30px" }}>
                        <i>
                            If you aren't sure how I got those values for a, b, and c, please feel free to reach out and ask about it, or just reach out with 
                            any other qustions you might have.
                        </i>
                    </p>

                    <p className="p-body-small">
                        Below is my work shown to use the quadratic formula to solve x<sup>2</sup> + 5x + 2 = 0.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFormula