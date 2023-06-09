import "./style.css";

const Header = () => {
    return(
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>
                        Hello, my name is <em>Sofia</em>!
                    </strong>
                    <br/> a frontend developer
                </h1>
                <div>
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">
                    Скачать cv
                </a>
            </div>
        </header>
    )
}

export default Header;