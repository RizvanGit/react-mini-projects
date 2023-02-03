import styles from './Home.module.css'
const Home = () => {
	return (
		<div className={styles.homePage}>
			<h1>Home page</h1>
			<h2>Visit other pages</h2>
			<p>React Router SPA</p>
			<p>Navigation by React Router</p>
			<p className={styles.info}>react practice project</p>
		</div>
	)
}


export default Home;