import styles from './Circle.module.css'
const Circle = ( {topY, rightX, color} ) => {



	return <div className={styles.Circle}
							style={
											{
												top: topY,
												left: rightX,
												border: `5px solid ${color}`
											}
										}
	></div>
}

export default Circle