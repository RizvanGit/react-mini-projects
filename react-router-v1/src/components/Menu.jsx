import { NavLink } from 'react-router-dom'
import styles from './Menu.module.css'
const Menu = () => {
	return (
		<nav className={styles.nav}>
			<NavLink to="." end className={styles.navLink}>Home</NavLink>
			<NavLink to="users" className={styles.navLink}>Users</NavLink>
			<NavLink to="comments" className={styles.navLink}>Comments</NavLink>
			<NavLink to="cars" className={styles.navLink}>Cars</NavLink>
		</nav>
	)
}


export default Menu;