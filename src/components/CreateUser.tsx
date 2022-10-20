import React from 'react'
import { inputsType, onChange, onCreate } from '../App'

interface createUserProps {
	inputs: inputsType;
	onChange: onChange;
	onCreate: onCreate;
}

const CreateUser = ({ inputs, onChange, onCreate }: createUserProps) => {
	return (
		<div>
			<input 
				name='username'
				placeholder='계정명'
				onChange={onChange}
				value={inputs.username}
				type="text"
			/>
			<input 
				name='email'
				placeholder='이메일'
				onChange={onChange}
				value={inputs.email}
				type="text" 
			/>
			<button onClick={onCreate}>등록</button>
		</div>
	)
}

export default CreateUser