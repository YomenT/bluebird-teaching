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

                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        <strong>What does vertex form look like?</strong>  Below is the form definition, and some actual examples of what it would look 
                        like.  Don't worry about what each of the variables represent.  We'll go over that in the next lesson.
                    </p>

                    <ul className="p-body">
                        <li><strong>Definition: y = a(x - h)<sup>2</sup> + k</strong></li>
                        <li><i>y = 2(x - 1)<sup>2</sup> + 3</i></li>
                        <li><i>y = 3(x - 2)<sup>2</sup> - 4</i></li>
                        <li><i>y = <sup>4</sup>&frasl;<sub>3</sub>(x + 2)<sup>2</sup> - 5</i></li>
                    </ul>

                    <p className="p-body-small">
                        To switch from standard form to vertex form, <strong>we actually use completing the square</strong>.
                    </p>

                    <p className="p-body-small">
                        Let's use x<sup>2</sup> + 4x - 1 = 0 as an example.  Below is my work shown on how I converted the original equation (in standard form) to 
                        the same equation but in standard form.  We'll also disect it bit by bit.  First, just look at the picture, and see if you can derive the 
                        steps in your head.  Then read through the explanation after.
                    </p>

                    <img 
                        src={"https://i.ibb.co/CwNDfy1/Vertex-Form1.jpg"}
                        alt="Work Shown"
                        width={400}
                        height={575} />

                    <p className="p-body-small">Let's summarize the steps below.</p>

                    <ol className="p-body">
                        <li>Start with the original equation in standard form <strong>(ax<sup>2</sup> + bx + c = 0)</strong>.</li>
                        <li>Following the usual steps of completing the square, I moved the c value to the other side of the equation.</li>
                        <li>
                            Followed the procedure of finding our value to make a perfect square <strong>(<sup>b</sup>&frasl;<sub>2</sub>)<sup>2</sup></strong>, 
                            and added it to both sides.
                        </li>
                        <li>Still following the same steps in completing the square, I got my two identical factors.</li>
                        <li>
                            In the second to last line, I moved the -5 back to the left side to set the whole equation to zero; to get equation to look more like 
                            the vertex form definition <strong>(y = a(x - h)<sup>2</sup> + k)</strong>.
                        </li>
                        <li>Lastly, I set the equation equal to y.</li>
                    </ol>
                </div>
                <Footer />
            </div>
        )
    }
}

export default VertexForm
