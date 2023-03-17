import React from "react";

import Logo from './Logo'
import Footer from './Footer'

class Python extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>Python For Non-Engineers</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body">
                        Welcome to our Python program aimed at getting people without engineering backgrounds on their feet and on the path to career 
                        readiness.
                    </p>

                    <h3 className="h3-blue-headers" style={{ paddingTop: "75px", paddingBottom: "10px" }}>How This Works</h3>

                    <p className="p-body">
                        The content below is made in coordination with an in person course at the Islamic Association of Raleigh.  However, it's certainly 
                        not a bad place to go to; even if you're not attending the in person portion.  
                    </p>

                    <p className="p-body" style={{ fontSize: "17px" }}>
                        <strong>Note: </strong> This page is a work in progress.  I plan to have this page finished by the beginning of the summer of 2023l.
                    </p>

                    <h3 className="h3-blue-headers" style={{ paddingTop: "75px", paddingBottom: "10px" }}>How This Works</h3>

                    <p className="p-body">
                        Again, this is made in coordination with an in person class, but feel free to use this material on your own.  It should be an 
                        excellent way for you to get on your feet and well on your way in coding in general.  There are lots of other "beginner" resources 
                        online, but the vast majority are made by engineers.  It's good to take advantage of this resource made by educators.  
                    </p>

                    <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", marginTop: "150px", backgroundColor: "#121d2d" }}></hr>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Python