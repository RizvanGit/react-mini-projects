import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
const MainLayout = () => {
	return (
		<div className={styles.mainLayout}>
			<Menu/>
			<Outlet/>
		</div>
	)
}


export default MainLayout;