import { useEffect } from 'react';
import { useShallow } from 'zustand/shallow';
import counterStore from './counterStore';
import userStore from './userStore';

const App = () => {
  const { count, increment, decrement, reset } = counterStore(
    useShallow((state) => ({
      count: state.count,
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
    })),
  );

  const { users, getUsers } = userStore(
    useShallow((state) => ({
      users: state.users,
      getUsers: state.getUsers,
    })),
  );

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <h1 className='text-center text-semibold text-2xl'>React Zustand Test</h1>

      <h2 className='text-xl font-bold'>Counter</h2>
      <div>{count}</div>
      <button type='button' onClick={decrement}>
        －
      </button>
      <button type='button' onClick={increment}>
        ＋
      </button>
      <button type='button' onClick={reset}>
        Reset
      </button>

      <h2 className='text-xl font-bold'>User</h2>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default App;
