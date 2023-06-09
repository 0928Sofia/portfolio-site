import "./style.css";

import vk from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/img/logo/vk f.png';
import instagram from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/img/logo/inst f.png'
import twitter from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/img/logo/twitter f.jpg';
import telegram from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/img/logo/telega f.jpg';
import gitHub from '/Users/cofix/OneDrive/Рабочий стол/Код будущего/react/react_app/src/img/logo/git f2.png';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper"> 
                    <ul className="social">
                        <li className="social__item">
                            <a href="#!">
                                <img src={vk}/>
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="#!">
                                <img src={instagram}/>
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="#!">
                                <img src={twitter}/>
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="#!">
                                <img src={telegram}/>
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="#!">
                                <img src={gitHub}/>
                            </a>
                        </li>
                    </ul>

                    <div className="copyright">
                        <p>&copy; 2023, Sofia</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;