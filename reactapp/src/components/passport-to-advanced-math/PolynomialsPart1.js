import React from "react";
import ReactPlayer from "react-player";

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
                        Click <a href={"https://www.mathsisfun.com/definitions/like-terms.html"} target={"_blank"} className="anchor">here</a> for a website that gives a nice 
                        summary.  Also, take a look at the following video.  The speaker goes through a nice challenging problem for you.  
                    </p>
                    <div>
                        <ReactPlayer 
                            url="https://youtu.be/FNnmseBlvaY"
                        />
                    </div>
                    <p className="p-body">
                        Keep in mind that in the SAT, you're probably not going to get a lot of questions where you just have to combine like terms.  Combining 
                        like terms is a skill we need to develop to work with harder problems; it's something you're usually going to want to do whenever 
                        working with expressions in the SAT.
                    </p>
                </div>

                <div className='row'>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                </div>

                <div className='row'>
                    <p className='p-body'>
                        Simplify the following expressions as much as possible by combining like terms.
                    </p>
                </div>

                <div className='row'>
                    <p className='p-body'>1.  91y + 4y - 54y</p>
                </div>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  42y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  41y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  40y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  39y</p>
            </div>
        )
    }
}

export default PolynomialsPart1