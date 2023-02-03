import cars from '../data/cars.json'
import styles from './Cars.module.css'
import { v4 as uuidv4 } from 'uuid';
const Cars = () => {
	return (
		<div className={styles.carsWrapper}>
			<table className={styles.carsTable}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Company</th>
						<th>Model</th>
						<th>Year</th>
						<th>VIN</th>
					</tr>
				</thead>
				<tbody>
					{cars.map( (car) => {
						return (
							<tr key={uuidv4()}>
								<td key={uuidv4()}>{car.id}</td>
								<td key={uuidv4()}>{car.carMake}</td>
								<td key={uuidv4()}>{car.carModel}</td>
								<td key={uuidv4()}>{car.year}</td>
								<td key={uuidv4()}>{car.VIN}</td>
							</tr>
						)
					} )}
				</tbody>
			</table>
		</div>
	)
}


export default Cars;