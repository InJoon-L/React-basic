import React, { useRef, useState } from 'react'

interface inputSampleText {
	name: string;
	nickname: string;
}

const InputSample = (): JSX.Element => {
	const [text, setText] = useState<inputSampleText>({
		name: '',
		nickname: ''
	});

	const nameInput = useRef<HTMLInputElement>(null);

	const { name, nickname } = text; // 비구조화 할당을 통해 값 추출

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value, name } = e.target; // 우선 e.target에서 name과 value를 추출
		
		setText({
			...text, // 기존의 text객체를 복사한 뒤
			[name]: value // name 키를 가진 값을 value로 설정
		});
	}

	const onReset = (): void => {
		setText({
			name: '',
			nickname: ''
		});

		nameInput.current?.focus();
	}

	return (
		<div>
			<input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
			<button onClick={onReset}>초기화</button>
			<div>
				<b>값: </b>
				{name} ({nickname})
			</div>
		</div>
	);
}

export default InputSample