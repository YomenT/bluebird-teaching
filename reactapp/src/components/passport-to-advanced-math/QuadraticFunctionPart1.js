import React from "react";

class QuadraticFunctionPart1 extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                
                <h3 className="h3-blue-headers">Introduction to The Quadratic Function</h3>

                <p className="p-body">
                    The SAT covers quite a bit of ground when it comes to quadratics.  You'll have questions related to graphing quadratics, factoring 
                    quadratics (trinomials, binomials, etc), solving quadratics, etc.  
                </p>

                <p className="p-body">
                    The graph of a quadratic function looks like a "bell curve".  Below are just a few examples.
                </p>

                <img 
                    src={"https://i.ibb.co/dLCzYHH/Screenshot-3.png"}
                    alt="Sample Quadratic Equation Graph"
                    width={350}
                    height={350} />

                <p className="p-body">
                    Quadratic functions also have a standar form of: <strong>ax<sup>2</sup> + bx + c = 0</strong>
                </p>

                <p className="p-body-small">
                    A, b, and c are all constants.  Below are example quadratic equations in standard form.
                </p>

                <ul className="p-body">
                    <li>x<sup>2</sup> - x + 1 = 0</li> 
                    <li>x<sup>2</sup> + 1 = 0</li>
                    <li>4x<sup>2</sup> + 4x + 10 = 0</li>
                    <li>43x<sup>2</sup> + 6x - 22 = 0</li>
                </ul>

                <p className="p-body-small">
                    Below are examples of quadratic equations that are <strong>not</strong> in standard form.
                </p>

                <ul className="p-body">
                    <li>x<sup>2</sup> + 4x = -1</li>
                    <li>-34x<sup>2</sup> = 67 - x</li>
                    <li>9 = x<sup>2</sup></li>
                </ul>

                <p className="p-body-small">
                    If an equation is not in standard form, we simply have to move things around until it is.  Take a look at the picture below that shows 
                    a demonstration of this.
                </p>

                <img 
                    src={"https://i.ibb.co/3RvFkDf/Standard-Form1.png"}
                    alt="Sample Quadratic Equation Graph"
                    width={200}
                    height={200} />

                <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>

                <p className='p-body'>Which of the following represent a graph of a possible quadratic function (Select all that apply)?</p>
                <p className="p-body-small">A)</p>
                <img 
                    src={"https://i.ibb.co/wSYnzm4/Quadratics-Answer2.png"}
                    alt="Sample Quadratic Equation Graph"
                    width={200}
                    height={200} />
                <p className="p-body-small">B)</p>
                <img 
                    src={"https://i.ibb.co/6JhkCBV/Quadratics-Answer3.png"}
                    alt="Sample Quadratic Equation Graph"
                    width={200}
                    height={200} />
                <p className="p-body-small">C)</p>
                <img 
                    src={"https://i.ibb.co/h8NtMB7/Quadratics-Answer1.png"}
                    alt="Sample Quadratic Equation Graph"
                    width={200}
                    height={200} />
                <p className="p-body-small">D)</p>
                <img 
                    src={"https://i.ibb.co/rF4Lqzb/Quadratics-Answer4.png"}
                    alt="Sample Quadratic Equation Graph"
                    width={200}
                    height={200} />
            </div>
        )
    }
}

export default QuadraticFunctionPart1