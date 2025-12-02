import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import './projects.css';
export default function Projects() {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/Madheshvivekanandan/repos")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="projects-page">
            <Navbar />
            <h1 className="section-heading">My GitHub Projects</h1>

            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description || "No description provided."}</p>
                        <a href={project.html_url}>View on GitHub</a>
                        <p>⭐ Stars: {project.stargazers_count} | 🍴 Forks: {project.forks_count}</p>
                    </div>
                ))}
            </div>

            <Footer />
        </div>

    )
}