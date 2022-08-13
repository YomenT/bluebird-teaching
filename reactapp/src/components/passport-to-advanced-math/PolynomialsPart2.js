import React from "react";

class PolynomialsPart2 extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <div className="row">
                    <h3 className="h3-blue-headers">Polynomials Part 2: Adding Monomials, Binomials, and Polynomials</h3>
                </div>

                <div className="row">
                    <p className="p-body">
                        We're going to be doing what we did in the last section; with just one added step, so this section shouldn't be too hard.    
                    </p>

                    <p className="p-body-small">
                        If you're still having any trouble at all with combining like terms (the previous section), I would try to focus on that for a bit 
                        more for now.  Combining like terms is an essential foundational skill.  A lot of future lessons will use combining like terms in 
                        some way.  Gotta make sure your foundation is strong before building on it.  Always reach out if you need any help!
                    </p>

                    <p className="p-body">
                        The one added step I mentioned is going to be at the beginning of the problem.  The important thing here is to just not 
                        overthink this.  We're going to see what happens when we add/subtract a set of two terms (a binomial) with another set of two terms, add/subtract 
                        just one term (a monomial) with a set of three terms (a trinomial/polynomial), etc.
                    </p>

                    <img 
                        src={"https://ibb.co/kx7DXMt"}
                        alt="Function Notation"
                        width={350}
                        height={350} />
                </div>
            </div>
        )
    }
}

export default PolynomialsPart2