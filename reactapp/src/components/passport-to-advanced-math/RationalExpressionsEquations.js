import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressionsEquations extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Equations With Rational Expressions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        In this lesson, we're gonna combine what we know about solving equations, simplifying rational expressions, and a few new steps to learn how to solve 
                        equations with rational expressions.
                    </p>

                    <p className="p-body-small">
                        Just a heads up, these equations you are about to see might look scary, but they're not as tough as they look.  The key thing is to remember our 
                        steps for inverse operations.  Remember that stuff?  To separate two terms, we do the opposite of what is happening in the equation.  These 
                        problems can sometimes get messy, with a lot of distribution and combining like terms, but most of the time, there should be a way to cancel out 
                        a lot of terms.  You'll see what I mean in a second.  
                    </p>

                    <p className="p-body-medium">
                        We've seen what simplifying rational expressions looks like; now let's see what solving an equation containing rational expressions might look like.
                    </p>

                    {/* 
                        Example of a somple equation with rational expressions.
                        Should not contain anything that can be canceled out just yet. 
                    */}

                    <p className="p-body-medium">
                        Now let's see an example where we can see some of that cancelling out to make things easier.
                    </p>

                    {/* 
                        Example of a somple equation with rational expressions that contains cancelling out.
                    */}

                    <p className="p-body-medium">
                        Lastly, let's see what a tough/messy example problem might look like.  
                    </p>

                    {/* 
                        Example of a somple equation with rational expressions.
                        This problem should get pretty messy.
                    */}

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressionsEquations