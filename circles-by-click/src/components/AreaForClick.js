import styles from './Area.module.css'
import Circle from './Circle'
const AreaForClick = ( {addCircle, circles} ) => {
	return <div
		className={styles.Area}
		onClick={(e) => addCircle(e)}
	>
		{circles.map( (circle ,inx) => {

			return <Circle key={inx} topY={circle.y} rightX={circle.x} color={circle.color}/>
		} )}
	</div>
}

export default AreaForClick