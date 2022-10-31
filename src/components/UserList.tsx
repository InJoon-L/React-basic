import React from 'react'
import { onRemove, onToggle, userListType } from '../App';
import User from './User';

type UserListProps = {
	users: userListType[];
	onRemove: onRemove;
	onToggle: onToggle;
};

const UserList = ({ users, onRemove, onToggle }: UserListProps): JSX.Element => {
	return (
		<div>
			{users.map((user: userListType) => (
				<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
			))}
		</div>
	)
}

export default UserList