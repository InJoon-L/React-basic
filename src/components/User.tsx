import React from 'react'
import { userListType } from './UserList'

type userType = {
	user: userListType;
}

const User = ({ user }: userType): JSX.Element => {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
		</div>
	)
}

export default User