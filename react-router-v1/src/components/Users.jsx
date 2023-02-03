import { v4 as uuidv4 } from 'uuid';
import users from '../data/users.json'
import styles from './Users.module.css'
const Users = () => {
	return (
		<table className={styles.usersTable}>
			<thead>
				<tr>
					<th>ID</th>
					<th>First name</th>
					<th>Last name</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{users.map( (user) => {
					return (
						<tr key={uuidv4()}>
							<td key={uuidv4()}>{user.id}</td>
							<td key={uuidv4()}>{user['first_name']}</td>
							<td key={uuidv4()}>{user['last_name']}</td>
							<td key={uuidv4()}>{user.email}</td>
						</tr>
					)
				} )}
			</tbody>
		</table>
	)
}


export default Users;