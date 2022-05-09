import styles from './index.module.scss';

export const Navbar = () => {
    return (
        <nav className={styles.nav} >
            <div className={styles.nav__logo}>
                Rick<strong>S</strong>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Blog</li>
                <li className={styles.resume} >Resume</li>
            </ul>
        </nav>
    )
}
