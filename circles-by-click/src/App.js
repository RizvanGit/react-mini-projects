import './App.css'
import AreaForClick from './components/AreaForClick'
import { useState } from 'react'
import Circle from './components/Circle'
import getRandomColor from './utils/getRandomColor'

function App() {
	const [circles, setCircles] = useState([])
	const [cache, setCache] = useState([])
	const addCircleByClick = (e) =>{

		const newCircle = {
			x: e.clientX + "px",
			y: e.clientY + "px",
			color: getRandomColor(),
		}
		setCircles([...circles, newCircle])
	}

	const stepForward = () => {
		if(cache.length) {
			let cacheArray = [...cache]
			let lastItem = cacheArray.pop()
			setCache([...cacheArray])
			setCircles([...circles, lastItem])
		}
	}

	const stepBack = () => {
		const newCircles = [...circles]

		if(circles.length){
			setCache([...cache, newCircles.pop()])
			setCircles([...newCircles])
		}

	}

	const clearAll = () => {
		setCircles([])
		setCache([])
	}


	return (
		<div className="App">
			<button className="back" onClick={stepBack} disabled={!circles.length}>back</button>
			<button className="forward" onClick={stepForward} disabled={!cache.length}>forward</button>
			<button className="clear" onClick={clearAll} disabled={!circles.length}>clear</button>
			<div className="info">
				<h3>Click to place a circle</h3>
				<p>Back for one step back</p>
				<p>Forward for one step forward</p>
			</div>
			<AreaForClick circles={circles} addCircle={addCircleByClick}/>
		</div>)
}

export default App
