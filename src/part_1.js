import { GithubOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons"

function Part1({ part, setPart }) {
    return (
        <div className="part1">
            <div className="name"><h1>Abdelrahman Hassan</h1></div>
            <div className="position"><h2>Full-stack devoloper</h2></div>
            <div className="work"><p>I build scalable, secure and responsive web-site that matches the client requirments</p></div>
            <MenuBar part={part} setPart={setPart} />
            <Links />
        </div>
    )
}

function MenuBar({ part, setPart }) {
    return (
        <div className="bar">
            <ul className="menu-items">
                <li className={part === "about" ? "active" : "part"} value={'about'} onClick={() => setPart("about")}><div className="start"></div><h6><a href="#about" >ABOUT</a></h6></li>
                <li className={part === "experience" ? "active" : "part experience"} value={'Experience'} onClick={() => setPart("experience")} ><div className="start"></div><h6><a href="#experience">EXPERIENCE</a></h6></li>
                <li className={part === "projects" ? "active" : "part projects"} value={'project'} onClick={() => setPart("projects")}><div className="start"></div><h6><a href="#projects">PROJETS</a></h6></li>
            </ul>
        </div>
    )
}

function Links() {
    return (
        <div className="links">
            <ul className="links-list">
                <li className="github"><a href="https://github.com/abdelrahman-2513/" target="_blank" rel="noreferrer noopener"><GithubOutlined /></a></li>
                <li className="instagram"><a href="https://www.instagram.com/abdelrahman_52/" target="_blank" rel="noreferrer noopener"><InstagramOutlined /></a></li>
                <li className="linkedin"><a href="https://www.linkedin.com/in/abdelrahman-hassan-9a3366273/" target="_blank" rel="noreferrer noopener"><LinkedinOutlined /></a></li>
                <li className="gmail"><a href="mailto:ab19622001@gmail.com" target="_blank" rel="noreferrer noopener"><MailOutlined /></a></li>
            </ul>
        </div>
    )
}

export default Part1;