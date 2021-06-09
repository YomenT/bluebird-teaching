import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class HeaderButtons extends React.Component {
    render() {
        return (
            <div style={{ paddingBottom: "100px" }}>
                <Link to="/about">
                    <Button color="primary">How This Works</Button>
                </Link>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Link to="/about_resources">
                    <Button color="secondary">Other Online Education Resources</Button>
                </Link>
            </div>
        )
    }
}

export default HeaderButtons