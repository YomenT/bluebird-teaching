import React from "react";

class QuadraticFunctionGraphicalAnalysis extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                
                <h3 className="h3-blue-headers">A Graphical Analysis of Quadratic Functions (Part 1)</h3>

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

                <p className="p-body">
                    What about the "c" value?
                </p>

                <p className="p-body-small">
                    The "c" value dictates the vertical position of the start of the graph (vertex).  In the example equation, the "c" value is 1, so the vertex is 
                    right at y = 1 or (0, 1).  If we had the same exact equation, but the "c" value was -4, the vertex would be at y = -4 or (0, -4).
                </p>

                <p className="p-body-small">
                    <i>What about horizontal positioning of the vertex?  Will the x value of the vertex always be 0?</i>  No, the x value is not always 0 for the vertex.  
                    It's just that in this example equation above, the x value of the vertex is 0.  If we had a "bx" term, then the vertex would not be on the y axis anymore.  
                    Don't worry about that for now though; we'll get to that later.
                </p>

                <p className="p-body-small">
                    The important takeaways from this lesson are the effects of positive/negative "a" values, and the effects of positive/negative "c" values.
                </p>

                <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                <p className='p-body'>1.  Which of the following represents the graph for -x<sup>2</sup> - 5 = y?</p>
                <p className="p-body-small">A)</p>
                <img 
                    src={"https://i.ibb.co/6nK08zq/Graphical-Analysis-Answer1.png"}
                    alt="Answer Choice 1"
                    width={300}
                    height={300} />
                <p className="p-body-small" style={{ paddingTop: "30px" }}>B)</p>
                <img 
                    src={"https://i.ibb.co/YBpbqsF/Graphical-Analysis-Answer2.png"}
                    alt="Answer Choice 2"
                    width={300}
                    height={300} />
                <p className="p-body-small" style={{ paddingTop: "30px" }}>C)</p>
                <img 
                    src={"https://i.ibb.co/WtYJJyq/Graphical-Analysis-Answer3.png"}
                    alt="Answer Choice 3"
                    width={300}
                    height={300} />
                <p className="p-body-small" style={{ paddingTop: "30px" }}>D)</p>
                <img 
                    src={"https://i.ibb.co/NYW3h8z/Graphical-Analysis-Answer4.png"}
                    alt="Answer Choice 4"
                    width={300}
                    height={300} />
            </div>
        )
    }
}

export default QuadraticFunctionGraphicalAnalysis