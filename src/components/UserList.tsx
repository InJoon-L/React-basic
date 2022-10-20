import React from 'react'
import User from './User';

export type userListType = {
	id: number;
	username: string;
	email: string;
}

const UserList = (): JSX.Element => {
	const users: userListType[] = [
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com'
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com'
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com'
		}
	]
	return (
		<div>
			{users.map((user: userListType) => (
				<User user={user} key={user.id} />
			))}
		</div>
	)
}

export default UserList