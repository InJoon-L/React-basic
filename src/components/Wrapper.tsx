import React, { ReactNode } from 'react'

interface WrapperProps {
	children: ReactNode;
}

const Wrapper = ({children} : WrapperProps) => {
	const style: React.CSSProperties = {
		border: '2px solid black',
		padding: '16px'
	}

	return (
		<div style={style}>
			{children}
		</div>
	);
}

export default Wrapper