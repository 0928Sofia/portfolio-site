import Project from '../components/project/Progect';
import {projects} from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/components/helpers/projectsList';
import './style.css'

const Projects = () => {
    return(
        <main className="section">
            <div className="container">
                    <h1 className="title-1">Projects</h1>
                    
                    <ul className='projects'>
                     {projects.map((project, index) =>{
                        return(
                        <Project key={index} title={project.title} img={project.img} index={index}/>
                    )})}
                    </ul>
            </div>
        </main>
    )
}

export default Projects;
