import React from "react";
import { Link } from "react-router-dom"

class SatPrepLinkOutline extends React.Component {  

    // visitedLink = () => {
    //     let link = document.getElementById("link1");
    //     link.style.color = "#121d2d";
    //     sessionStorage.setItem('autosave', "#121d2d")
    //     if (sessionStorage("autosave")) {
    //         link.style.color = "#121d2d";
    //     }
    // }

    changeLinkColor = (link) => {
        link.style.color = "#5b92e5";
    }

    render() {
        return (
            <div style={{ paddingBotton: "25px" }}>
                <h4 className="h4-blue-headers" onMouseOver={this.changeLinkColor(this)}>Heart of Algebra</h4>
                <ol className="list-medium">
                    <li style={{ paddingTop: "20px" }}><Link to="/heart_of_algebra/about" style={{ color: "#365789" }}><strong>A little bit about Heart of Algebra</strong></Link></li>
                    <li><Link to="/heart_of_algebra/introduction_to_functions" style={{ color: "#365789" }}>Introduction to Functions</Link></li>
                    <li><Link to="/heart_of_algebra/function_notation" style={{ color: "#365789" }}>Function Notation</Link></li>
                    <Link to="/heart_of_algebra/introduction_to_linear" style={{ color: "#365789" }}><li>Introduction to Linear Functions</li></Link>
                    <Link to="/heart_of_algebra/modelling_linear" style={{ color: "#365789" }}><li>Modelling Linear Equations</li></Link>
                    <Link to="/heart_of_algebra/parallel_perpendicular" style={{ color: "#365789" }}><li>Paralell and Perpendicular Lines</li></Link>
                    <li>System of Linear Equations</li>
                        <ul className="list-medium">
                            <Link to="/heart_of_algebra/systems_linear_equation_part1" style={{ color: "#365789" }}><li>Part 1</li></Link>
                            <Link to="/heart_of_algebra/systems_linear_equation_part2" style={{ color: "#365789" }}><li>Part 2</li></Link>
                        </ul>
                    <Link to="/heart_of_algebra/linear_inequalities" style={{ color: "#365789" }}><li>Linear Inequalities</li></Link>
                    <Link to="/heart_of_algebra/graphing_linear_inequalities" style={{ color: "#365789" }}><li>Graphing Linear Inequalities</li></Link>
                    <Link to="/heart_of_algebra/graphing_system_linear_inequalities" style={{ color: "#365789" }}><li style={{ paddingBottom: "25px" }}>Graphing Systems of Linear Inequalities</li></Link>
                </ol>
                <h4 className="h4-blue-headers">Problem Solving and Data Analysis</h4>
                <h4 className="h4-blue-headers">Passport to Advanced Math</h4>
                <ol className="list-medium">
                    <Link to="/passport_to_advanced_math/about" style={{ color: "#365789" }}><li style={{ paddingTop: "20px" }}><strong>A little bit about Passport to Advanced Math</strong></li></Link>
                    <li>Polynomials</li>
                        <ul className="list-medium">
                            <Link to="/passport_to_advanced_math/polynomials_part1" style={{ color: "#365789" }}><li>Part 1</li></Link>
                            <Link to="/passport_to_advanced_math/polynomials_part2" style={{ color: "#365789" }}><li>Part 2</li></Link>
                            <Link to="/passport_to_advanced_math/polynomials_part3" style={{ color: "#365789" }}><li>Part 3</li></Link>
                        </ul>
                    <Link to="/passport_to_advanced_math/intro_to_quadratic_functions" style={{ color: "#365789" }}><li>Introduction to the Quadratic Function</li></Link>
                    <li>Quadratic Function Graphical Analysis</li>
                        <ul className="list-medium">
                            <Link to="/passport_to_advanced_math/quadratic_graphical_analysis_part1" style={{ color: "#365789" }}><li>Part 1</li></Link>
                            <Link to="/passport_to_advanced_math/quadratic_graphical_analysis_part2" style={{ color: "#365789" }}><li>Part 2</li></Link>
                        </ul>
                    <li>Factoring Quadratic Equations</li>
                        <ul className="list-medium">
                            <Link to="/passport_to_advanced_math/factoring1" style={{ color: "#365789" }}><li>Part 1</li></Link>
                            <Link to="/passport_to_advanced_math/factoring2" style={{ color: "#365789" }}><li>Part 2</li></Link>
                        </ul>
                    <li>Exponent Rules</li>
                        <ul className="list-medium">
                            <Link to="/passport_to_advanced_math/exponent_rules_part1" style={{ color: "#365789" }}><li>Part 1</li></Link>
                            <Link to="/passport_to_advanced_math/exponent_rules_part2" style={{ color: "#365789" }}><li style={{ paddingBottom: "25px" }}>Part 2</li></Link>
                        </ul>
                </ol>
                <h4 className="h4-blue-headers">Additional Topics in Math</h4>
            </div>
        )
    }
}

export default SatPrepLinkOutline