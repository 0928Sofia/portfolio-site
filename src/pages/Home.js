import Header from "../components/header/Header";

const Home = () => {
    return(
        <>

        <Header/>

        <main className="section">
            <div className="container">
                <ul className="container-list">
                <li className="container-list__item">
                        <h2 className="title-2"> frontend</h2>
                            <p>
                                HTML, CSS, JS, ReactJS, Vue.js, NPM, BootStrap, MaterialUI, TailwindCSS, SCSS, SASS, LESS, StyledComponents
                            </p>
                    </li>

                    <li className="container-list__item">
                        <h2 className="title-2"> backend</h2>
                            <p>
                                Node.js, MySQL, SQL Server, MongoDB, PHP
                            </p>
                    </li>
                </ul>
            </div>
        </main>
        </>
    )
} 

export default Home;