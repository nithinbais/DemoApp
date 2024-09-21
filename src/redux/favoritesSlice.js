import {createSlice} from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {},
  reducers: {
    addFavorite: (state, action) => {
      state[action.payload.id] = action.payload;
    },
    removeFavorite: (state, action) => {
      delete state[action.payload.id];
    },
  },
});

export const {addFavorite, removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
