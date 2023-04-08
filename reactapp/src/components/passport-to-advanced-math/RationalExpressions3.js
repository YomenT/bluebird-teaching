import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressions3 extends React.Component {

    render() {

        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Rational Expressions Checkup</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-medium" style={{ paddingTop: "25px" }}>
                        Rational expressions might be concidered by most as a harder concept in the SAT.  It can be strange trying to figure out when to distribute or when to 
                        simplify.  Unfortunately, working with ratinoal expressions isn't a linear process.  There isn't always a clear start and finish.  You're might start 
                        a rational expression subtraction problem by first finding common denominators; only to realize you should have actually just simplified both 
                        expressions first, or the other way around, or something else entirely.  This is definitely a portion that is going to require more patience.  
                    </p>

                    <p className="p-body-small">
                        Still, practice makes perfect.  Let's take some time practicing some more rational expression problems.  Even if you feel like you are proficient, I 
                        highly recommend not skipping this lesson.  This lesson is going to be some extra practice; with everything we've covered with rational expressions 
                        put together.
                    </p>

                    <p className="p-body-small">
                        If there are still a lot of questions in your head regarding working with rational expressions, you don't quite know the answers to the 
                        questions from previous lessons, or just want to talk these concepts over, I highly recommend you actually reach out to us before attempting these 
                        practice problems.  I think to get the most out of this practice, you should go into it with a pretty good understanding first.
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressions3