import {createSlice} from '@reduxjs/toolkit';

export const destinationSlice = createSlice({
  name: 'destination',
  initialState: {
    start: {
      latitude: 34.075763534330086,
      longitude: -6.771591746405573,
    },
    end: {
      latitude: 34.04462741332137,
      longitude: -6.805901019164147,
    },
  },
  reducers: {
    setStart: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.end = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setStart, setEnd} = destinationSlice.actions;

export default destinationSlice.reducer;
