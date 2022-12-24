import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunctionGraphicalAnalysis2 extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Graphical Analysis of Quadratic Functions (Part 2)</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        In the last session, we mainly looked at the impacts of the "a" and "c" values have on the graph of a quadratic function.  You may not 
                        have noticed, but the "a" value was always 1 or -1.  <i>What happens when we have a non 1 "a" value?</i>  
                    </p>

                    <p className="p-body">
                        We saw how a positive or negative value effects the graph of a quadratic equation, but let's see what happens when we change to value to 
                        anything besides just positive or negative 1.  Take a loot at the three graph variations below; see if you can tell the effects the 
                        different "a" values are having on the graph.
                    </p>

                    <p className="p-body">x<sup>2</sup> = y</p>
                    <img 
                        src={"https://i.ibb.co/G0xDZjD/Graphical-Analysis3.png"}
                        alt="Answer Choice 1"
                        width={500}
                        height={500} />

                    <p className="p-body">2x<sup>2</sup> = y</p>

                    <p className="p-body">0.5x<sup>2</sup> = y</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis2