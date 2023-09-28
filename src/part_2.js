import about from "./about"
import experience from "./experience"
import projects from "./projects"
function Part2() {
    return (
        <div className="part2">
            <About />
            <Experience />
            <Projects />
        </div>
    )
}
function About() {
    return (
        <div className="about" id="about">
            <p>
                As a Full Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, and Node.js), I possess a comprehensive skill set that enables me to develop end-to-end web applications. With proficiency in both front-end and back-end technologies, I have the ability to seamlessly integrate client-side and server-side components to deliver robust and dynamic solutions. Leveraging MongoDB for database management, Express.js for building scalable APIs, React for creating interactive user interfaces, and Node.js for server-side development, I am capable of architecting and implementing efficient and responsive applications. My MERN stack proficiency allows me to handle diverse development tasks, from designing intuitive user experiences to optimizing server performance, making me a versatile developer capable of delivering high-quality solutions across the entire web development spectrum.
            </p>
            <div className="college">
                <h3>- COLLEGE -</h3>
                {
                    Object.entries(about.college).map((elem, i) => {
                        return (<div className="college-info" key={i}>
                            <h5>{`${elem[0]} : `}</h5>
                            <p>{elem[1]}</p>
                        </div>)
                    })
                }
            </div>
            <div className="skills-part">
                <h3>- SKILLS -</h3>
                <ul className="skills">
                    {about.skills.map((s, i) => { return <li key={i} className={`skill ${i}`}>{s}</li> })}
                </ul>
            </div>
        </div>
    )
}

function Experience() {
    return (
        <div className="experience" id="experience">
            <h3>- EXPERIENCE -</h3>
            <div className="collage-ex">
                <h5>College-Experience</h5>
                <ul className="college-experiences">
                    {experience.college.map((ex, i) => {
                        return (
                            <li key={i} className="college-experience">
                                {ex}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="job-experiences">
                <h5>Work-Experience</h5>
                {experience.jobs.map((ex, i) => {
                    return <ul className="job-experience">
                        {Object.entries(ex).map((elem, i) => {
                            return (
                                <li key={i} className="job">
                                    <p>{`${elem[0]} : ${elem[1]}`}</p>
                                </li>
                            )
                        })}
                    </ul>
                })}

            </div>
        </div>
    )
}

function Projects() {
    return (
        <div className="projects" id="projects">
            <h3>- PROJETS -</h3>
            <div className="full-stack">
                <h4>- Full-Stack -</h4>
                {projects["Full-stack"].map((pr, i) => { return <Project key={i} project={pr} /> })}
            </div>
            <div className="Front-end">
                <h4>- Front-End -</h4>
                {projects["Front-end"].map((pr, i) => { return <Project key={i} project={pr} /> })}
            </div>
        </div>
    )
}

function Project({ project }) {
    return (
        <div className="project">
            <div className="item-name">
                <p>
                    {project["Name"]}
                </p>
            </div>
            <div className="item description">
                <h4>Description:</h4>
                <p>
                    {project["Description"]}
                </p>
            </div>
            <div className="item">
                {
                    project["Github-link"].length > 1 ? <div>
                        links:
                        <ul>

                            <li><a href={project["Github-link"][0]} target="_blank" rel="noreferrer noopener"><b>Front-end</b></a></li>

                            <li><a href={project["Github-link"][1]} target="_blank" rel="noreferrer noopener"><b>Back-end</b></a></li>
                        </ul>
                        <img src={project["photo"]} alt={project["Name"]} />
                    </div> : <a href={project["Github-link"]} target="_blank" rel="noreferrer noopener">

                        <img src={project["photo"]} alt={project["Name"]} />
                    </a>
                }
            </div>
            <div className="item">
                <h4>Techniques:</h4>
                <ul className="skills">
                    {project["Used-Techniques"].map((t, i) => { return <li key={i} className={`skill ${i}`}>{t}</li> })}
                </ul>
            </div>
        </div>
    )
}

export default Part2;