import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../src/rondomGreetingsSlice/rondomGreetingsSlice';

const store = configureStore({
reducer: {
  greeting: greetingReducer,
},
});
export default store;