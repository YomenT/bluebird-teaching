import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class ExponentialEquations extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Exponential Equations</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        This lesson will hopefully get you prepared for working with exponential equations you might encounter in the math portion of the SAT.
                    </p>

                    <p className="p-body-medium">
                        Exponential equations can actually be solved easily when we have the same base.  If we have the example shown below, the base would be the "b" 
                        character, and the exponent would be the "m" character.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <span style={{ color: "#5b92e5" }}><i>b<sup>m</sup></i></span>
                    </p>

                    <p className="p-body-medium">
                        So if we have an equation where the terms on either side of the equal sign have the same base, we can just set the exponents equal to each other.  
                        We'll see an actual example of this with actual numbers in a second, but below is the definition provided that you can apply.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <span style={{ color: "#5b92e5" }}><i>b<sup>m</sup> = b<sup>n</sup> &rarr; m = n</i></span>
                    </p>

                </div>
            
            <Footer />
            </div>
        )
    }
}

export default ExponentialEquations