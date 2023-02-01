const getRandomColor = () => {
	const values = '456789ABCDEF'
	let colorHEX = ''
	for (let i = 0; i < 6; i++) {
		let index = Math.trunc(Math.random() * 12)
		colorHEX += values[index]
	}
	return '#' + colorHEX
}

export default getRandomColor