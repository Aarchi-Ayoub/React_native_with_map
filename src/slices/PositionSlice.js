import {createSlice} from '@reduxjs/toolkit';

export const positionSlice = createSlice({
  name: 'position',
  initialState: {
    coord: {
      latitude: 34.06446226508741,
      longitude: -6.766739894829115,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    cuurentPosition: {
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0,
      longitudeDelta: 0,
    },
  },
  reducers: {
    setCoord: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.coord = action.payload;
    },
    setMyPosition: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.cuurentPosition = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setCoord, setMyPosition} = positionSlice.actions;

export default positionSlice.reducer;
