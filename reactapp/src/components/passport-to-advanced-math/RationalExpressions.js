import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressions extends React.Component {

    render() {
        return (
            <div className="container-fluid">

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Introduction to Rational Expressions</h2>
                </div>

                <div className="aboutBodyDiv">

                    <div className="row">
                        <p className="p-body-small" style={{ paddingTop: "25px" }}>
                            <strong>What are rational expressions?</strong>  To be honest, the best way I can define them for you is they are fractions that can 
                            have variables in the numerators and/or denominators.  This is relavent to the SAT because they will have questions involving operations 
                            (adding, subtracting, multiplying, dividing) with rational expressions, and these questions also frequently involve simplifying them.  
                        </p>

                        <p className="p-body">
                            In this lesson, we're going to look at adding, subtracting, multiplying, and dividing rational expressions.  We'll leave the simplifying 
                            part for part 2.
                        </p>

                        <p className="p-body-small">
                            Since rational expressions are fractions, you're going to need to remember your fraction rules when it comes to adding, subtracting, multiplying, 
                            and dividing.  If you forgot, don't worry at all.  I strongly recommend you take some time to brush up on that; it shouldn't take long at all.
                        </p>

                        <p className="p-body-small">
                            <strong>Adding rational expressions</strong>, like adding normal fractions requires having a common denominator.  We achieve this in the same way 
                            we do with normal fractions.  Take a look at the two examples below to see how I get common denominators.
                        </p>
                    </div>

                    <div className="row" style={{ paddingTop: "50px" }}>
                        <div className="col-4">
                            <img 
                                src={"https://i.ibb.co/zXXNZTy/Rational-Expressions1.jpg"}
                                alt="Adding rational expressions example."
                                className="mx-auto d-block"
                                width={300}
                                height={250} />
                        </div>

                        <div className="col-8">
                            <p className="p-body-small">
                                In the first line, we have the original problem; we're trying to add those to fractions (also known as rational expressions).  In the 
                                second line, to the left of the arrow, I am multiplying the top and bottom of <sup>7</sup>&frasl;<sub>x</sub> by 5.  As the right of 
                                the arrow shows, I now have common denominators.  On the third and last line, following the normal steps of adding fractions, I add 
                                the numerators to get the final answer 
                            </p>
                        </div>
                    </div>

                    <div className="row" style={{ paddingTop: "50px" }}>
                        <div className="col-4">
                            <img 
                                src={"https://i.ibb.co/BcG12Tm/Rational-Expressions2.jpg"}
                                alt="Adding rational expressions example."
                                className="mx-auto d-block"
                                width={300}
                                height={250} />
                        </div>

                        <dic className="col-8">
                            <p className="p-body-small">
                                Again, we'll go line by line.  The first line just contains the original problem; we're trying to add those two rational expressions.  
                                The second line is where I'm trying to get common denominators.  I multiply the top and bottom of the left fraction by (x - 2), and I 
                                multiply the top and bottom of the right fraction with (x + 2).  The third line shows what everything looks like at this point; you'll 
                                see that both fractions now have common denominators.  In the fourth line; to the left of the equal sign, I have FOILed the numerators 
                                of both fractions, and now I can go about normally adding fractions.
                            </p>

                            <p className="p-body-small">
                                Now this is an example where there would be a bit more to do if we were also simplifying, but we're just worrying about adding right now.  
                                We'll learn about simplifying rational expressions in a later lesson.
                            </p>
                        </dic>
                    </div>
                    
                </div>

                <Footer />
            </div>
        )
    }
}

export default RationalExpressions