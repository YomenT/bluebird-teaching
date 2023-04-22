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

                    <p className="p-body-small" style={{ paddingTop: "25px" }}>
                        
                    </p>

                </div>
            
            <Footer />
            </div>
        )
    }
}

export default ExponentialEquations