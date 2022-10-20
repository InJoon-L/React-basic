import React from 'react'
import { onRemove, userListType } from '../App';
import User from './User';

type UserListProps = {
	users: userListType[];
	onRemove: onRemove;
};

const UserList = ({ users, onRemove }: UserListProps): JSX.Element => {
	return (
		<div>
			{users.map((user: userListType) => (
				<User user={user} key={user.id} onRemove={onRemove} />
			))}
		</div>
	)
}

export default UserList