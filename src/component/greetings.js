import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting, selectGreeting } from '../rondomGreetingsSlice/rondomGreetingsSlice';
const Greeting = () => {
  const { message, isLoading } = useSelector(selectGreeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greetings</h1>
      {isLoading ? <p>Loading...</p> : <p>{ message}</p>}
    </div>
  );
};

export default Greeting;
