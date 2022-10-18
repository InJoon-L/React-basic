import React, { useState } from 'react'

const Counter = () => {

	const [number, setNumber] = useState<number>(0);

	const onIncrease = () => {
		setNumber((prevNumber: number) => prevNumber + 1);
	}

	const onDecrease = () => {
		setNumber((prevNumber: number) => prevNumber - 1);
	}

	return (
		<div>
			<h1>{number}</h1>
			<button onClick={onIncrease}>+1</button>
			<button onClick={onDecrease}>-1</button>
		</div>
	);
}

export default Counter