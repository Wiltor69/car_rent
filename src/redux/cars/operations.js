import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6571fa49d61ba6fcc0141f1a.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/Advert');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
