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

                    <p className="p-body" style={{ paddingTop: "50px" }}><i>x<sup>2</sup> = y</i></p>
                    <img 
                        src={"https://i.ibb.co/G0xDZjD/Graphical-Analysis3.png"}
                        alt="Answer Choice 1"
                        width={600}
                        height={600} />

                    <p className="p-body" style={{ paddingTop: "30px" }}><i>4x<sup>2</sup> = y</i></p>
                    <img 
                        src={"https://i.ibb.co/601Ts2D/Graphical-Analysis4.png"}
                        alt="Answer Choice 1"
                        width={600}
                        height={600} />

                    <p className="p-body" style={{ paddingTop: "30px" }}><i>0.5x<sup>2</sup> = y</i></p>
                    <img 
                        src={"https://i.ibb.co/c87wmyW/Graphical-Analysis5.png"}
                        alt="Answer Choice 1"
                        width={600}
                        height={600} />

                    <p className="p-body" style={{ paddingTop: "50px" }}>
                        As you might have noticed, making the "a" greater than 1 makes the graph skinnier; while making the "a" value a fraction between 1 and 0 makes 
                        the graph wider. 
                    </p>

                    <p className="p-body-small">
                        If you like, try going on Desmos again and try to experiment some more with this.  Below are some example equations to try.
                    </p>
                    <ul className="p-body">
                        <li>2x<sup>2</sup> = y</li>
                        <li>6x<sup>2</sup> = y</li>
                        <li>0.8x<sup>2</sup> = y</li>
                        <li>0.2x<sup>2</sup> = y</li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis2