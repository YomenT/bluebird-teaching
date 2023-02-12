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

                    <div className="row">
                        <div className="col-4">
                        <img 
                            src={"https://i.ibb.co/zXXNZTy/Rational-Expressions1.jpg"}
                            alt="Work Shown"
                            className="float-right"
                            width={200}
                            height={150} />
                        </div>

                        <div className="col-8">
                            <p className="p-body-small">
                                Sample text.
                            </p>
                        </div>
                    </div>
                    
                </div>

                <Footer />
            </div>
        )
    }
}

export default RationalExpressions