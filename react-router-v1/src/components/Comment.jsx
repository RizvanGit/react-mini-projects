import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Comment.module.css'

const Comment = (props) => {
	const [comments, setComments] = useState([])

	useEffect( ()=> {
		async function getComments() {
			const response = await fetch('https://jsonplaceholder.typicode.com/comments?q=20')
			const commentsArray = await response.json()
			setComments(commentsArray)
		}
		getComments()
	},[] )

	const params = useParams()

	const comment = comments.find( (comm) => comm.id.toString() === params.id)

	return (
		<>
			{!!comments.length &&
				<div className={styles.commentPage}>
					<h1>Name: {comment.name}</h1>
					<h3>Email: {comment.email}</h3>
					<p>Comment: {comment.body}</p>
					<Link to=".." relative="path">Back to all comments</Link>
				</div>
			}
		</>
	)
}


export default Comment;