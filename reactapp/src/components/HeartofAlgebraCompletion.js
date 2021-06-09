import React from 'react'

class HeartofAlgebraCompletion extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                <h2 style={{ textAlign: "center", color: "#5b92e5" }}>You did it!</h2>
                <p className="p-body" style={{ textAlign: "center", paddingTop: "50px" }}>
                    You just completed the Heart of Algebra portion of the math SAT!  The questions you saw are one group of questions you will see on the 
                    math portion of the SAT.  Go on to the next section below to get familiar with Problem Solving and Data Analysis!
                </p>
            </div>
        )
    }
}

export default HeartofAlgebraCompletion