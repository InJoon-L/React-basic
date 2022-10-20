import React from 'react'
import { userListType } from '../App';
import User from './User';

type users = {
	users: userListType[];
};

const UserList = ({ users }: users): JSX.Element => {
	return (
		<div>
			{users.map((user: userListType) => (
				<User user={user} key={user.id} />
			))}
		</div>
	)
}

export default UserList