import React from "react";

import Logo from '../Logo'
import Footer from '../Footer'

class RationalExpressions3 extends React.Component {

    wrongAnswer(e) {
        e.target.style.color = "#E32636"
        e.target.style.pointerEvents = "none"
    }

    rightAnswer(e) {
        e.target.style.color = "#018749"
        e.target.style.pointerEvents = "none"
    }

    render() {

        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}>Rational Expressions Checkup</h2>
                </div>

                <div className="aboutBodyDiv">

                    <p className="p-body-medium" style={{ paddingTop: "25px" }}>
                        Rational expressions might be concidered by most as a harder concept in the SAT.  It can be strange trying to figure out when to distribute or when to 
                        simplify.  Unfortunately, working with ratinoal expressions isn't a linear process.  There isn't always a clear start and finish.  You're might start 
                        a rational expression subtraction problem by first finding common denominators; only to realize you should have actually just simplified both 
                        expressions first, or the other way around, or something else entirely.  This is definitely a portion that is going to require more patience.  
                    </p>

                    <p className="p-body-small">
                        Still, practice makes perfect.  Let's take some time practicing some more rational expression problems.  Even if you feel like you are proficient, I 
                        highly recommend not skipping this lesson.  This lesson is going to be some extra practice; with everything we've covered with rational expressions 
                        put together.
                    </p>

                    <p className="p-body-small" style={{ paddingBottom: "50px" }}>
                        If there are still a lot of questions in your head regarding working with rational expressions, you don't quite know the answers to the 
                        questions from previous lessons, or just want to talk these concepts over, I highly recommend you actually reach out to us before attempting these 
                        practice problems.  I think to get the most out of this practice, you should go into it with a pretty good understanding first.
                    </p>

                    <hr style={{ width: '100%', textAlign: "center", backgroundColor: "#121d2d" }}></hr>

                    <p className="p-body" style={{ paddingTop: "50px" }}>
                        <strong>Complete the operation specified and simplify.</strong>
                    </p>

                    <p className="p-body">
                        1.  &nbsp;
                        <div className="frac" style={{ paddingRight: "10px" }}>
                            <span className="top">x + 2</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x - 1</span>
                        </div>
                        +
                        <div className="frac" style={{ paddingLeft: "10px" }}>
                            <span className="top">x - 5</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x + 3</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }} onClick={this.wrongAnswer}>A)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>x<sup>2</sup> + 2x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">(x + 2)(x + 2)</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>B)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>x(x + 2)</span>
                            <span className="symbol">/</span>
                            <span className="bottom">(x + 2)(x + 2)</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">(x + 2)</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>2x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">(x + 2)</span>
                        </div>
                    </p>

                    <p className="p-body">
                        2.  &nbsp;
                        <div className="frac" style={{ paddingRight: "10px" }}>
                            <span className="top">x - 1</span>
                            <span className="symbol">/</span>
                            <span className="bottom">3x<sup>2</sup></span>
                        </div>
                        +
                        <div className="frac" style={{ paddingLeft: "10px" }}>
                            <span className="top">5x<sup>2</sup> - x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x - 1</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }} onClick={this.wrongAnswer}>A)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5x<sup>2</sup> - x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">3x<sup>3</sup> - 3x<sup>2</sup></span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5</span>
                            <span className="symbol">/</span>
                            <span className="bottom">3x</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5x<sup>2</sup> - x</span>
                            <span className="symbol">/</span>
                            <span className="bottom">3x<sup>2</sup></span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>D)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5x - 1</span>
                            <span className="symbol">/</span>
                            <span className="bottom">3x</span>
                        </div>
                    </p>

                    <p className="p-body" style={{ paddingTop: "50px" }}>
                        <strong>Simplify the following rational expressions.</strong>
                    </p>

                    <p className="p-body">
                        3.  &nbsp;
                        <div className="frac" style={{ paddingRight: "10px" }}>
                            <span className="top">x<sup>2</sup> - 16</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x + 4</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }} onClick={this.wrongAnswer}>A)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>1</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x - 4</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>1</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x + 4</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  x + 4</p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.rightAnswer}>D)  x - 4</p>

                    <p className="p-body">
                        4.  &nbsp;
                        <div className="frac" style={{ paddingRight: "10px" }}>
                            <span className="top">5x - 45</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x<sup>2</sup> - 10x + 9</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%", paddingTop: "15px" }} onClick={this.rightAnswer}>A)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x - 1</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>B)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x + 1</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>C)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x - 9</span>
                        </div>
                    </p>
                    <p className="p-body-small" style={{ marginLeft: "4%"}} onClick={this.wrongAnswer}>D)  
                        <div class="frac" style={{ paddingLeft: "10px" }}>
                            <span className='top'>5</span>
                            <span className="symbol">/</span>
                            <span className="bottom">x + 9</span>
                        </div>
                    </p>

                </div>

            <Footer />
            </div>
        )
    }
}

export default RationalExpressions3