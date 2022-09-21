import React from "react";

class FactoringPart1 extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <div className="row">
                    <h3 className="h3-blue-headers">Factoring Part 1: Difference of Perfect Squares</h3>
                </div>

                <div className="row">
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
                        width={500}
                        height={350} />

                    <p className="p-body-small">
                        To find the x-intercept in a linear equation, we set y equal to zero.  We're doing the exact same thing when we factor.  We 
                        solve the equation for y, set the whole equation equal to zero, and we factor.  That's why "solutions" to a quadratic equation 
                        means the same thing as the x-intercepts.  When you use factoring to solve a quadratic equation, you are also finding the 
                        x-intercepts.
                    </p>
                </div>
            </div>
        )
    }
}

export default FactoringPart1;