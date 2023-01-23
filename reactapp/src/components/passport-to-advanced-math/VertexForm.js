import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class VertexForm extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Introduction to Vertex Form (Quadratic Equations)</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body">
                        We've seen standard form for both linear equations and quadratic equations, but there's actually another form that quadratics 
                        can be written in; it's called vertex form.  
                    </p>

                    <p className="p-body-small">
                        Standard form is useful when we're trying find the x-intercepts, solving, etc.  Vertex is actually mostly used for more graphing 
                        quadratic equations.  You might think, "why not just use the graphing calculator to graph them".  Thing is, that's not going to 
                        always be possible.  There are going to be no calculator portions of the SAT, and even in the calculator allowed portions, the 
                        question can be phrased in a way that makes using a calculator difficult.   
                    </p>

                    <p className="p-body">
                        This lesson will look at how to go from standard form to vertex form.  In the next lesson, we'll look at how to actually use 
                        the vertex form to graph the given quadratic equation.
                    </p>

                    <p className="p-body" style={{ paddingTop: "25px" }}><strong>What does vertex form look like?</strong>  Below is the form definition, 
                    and some actual examples of what it would look like.</p>

                    <p className="p-body-small">
                        To switch from standard form to vertex form, <strong>we actually use completing the square</strong>.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default VertexForm