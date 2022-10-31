import React, { useEffect } from 'react'
import { onRemove, onToggle, userListType } from '../App';

type userType = {
	user: userListType;
	onRemove: onRemove;
	onToggle: onToggle;
};

const User = ({ user, onRemove, onToggle }: userType): JSX.Element => {
	useEffect(() => {
		console.log('user 값 설정');
		console.log(user);
		
		return () => {
			console.log('user가 바뀌기 전');
			console.log(user);
		}
	}, [user])
	
	
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'green' : 'black'
				}}
				onClick={() => onToggle(user.id)}
			>{user.username}</b> 
			&nbsp; 
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	)
}

export default User