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
                        We've seen what simplifying rational expressions looks like; now let's see what solving an equation containing rational expressions might look 
                        like.  Just a heads up, this might look a little bit messy, but really just focus on the part where I'm simplifying the equation down.  From there, 
                        I'm just going to use the quadratic formula to solve the equation.
                    </p>

                    <img 
                        src={"https://i.ibb.co/v4kfTpy/Rational-Expression-Equation1.png"}
                        alt="Adding rational expressions problem."
                        width={200}
                        height={150} />

                    <p className="p-body-medium" style={{ paddingTop: "25px" }}>
                        Now let's see an example where we can see some of that cancelling out to make things easier.  You'll see that in this scenario, I actually didn't 
                        need to use the quadratic formula.  This is just because, just by chance, I didn't end up with a quadratic; instead, I just ended up with a regular 
                        linear equation that I can solve like I solve any one variable equation.    
                    </p>

                    <img 
                        src={"https://i.ibb.co/zfXbk01/Rational-Expression-Equation2.png"}
                        alt="Adding rational expressions problem."
                        width={200}
                        height={150} />

                    <p className="p-body-medium" style={{ paddingTop: "25px" }}>
                        The important take away here is to be patient and flexible.  When solving an equation with rational expressions, you might need to pull out your 
                        factoring skills, your quadratic formula skills, or just solving one variable equations.
                    </p>

                    <p className="p-body-medium">
                        <strong>Regardless of whatever equation you end up with, </strong> it should always come down to working with a quadratic or a linear equation.  
                        Now you might look at the first picture above, and see that wasn't a quadratic, but there should always be some work around to break down what 
                        you ended up with.  I don't know if I can promise you this, but it really should most of the time end up being working with a quadratic or a linear 
                        equation.
                    </p>

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                    

                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressionsEquations