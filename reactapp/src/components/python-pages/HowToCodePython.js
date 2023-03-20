import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class HowToCodePython extends React.Component {

    videoUrl = "https://replit.com/languages/python3"

    underlineLink(e) {
        e.target.style.textDecoration = "underline"
    }

    removeUnderline(e) {
        e.target.style.textDecoration = "none"
    }

    render() {
        return (
            <div>
                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Getting Started</h2>
                </div>

                <div className="aboutBodyDiv">
                    
                    <p className="p-body">
                        Before we can get started coding, we first need to know how one can even write code?
                    </p>

                    <p className="p-body-small">
                        Just like we use something like Microsoft Word or Google Docs to write an essay or any other text document, there are 
                        several applications we can use out there to write code; some are more complicated than others to set up.  For now, we're 
                        going to use the easy way.  Later, we'll look at setting up Visual Studio Code to get the best experience coding.
                    </p>

                    <p className="p-body">
                        To write code, simply click <a href={this.videoUrl} target={"_blank"} style={{ color: "#5b92e5" }} onMouseOver={this.underlineLink} 
                        onMouseOut={this.removeUnderline}>here</a>.  It'll redirect you to a page where you can code in Python without having to install anything.
                    </p>

                    <p className="p-body-small">
                        <i>Feel free to bookmark that page.  We'll be coming back to it a lot.</i>
                    </p>

                    <h4 className="h4-blue-headers">Displaying Text in Console</h4>

                    <p className="p-body-small">
                        You might have noticed, when you click the link for the online Python interpreter, that there is already a line of code there.
                    </p>

                    <pre>
                        print('Hello, world!')
                    </pre>
                </div>

                <Footer />

            </div>
        )
    }
}

export default HowToCodePython