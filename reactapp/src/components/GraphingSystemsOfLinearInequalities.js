import React from 'react'

class GraphingSystemsOfLinearInequalities extends React.Component {
    render(
    ) {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>
                <h3 className="h3-blue-headers" style={{ paddingBottom: "25px" }}>Graphing a System of Linear Inequalities</h3>
                <p className="p-body">
                    Remember when we worked with systems of linear equations with all the substitution and elimination?  Well with systems of linear 
                    inequalities, we don't really have to utilize substitution or elimination; we really just have to worry about our graphing skills.
                </p>
                <p className="p-body-small">
                    Like with systems of linear equations, graph the two linear inequalities given in a systems problem like you would graph as we discussed right 
                    in the previous section; including the shading step.  The goal here is to find the common shaded area from both graphs.  If asked, any 
                    set of ordered pairs within that common shaded area would be conidered a solution to the system of linear inequalities.    
                </p>
            </div>
        )
    }
}

export default GraphingSystemsOfLinearInequalities