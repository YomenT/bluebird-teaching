import React from "react";

class QuadraticFunctionGraphicalAnalysis extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                
                <h3 className="h3-blue-headers">A Graphical Analysis of Quadratic Functions</h3>

                <p className="p-body">
                    We're going to look more into what quadratic equations look like when they are graphed.
                </p>

                <p className="p-body-small">
                    Specifically, we're going to look at how different operations on a quadratic function change how the graph would look.  We're not going to 
                    look at graphing a quadratic function by hand just yet.  Instead we're just going to do a graphical analysis; for example, what graphical 
                    difference would there be between x<sup>2</sup> + 1 = y and -x<sup>2</sup> + 1 = y?
                </p>

                <p className="p-body-small"><strong><i>Why are the equations set to y and not 0?</i></strong>  Simply put, when we are factoring/solving, we get all the x's on one side, 
                and we set the equation equal to 0.  When we are graphing, we still move all the x's to one side, but we set the equation equal to y.</p>
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis