import React from "react";
import { Link } from "react-router-dom"

class SatPrepLinkOutline extends React.Component {
    render() {
        return (
            <div>
                <h4 className="h4-blue-headers">Heart of Algebra</h4>
                <ol className="p-body">
                    <Link to="/heart_of_algebra/about"><li style={{ paddingTop: "20px" }}>A little bit about Heart of Algebra</li></Link>
                    <li>Introduction to Functions</li>
                    <li>Function Notation</li>
                    <li>Introduction to Linear Functions</li>
                    <li>Modelling Linear Equations</li>
                    <li>Paralell and Perpendicular Lines</li>
                    <li>System of Linear Equations</li>
                        <ul className="p-body">
                            <li>Part 1</li>
                            <li>Part 2</li>
                        </ul>
                    <li>Linear Inequalities</li>
                    <li>Graphing Linear Inequalities</li>
                    <li style={{ paddingBottom: "25px" }}>Graphing Systems of Linear Inequalities</li>
                </ol>
                <h4 className="h4-blue-headers">Problem Solving and Data Analysis</h4>
                <h4 className="h4-blue-headers">Passport to Advanced Math</h4>
                <ol className="p-body">
                    <li style={{ paddingBottom: "20px" }}>A little bit about Passport to Advanced Math</li>
                    <li>Polynomials</li>
                        <ul className="p-body">
                            <li>Part 1</li>
                            <li>Part 2</li>
                            <li>Part 3</li>
                        </ul>
                    <li>Introduction to the Quadratic Function</li>
                    <li>Quadratic Function Graphical Analysis</li>
                        <ul className="p-body">
                            <li>Part 1</li>
                            <li>Part 2</li>
                        </ul>
                    <li>Factoring Quadratic Equations</li>
                        <ul className="p-body">
                            <li>Part 1</li>
                            <li>Part 2</li>
                        </ul>
                    <li>Exponent Rules</li>
                        <ul className="p-body">
                            <li>Part 1</li>
                            <li style={{ paddingBottom: "25px" }}>Part 2</li>
                        </ul>
                </ol>
                <h4 className="h4-blue-headers">Additional Topics in Math</h4>
            </div>
        )
    }
}

export default SatPrepLinkOutline