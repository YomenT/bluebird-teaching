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

                {/* Images of example quadratic graphs needed. */}

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
            </div>
        )
    }
}

export default QuadraticFunctionPart1