import './App.css';
import Wrapper from './components/Wrapper';
import UserList from './components/UserList';

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <UserList />
    </Wrapper>
  );
}

export default App;
