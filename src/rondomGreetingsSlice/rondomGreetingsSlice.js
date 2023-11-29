import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/random_greeting');
      console.log(response.data.message)
      return response.data.message; // Assuming 'message' is the key for the greeting
    } 
    catch (error) {
      throw Error('Failed to fetch greeting'); // Custom error message if the API call fails
    }
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message; // Store the error message
      });
  },
});

export const selectGreeting = (state) => state.greeting;

export default greetingSlice.reducer;
