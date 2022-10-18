import React from 'react';

type HelloProps = {
	content: string;
	isSpecial: boolean;
};


const Hello = (props: HelloProps) => {
	return (
		<div>
			{ props.isSpecial && <b>*</b> }
			안녕하세요 {props.content}
		</div>
	);
}

Hello.defaultProps = {
	content: 'bye',
	isSpecial: false
}

export default Hello