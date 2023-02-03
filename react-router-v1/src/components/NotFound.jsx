import { useRouteError } from 'react-router-dom'

const NotFound = () => {
	console.error('Page not found: 404')
	return (
		<div className="errorPage">
			<h1>Ooops!</h1>
			<h3>Sorry, unexpected error has occurred.</h3>
			<p>Not found</p>
		</div>
	)
}


export default NotFound;