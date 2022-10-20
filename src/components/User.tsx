import React from 'react'
import { onRemove, userListType } from '../App';

type userType = {
	user: userListType;
	onRemove: onRemove;
};

const User = ({ user, onRemove }: userType): JSX.Element => {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	)
}

export default User