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
                    <p className="p-body">
                        In the last session, we mainly looked at the impacts of the "a" and "c" values have on the graph of a quadratic function.  This time, we're going to look at how the "b" value from the bx term in ax<sup>2</sup> + bx + c = y 
                        impacts the graph.  
                    </p>

                    <p className="p-body-small">
                        <i>We actually encountered this a little bit in the last question of the Try It section of the previous lesson.</i>
                    </p>

                    <p className="p-body-small">
                        There is actually another form to the quadratic equation.  We've been looking at standard form, but there is actually a form called vertex form.  To fully be able to pinpoint the exact matching graph to 
                        a quadratic equation, we would actually use vertex form.  What we're doing now is a general way of graphically analyzing a quadratic equation.  We'll get more into vertex form later.  A general 
                        graphical analysis and a more precise graphical analysis are both necessary skills for the SAT.
                    </p>

                    <p className="p-body">
                        The sign (positive/negative) of the "b" value is what determines if the graph will be shifted right or left of the y axis.  <i>Again, this isn't entirely accurate; we'll see a more accurate analysis when we do vertex form.</i>  
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis2