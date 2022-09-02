import {configureStore} from '@reduxjs/toolkit';
import positionSlice from 'slices/PositionSlice';
import destinationSlice from 'slices/DestinationSlice';
export default configureStore({
  reducer: {
    Position: positionSlice,
    Destination: destinationSlice,
  },
});
