import React from "react";

class PolynomialsPart1 extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <div className="row">
                    <h3 className="h3-blue-headers">Polynomials: Combining Like Terms</h3>
                </div>

                <div className="row">
                    <p className="p-body">
                        Let's start this "hard" portion of the SAT nice and easy; we'll spend these next few sections learning about polynomials.  In this particular 
                        section, we're going to talk about combining like terms within a polynomial.  We're going to have a bunch of expressions containing at least 3 terms 
                        (since that's what a polynomial is), and we're just going to see if any of the terms will combine to simplify the expression as much as possible.
                    </p>
                    <p className="p-body-small">
                        In an expression, terms can combine if they have the same variable (or no variable), <strong>and</strong> they have the same exponent.  
                        Click <a href={"https://www.mathsisfun.com/definitions/like-terms.html"} target={"_blank"} className="anchor">here</a> for a website that gives a nice summary.
                    </p>
                </div>
            </div>
        )
    }
}

export default PolynomialsPart1