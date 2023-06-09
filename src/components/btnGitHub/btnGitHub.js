import gitHubIcon from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/components/btnGitHub/git f2.png';
import './style.css'

const BtnGitHub = ({link}) => {
    return(
        <a href={link} target='_blank' rel='noreferrer' className='btn-outline'>
            <img src={gitHubIcon}/>
            GitHub repo
        </a>
    )
}

export default BtnGitHub;