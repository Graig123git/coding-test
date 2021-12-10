import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './features/imageSlice';

export default configureStore({
	reducer: {
		images: imagesReducer,
	},
});
