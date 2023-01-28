import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticFunction extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>A Closer Look at Quadratic Functions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Let's take a deeper look into quadratic functions.  Some of this stuff is going to be new; some of this is going to be review.  
                        Let's start with what we've learned so far about quadratic functions.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <strong>Standard Form: </strong> <span style={{ color: "#5b92e5" }}><i>y = ax<sup>2</sup> + bx + c</i></span>
                    </p>

                    <p className="p-body-small">
                        <b>Here is what we already know.</b>
                    </p>

                    <ul className="p-body">
                        <li>The "c" term represents the y-intercept.</li>
                        <li>If "a" is positive, the graph opens upward; if b is negative, the graph opens downward.</li>
                        <li>The "a" value also controls wide or narrow the parabola is going to be.</li>
                            <ul>
                                <li>If the "a" value is smaller than 1 but bigger than 0, then the parabola opens wider than normal.</li>
                                <li>If the "a" value is bigger than 1, then the parabola opens narrower than normal.</li>
                            </ul>
                    </ul>

                    <img 
                        src={"https://i.ibb.co/xX1sTRh/Quadratic-Function1.jpg"}
                        alt="a Value Impact"
                        className="center-image"
                        style={{ paddingTop: "50px", paddingBottom: "50px" }}
                        width={400}
                        height={300} />

                    <p className="p-body-small">
                        <b>Here is what might come as new.</b>
                    </p>

                    <p className="p-body-small">
                        From the equation being in standard form, we can use a little formula to quickly find the axis of symmetry.  For 
                        a parabola, the axis of symmetry is a vertical line right at the vertex.  Below is the formula we use to find the 
                        axis of symmetry (given the quadratic equation is in standard form), and a picture showing what the axis of symmetry 
                        looks like.  <i>Please forgive my awful drawing skills.</i>
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "50px", paddingBottom: "50px" }}>
                        <strong>Standard Form: </strong> <span style={{ color: "#5b92e5" }}><i>x = <sup>-b</sup>&frasl;<sub>2a</sub></i></span>
                    </p>

                    <img 
                        src={"https://i.ibb.co/4Mfddbz/Quadratic-Function2.jpg"}
                        alt="Axis of Symmetry"
                        className="center-image"
                        style={{ paddingTop: "50px", paddingBottom: "50px" }}
                        width={300}
                        height={450} />

                    <p className="p-body-small">
                        The dashed line cutting the parabola in the middle is the axis of symmetry.  It makes both sides of the graph symmetrical.  
                        Not sure if you can read my handwriting, but if the vertex is at (3, -2), then the axis of symmetry can be represented by 
                        the line x = 3.
                    </p>

                    <p className="p-body-small">
                        There are a couple of other things worth taking note of.
                    </p>

                    <ul className="p-body">
                        <li>The sum of the roots can be found by computing <sup>-b</sup>&frasl;<sub>a</sub>.</li>
                        <li>The product of the roots can be found by computing <sup>c</sup>&frasl;<sub>a</sub>.</li>
                    </ul>

                    <p className="p-body-small">
                        I know these might seem like very odd facts to know about quadratics, but the reason I'm sharing them with you is because there 
                        might be questions that require you know know these couple of odd facts.  I know it seems stupid memorizing these odd facts, but 
                        it's really worth your time.  
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default QuadraticFunction