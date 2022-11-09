import React from 'react'

class FactoringPart2 extends React.Component {
    render() {
        return (
            <div>
                <hr style={{ width: '100%', textAlign: "center", marginBottom: "150px", backgroundColor: "#686868", marginTop: "150px" }}></hr>

                <h3 className="h3-blue-headers">Factoring Part 2: Difference of Perfect Squares</h3>

                <p className='p-body-small'>
                    Previously, we looked at how to find solutions (x-intercepts) for a quadratic equation.  It just so happened that all the equations involved in the previous section 
                    were trinomials.  This won't always be the case...
                </p>

                <p className='p-body'>
                    In addition to seeing quadratics in the form of trinomials, you'll also see them as binomials (in future math classes and the SAT).
                </p>

                <p className='p-body'>
                    If I just asked you to solve for x in the equation: x<sup>2</sup> - 16 = 0, you might think to just solve for x like you'd solve any other one variable equation, and that's absolutely 
                    right.  
                </p>

                <img 
                    src={"https://i.ibb.co/nDm1QWB/Factoring2.jpg"}
                    alt="Function Notation"
                    width={350}
                    height={350} />

                <p className='p-body-small'>
                    <i>Remember that taking the square root of a positive numbers yields two answers: one positive and one negative.</i>
                </p>

                <p className='p-body'>
                    If I asked you to factor the binomial, it would still be very easy.  The factors would simply be (x + 4) and (x - 4).  You can get that by reverse 
                    engineering from the solutions that we got.  
                </p>

                <p className="p-body-small">
                    Below are the <strong>requirements</strong> to factoring a binomial using difference of perfect squares.
                </p>
                <ol className="p-body">
                    <li>All terms in the binomial must be perfect squares.  This means the square root is a whole number; not some long decimal.</li>
                    <li>
                        The two terms in the binomial must be subtracted from each other.  This method doesn't apply if the two terms in 
                        the binomial are being added.  Below are some examples.
                    </li>
                    <ul>
                        <li>x<sup>2</sup> - 64 = 0</li>
                        <li>x<sup>2</sup> - 9 = 0</li>
                        <li>x<sup>2</sup> - 25 = 0</li>
                    </ul>
                </ol>
                    
            </div>
        )
    }
}

export default FactoringPart2