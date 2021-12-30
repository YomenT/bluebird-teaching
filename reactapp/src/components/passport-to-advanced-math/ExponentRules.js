import React from 'react'

class ExponentRules extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <div className="row">
                    <h3 className="h3-blue-headers">Exponent Rules - Part 1</h3>
                </div>

                <div className="row">
                    <p className="p-body">
                        There are going to be a set of exponent rules that you're going to have to memorize.  You may want to create flashcards for these rules.  However, 
                        the more you practice these kinds of problems, the more they'll just stick in your head.  This is one of those sections that I highly encourage 
                        you to seek extra practice on.  I'll be sure to include sources for extra practice at some point in this section.  
                    </p>
                </div>

                <div className="row">
                    <p className='p-body'>
                        In part 1, we're going to go through the 5 exponent rules; we're going to go one-by-one.  This sort of stuff can get annoying when all the rules are 
                        combined into one simplification problem.  For now, let's just get the rules down.
                    </p>
                </div>

                <div className='row'>
                    <p className='p-body-small'>
                        <b>The Exponent Rule:  </b> When you have two or more of the <i>same</i> bases being multiplied together, you add the exponenets.
                    </p>
                </div>
                <div className='row'>
                    <ul className='p-body'>
                        <li>x<sup>3</sup> * x<sup>4</sup> = x<sup>7</sup></li>
                        <li>2<sup>2</sup> * 2<sup>7</sup> = 2<sup>9</sup></li>
                    </ul>
                </div>

                <div className='row'>
                    <p className='p-body-small'>
                        <b>The Quotient Rule:  </b> When you have two or more of the <i>same</i> bases being divided, you subtract the exponenets.
                    </p>
                </div>
                <div className='row'>
                    <ul className='p-body'>
                        <li>x<sup>5</sup> / x<sup>3</sup> = x<sup>2</sup></li>
                        <li>5<sup>10</sup> / 5<sup>8</sup> = 5<sup>2</sup></li>
                    </ul>
                </div>

                <div className='row'>
                    <p className='p-body-small'>
                        <b>The Power Rule:  </b> When an exponent is being raised to the power of another exponent, you multiply the exponents.
                    </p>
                </div>
                <div className='row'>
                    <ul className='p-body'>
                        <li>(y<sup>3</sup>)<sup>4</sup> = y<sup>12</sup></li>
                        <li>(3<sup>2</sup>)<sup>2</sup> = 3<sup>4</sup></li>
                    </ul>
                </div>

                <div className='row'>
                    <p className='p-body-small'>
                        <b>The Zero Exponent Rule:  </b> When a number is raised to the 0 power, the result is just 1.
                    </p>
                </div>
                <div className='row'>
                    <ul className='p-body'>
                        <li>y<sup>0</sup> = 1</li>
                        <li>1452<sup>0</sup> = 1</li>
                    </ul>
                </div>

                <div className='row'>
                    <p className='p-body-small'>
                        <b>The Negative Exponent Rule:  </b> When a number is raised to a negative power, you take the reciprical, and the new exponent flips sign.
                    </p>
                </div>
                <div className='row'>
                    <ul className='p-body'>
                        <li>y<sup>0</sup> = 1</li>
                        <li>1452<sup>0</sup> = 1</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default ExponentRules