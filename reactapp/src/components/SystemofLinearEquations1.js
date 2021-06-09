import React from "react"

class SystemofLinearEquations1 extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                <h3 className="h3-blue-headers" style={{ paddingBottom: "25px" }}>Systems of Linear Equations Part 1</h3>
                <p className="p-body">
                    This is also going to be a very important part in the Heart of Algebra.  Remember learning about substitution and elimination?  That's what 
                    this stuff is all about.  Given a system of two linear equations, you should be able to solve using substitution or elimination.
                </p>
                <p className="p-body-small">
                    <strong>What does solving mean?</strong>  In this case, solving a system of equations is finding the point at which they intersect.  
                    If you solve a system of two linear equations, you are finding the point at which they intersect.  It might sound a bit silly to explain 
                    this, but we don't want to fall into the trap of just doing things without knowing why.
                </p>
                <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Try it!</h4>
                <p className="p-body">
                    1.  The graphos of y = 2x - 5 and x + 3y = -1 intersect at
                </p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>A) (-1, 2)</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>B) (-2, -1)</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>C) (2, -1)</p>
                <p className="p-body-small" style={{ marginLeft: "4%"}}>D) (-2, 1)</p>
                <p className="p-body-small">
                    <i><strong>Question:  </strong> Would both methods (substitution and eliminiation) get the same answer?</i>
                </p>
                <h4 className="h4-blue-headers" style={{ paddingTop: "75px" }}>Create it!</h4>
                <p className="p-body">
                    Take some time to address that earlier question above.  On a sheet of paper, solve the above example problem using substituion and 
                    elimination.  Show all your work neatly.  Once you're done, snap a picture and email it to us!
                </p>
            </div>
        )
    }
}

export default SystemofLinearEquations1