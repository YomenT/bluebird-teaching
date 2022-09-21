import React from "react";
import ReactPlayer from "react-player";

class PolynomialsPart3 extends React.Component {

    render() {

        return (
            <div className="contanier-fluid">
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <div className="row">
                    <h3 className="h3-blue-headers">Polynomials Part 3: Multiplying Monomials, Binomials, and Polynomials</h3>
                </div>

                <div className="row">
                    <p className="p-body">
                        The last part in the polynomials series, we'll look at multiplying terms.  A lot of times people will just call this "distribution".  To be 
                        honest, I don't know if they 100% mean the same thing; regardless, we'll be looking at multiplying monomials with binomials with polynomials.
                    </p>

                    <p className="p-body">
                        We can't just drop parentheses anymore and start adding/subtracting terms.  To put this in a nice and easy way, we're going to look at 
                        using the FOIL method.  Take a look at the video below.
                    </p>

                    <p className="p-body-small">
                        Watch this short video of this awesome person explaining the foil method.  I just chose this video because it's short and sweet.  There's 
                        plenty more videos online that go more in depth if you need them.  As always, feel free to reach out with any questions!
                    </p>

                    <div>
                        <ReactPlayer 
                            url="https://www.youtube.com/watch?v=Axv7cqezipY"
                        />
                    </div>

                    <p className="p-body-small">
                        The FOIL method applies to multiplying binomials, but we really just use the same way of thinking for multiplying all other groups of terms 
                        (polynomials).  No matter the number of terms in the parentheses, start from the left and multiply one term at a time with the rest of the 
                        terms in the second set of parentheses.
                    </p>

                    <img 
                        src={"https://i.ibb.co/k2HXvyz/PNG-image-4.png"}
                        alt="Function Notation"
                        width={350}
                        height={350} />
                </div>

                <div className='row'>
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                </div>

                <div className='row'>
                    <p className='p-body'>1.  4(3x - 5)</p>
                </div>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  7x - 9</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  7x - 20</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  12x + 20</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  12x - 20</p>

                <div className='row'>
                    <p className='p-body'>2.  (-y - x)(12 - x)</p>
                </div>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  x<sup>2</sup> + xy - 12x - 12y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  -x<sup>2</sup> - xy - 12x - 12y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  -x<sup>2</sup> - xy + 12x + 12y</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  xy - 11x - 12y</p>

                <div className='row'>
                    <p className='p-body'>3.  (-4 - 10y)(1 + x)</p>
                </div>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>A)  -10xy - 14y - 4</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>B)  -10xy - 14x - 4</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>C)  -10xy - 10y - 4x - 4</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>D)  -10xy - 10y + 4x + 4</p>

                <div className="row">
                    <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                </div>

                <p className="p-body">
                    If you created whatever form of summary in part 2 of polynomials (the very last section), go ahead and take what you've learned to add to that 
                    summary.  You can use the same method you used in the last section to summarize, or you can do something new.  For example, if you created some sort of 
                    written summary in the last section, try creating some sort of verbal summary you share with your pet.
                </p>
            </div>
        )
    }
}