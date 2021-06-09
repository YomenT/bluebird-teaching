import React from "react"

import Logo from "./Logo"

import Image from '../Images/Blooms-Taxonomy.png'

class AboutSATPrep extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <div className="bodyDiv">
                    <h2 style={{ paddingBottom: "25px" }}>About the Structure</h2>
                </div>
                <div className="aboutBodyDiv">
                    <p className="p-body">
                        Why is this SAT preparation workshop designed the way it is?
                    </p>
                    <p className="p-body-small">
                        This SAT preparation workshop is designed the way it is to utililze something called Bloom's Taxonomy, and also create an Asperger's 
                        friendly learning path.  While this resource is welcome to be used by anyone, it is specifically designed to try to help students with 
                        Asperger's to prepare for the SAT.
                    </p>
                    <h3 className="h3-blue-headers" style={{ paddingTop: "50px", paddingBottom: "25px" }}>Bloom's Taxonomy</h3>
                    <img 
                        src={Image}
                        alt="Vertical Line Test"
                        width={675}
                        height={600} />
                    <p className="p-body-small" style={{ fontSize: "14px" }}>
                        <a href={"https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/"} target={"_blank"} className="anchor">https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/</a>
                    </p>
                    <p className="p-body-small">
                        Think of these levels as levels of complexity.  As you go up this pyramid, your level of understanding of a concept increases.  This is 
                        what we had in mind when designing the SAT preparation page.  Each section between horizontal lines goes through three stages: remember, 
                        apply, and create.  The first chunk of text you saw at the beginning of each section was the remember part.  Those are things that you 
                        should be able to recall/memorize.  The apply stage was the "Try it!" part of each section; your usually solving some example SAT 
                        problem.  The create stage was the "Create it!" part of each section.    
                    </p>
                    <p className="p-body">
                        Okay, but why does it all seem so repetitve?  Each section follows the exact same format.
                    </p>
                    <p className="p-body-small">
                        Exactly!  An article published in the Journal of Postsecondary Education and Disability by Jennifer Cullen sheds light on students with 
                        Asperger's in classrooms.  One point the article brings up that is found to be beneficial for teaching studetns with Asperger's is keeping 
                        a relatively fixed class model/schedule (Cullen, 2015).  Both Cullen and infromation from Education Corner explain why this is important.  
                        Asperger's is indeed under the umbrella of Autism, but one big difference is that students with Asperger's tend to perform very well 
                        academically speaking.    
                    </p>
                    <p className="p-body-small">
                        However, there are some shared characteristics that make a fixed class model beneficial.  Students with Asperger's tend to have a low 
                        frustration threshold, and tend to have gaps well trying to plan out a mulit-step process ("Teaching Students with Asperger's Syndrome").  This is called a deficiency in executive 
                        functioning.  Having SAT material put together in order, and mataining a fixed model with the way it is now is all to try to help 
                        students with Asperger's.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutSATPrep