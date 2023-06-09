import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/btnGitHub";
import {projects} from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/components/helpers/projectsList';
import './style.css'

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    return(
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    
                    <img src={project.imgBig} className="title2"/>

                    <div>
                        <p>Skills: {project.skills}</p>
                    </div>

                    {project.gitHubLink && (<BtnGitHub link="https://github.com"/>)}
                </div>
            </div>
        </main>
    );
}

export default Project;