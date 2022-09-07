import React from 'react'
import { Link } from 'react-router-dom'

class Logo extends React.Component {
    render() {
        return (
            <div className="blue">
                <div>
                    <Link to="/">
                    <img
                        style={{ paddingTop: "10px", marginBottom: "0px" }}
                        src={require('../Images/BlueBird-Secondary-Logo-Color.png')}
                        alt="Open"
                        width={125}
                        height={75} />
                    </Link>
                </div>
                <div style={{ textAlign: "right" }}>
                    <Link to="/satprep">
                        <button type="button" class="btn btn-outline-primary">SAT Prep</button>
                    </Link>
                    &nbsp;
                    &nbsp;
                    <Link to="/focus_log">
                        <button type="button" class="btn btn-outline-primary">Focus Log</button>
                    </Link>
                    {/* &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to="/resources">
                        <button type="button" class="btn btn-outline-secondary">Resources</button>
                    </Link> */}
                </div>
            </div>
        )
    }
}

export default Logo