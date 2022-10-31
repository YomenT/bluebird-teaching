import React from "react";
import ReactPlayer from "react-player";

class FactoringPart1 extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <h3 className="h3-blue-headers">Factoring Part 1: Difference of Perfect Squares</h3>
                
                <p className="p-body">
                    You've probably heard of factoring before, but I think that a lot of people learn to use factoring, but they don't really know the 
                    why behind it.  What's the purpose of factoring?  What are values, zeros, and solutions?  Do they mean the same thing?
                </p>

                <p className="p-body-small">
                    First off, we use factoring to solve a quadratic equation; usually the equation is also a polynomial (not always).  Why do we 
                    want to solve a quadratic equation?  When we solve a quadratic equation, we are finding the x-intercepts; the two parts of the 
                    quadratic graph that cross the x axis. 
                </p>

                <img 
                    src={"https://i.ibb.co/zPgXYBz/Factoring1.png"}
                    alt="Function Notation"
                    width={600}
                    height={550} />

                <p className="p-body-small" style={{ paddingTop: "25px" }}>
                    To find the x-intercept in a linear equation, we set y equal to zero.  We're doing the exact same thing when we factor.  We 
                    solve the equation for y, set the whole equation equal to zero, and we factor.  That's why "solutions" to a quadratic equation 
                    means the same thing as the x-intercepts.  When you use factoring to solve a quadratic equation, you are also finding the 
                    x-intercepts.
                </p>

                <p className="p-body-small">
                    Keep in mind that factoring is actually just one way of solving quadratic equations.  There are two other ways: the quadratic formula, and 
                    another method called "completing the square".  We'll learn more about those two later.  There are three methods in total; again, all for 
                    the same purpose of solving a quadratic equation.
                </p>

                <p className="p-body">Enough with the theory, let's see how factoring is actually done.</p>

                <p className="p-body-small">
                    Let's start by watching the video below.  For those of you that are already pretty comfortable with facotring, feel free to go on to 
                    the Try It problems right after.  For those of you that want a little bit more of a breakdown/explanation, feel free to look at the material 
                    after the video below and before the Try It section.
                </p>

                <div>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=-4jANGlJRSY&t=1s"
                    />
                </div>

                <p className="p-body-small" style={{ paddingTop: "25px" }}>
                    Take a look at the steps below.  They may not make much sense at first, but just read them over now and keep them in mind.
                </p>
                <ol className="p-body">
                    <li>If needed, get the quadratic equation into standard form.</li>
                    <li>Factor</li>
                    <li>Take each factor and set it equal to zero to get your solutions.</li>
                </ol>
            </div>
        )
    }
}

export default FactoringPart1;