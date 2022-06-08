import Container from '../Container/Container'
import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Container>
                <div className={styles.navBar}>
                    <div>
                        <a href='/'><span className='fa fa-tasks' /></a>
                    </div>
                    <div className={styles.navitems}>
                        <ul>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                to="/favorite">Favorite</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar