import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render() {
        return (
            <div className="blue">
                <div>
                    <Link to="/">
                    <img
                        style={{ paddingTop: "10px", marginBottom: "0px" }}
                        src={require('../Images/LogoMakr_2ZeJTj.png')}
                        alt="Open"
                        width={125}
                        height={75} />
                    </Link>
                </div>
                <div style={{ textAlign: "right" }}>
                    <Link to="/contact">
                        <button type="button" class="btn btn-link">Contact Us</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Footer