import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Comments.module.css'

const API_URL = 'https://jsonplaceholder.typicode.com/comments?q=20'
const Comments = () => {
	const [comments, setComments] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect( () => {
		async function getComments() {
			const response = await fetch(API_URL)
			const commentsArray = await response.json()
			setComments(commentsArray)
			setIsLoading(false)
		}

		getComments()

	}, [])

	return (
		<div className={styles.commentsWrapper}>
			<h2>All comments</h2>
			<p>Comments loads from placeholderjson.com</p>
			{isLoading ? <h2>Loading...</h2>
				: !!comments.length && <div className={styles.comments}>
			{comments.map( (comment, idx) => {
				return (
					<Link key={uuidv4()} to={comment.id.toString()} >
						<span className={styles.span}>Comment from:</span> {comment.name}
					</Link>
				)
			} )}
				</div>
			}

		</div>
	)
}


export default Comments;