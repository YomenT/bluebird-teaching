import React from "react";

class PolynomialsPart2 extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <div className="row">
                    <h3 className="h3-blue-headers">Polynomials Part 2: Adding/Subtracting Monomials, Binomials, and Polynomials</h3>
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

                    <p className="p-body">
                        Let's take a look at the image below.
                    </p>
                </div>

                <div className="row">
                    <p className="p-body-small">
                        The original question is in yellow, and the final answer is in blue.
                    </p>
                    <ol className="p-body">
                        <li>
                            Since the two sets of terms in parenthesis are being added, we can actually just drop the parenthesis around all of the sets of terms; 
                            we keep all of the signs the same.
                        </li>
                        <li>That was the added step at the beginning that we mentioned.  From here, we combine like terms like we're used to.</li>
                        <li>The only like terms are the 3x and -2x.</li>
                        <li>
                            Combining them (subtracting them because of the negative in front of the 2x) gives us our final answer of just x + y.  There's nothing 
                            more that we can combine.
                        </li>
                    </ol>

                    <img 
                        src={"https://i.ibb.co/q9M24cN/Adding-Polynomials2.png"}
                        alt="Function Notation"
                        width={350}
                        height={350} />
                </div>

                <div className="row">
                    <p className="p-body" style={{ paddingTop: "25px" }}>
                        Now let's look at another question.  Instead of adding sets of terms, we're gonna try subtracting.
                    </p>
                </div>

                <div className="row">
                    <p className="p-body-small">
                        Again, original question is in yellow, and the final answer is in blue.
                    </p>
                    <ol className="p-body">
                        <li>
                            <strong>This time, we can't just drop the paranthesis</strong>.  Think of it as almost having another added step.
                        </li>
                    </ol>
                </div>

                <div className='row'>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                </div>

                <div className="row">
                    <p className="p-body-small">
                        Always remember you can reach out for any help through the email in "Contact Us" at the bottom right of this page :)
                    </p>
                </div>

                {/* <div className='row'>
                    <p className='p-body'>1.  91y + 4y - 54y</p>
                </div>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  42y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  41y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  40y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  39y</p> */}
            </div>
        )
    }
}

export default PolynomialsPart2