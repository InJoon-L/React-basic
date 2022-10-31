import React, { useRef, useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

export type userListType = {
	id: number;
	username: string;
	email: string;
  active: boolean;
};

export interface inputsType {
  username: string;
  email: string;
}

export interface onChange {
  (e: React.ChangeEvent<HTMLInputElement>): void;
}

export interface onCreate {
  (): void;
}

export interface onRemove {
  (id: number): void;
}

export interface onToggle {
  (id: number): void;
}

const App = (): JSX.Element => {
  const [inputs, setInputs] = useState<inputsType>({
    username: '',
    email: ''
  });

  const [users, setUsers] = useState<userListType[]>([
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
      active: true
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
      active: false
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
      active: false
		}
  ]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef<number>(4);

  const onCreate = (): void => {
    const user: userListType = {
      id: nextId.current,
      username: inputs.username,
      email: inputs.email,
      active: false
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };

  const onRemove = (id: number) => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id: number) => {
    setUsers(
      users.map(user => user.id === id ? { ...user, active: !user.active} : user)
    )
  }

  return (
    <Wrapper>
      <CreateUser 
        inputs={inputs}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </Wrapper>
  );
}

export default App;
