import React from "react";
import ReactPlayer from "react-player";

import Logo from '../Logo'
import Footer from '../Footer'

class QuadraticInequalities extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Quadratic Inequalities</h2>
                </div>

                <div className="aboutBodyDiv">
                    
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        We work quadratic inequalities with the same logic as we used to work linear inequalities.  
                    </p>

                    <p className="p-body-small">
                        Back with linear inequalities, for the most part, we just treated them as normal linear equations; with just a few extra notes to keep in mind.  
                        We're going to be doing the same thing here.  When we work with quadratic inequalities, we're going to treat them just like quadratic equations, 
                        but we're just going to have a few added steps.
                    </p>

                    <p className="p-body">
                        Try solving the following inequality.  For now, do the best you can and just treat it like a normal quadratic equation.  Once you've got your two 
                        solutions, you can stop there, and watch the video below to see how to handle the inequality part.
                    </p>

                    <p className="p-body-medium" style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                        <strong>solve: </strong> <span style={{ color: "#5b92e5" }}><i>2x<sup>2</sup> - 6x + 2 &gt; -2</i></span>
                    </p>

                    <p className="p-body-small">
                        Just watch the work he shows for problem 1 for now.  Once he gets to the second problem that he works on, you can stop there.
                    </p>

                    <div>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=XRlTsrDsHg8&t=207s"
                        />
                    </div>

                </div>

            <Footer />
            </div>
        )
    }
}

export default QuadraticInequalities