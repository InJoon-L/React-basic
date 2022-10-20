import React, { useRef, useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

export type userListType = {
	id: number;
	username: string;
	email: string;
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

const App = (): JSX.Element => {
  const [inputs, setInputs] = useState<inputsType>({
    username: '',
    email: ''
  });

  const [users, setUsers] = useState<userListType[]>([
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
      email: inputs.email
    };

    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;
  };

  return (
    <Wrapper>
      <CreateUser 
        inputs={inputs}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </Wrapper>
  );
}

export default App;
