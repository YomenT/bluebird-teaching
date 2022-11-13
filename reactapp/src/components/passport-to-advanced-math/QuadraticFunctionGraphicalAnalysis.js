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

                <p className="p-body">
                    Take a look at the graphs below; let's analyze the difference(s).
                </p>

                <p className="p-body">
                    x<sup>2</sup> + 1 = y
                </p>

                <img 
                    src={"https://i.ibb.co/jzrjpK7/Graphical-Analysis1.png"}
                    alt="Graphical Analysis 1"
                    width={350}
                    height={350} />

                <p className="p-body" style={{ paddingTop: "25px" }}>
                    -x<sup>2</sup> + 1 = y
                </p>

                <img 
                    src={"https://i.ibb.co/Fzz76Xh/Graphical-Analysis2.png"}
                    alt="Graphical Analysis 1"
                    width={350}
                    height={350} />

                <p className="p-body" style={{ paddingTop: "25px" }}>
                    There is only one difference.  The one that had a positive x<sup>2</sup> opened upward, and the one with a negative x<sup>2</sup> opened downward.  Let's 
                    break this down.
                </p>

                <p className="p-body-small">
                    Remember the standard form we learned about in the last lesson (ax<sup>2</sup> + bx + c = 0)?  In the equations we used, there is no "bx", but that's not 
                    needed; we'll get into its importance later.  Whether "bx" is there or not, if the "a" value is positive, the graph opens upward; if the "a" value is 
                    negative, the graph opens downward.
                </p>
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis