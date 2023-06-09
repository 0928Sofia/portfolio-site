import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar =() => {
    return(
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    

                    <ul className='nav-list'>
                        <li className='nav-list__item'>
                        <NavLink to="/" className="logo">
                        <strong>My portfolio</strong>
                        </NavLink>
                        </li>
                        
                        <li className='nav-list__item'>
                            <NavLink to="/" className='activeLink'>
                                Home
                            </NavLink>
                        </li>
                        
                        <li className='nav-list__item'>
                            <NavLink to="/projects" className='activeLink'>
                                Projects
                            </NavLink>
                        </li>

                        <li className='nav-list__item'>
                            <NavLink to="/contacts" className='activeLink'>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;