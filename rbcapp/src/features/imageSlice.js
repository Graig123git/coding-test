import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import shuffle from '../utils/utils';

/**
 * IntialState for the Redux images slice
 */
const initialState = {
	imageList: [], // stores the list of images from API request
	status: 'idle', // indicates the loading state of the API request. Pending or idle
	error: null, // use to store error during API calls
};

/**
 * createAsyncThunk function that is used to make the API call to server
 */
export const fetchApiImages = createAsyncThunk('images/fetchApiImages', async ({ sharkButton, catButton }) => {
	if (sharkButton && catButton) {
		const cats = await axios.get('/api/cats');
		const sharks = await axios.get('/api/sharks');
		//merge two array resluts from both api
		const mergeList = cats.data.catList.concat(sharks.data.sharkList);
		//return shuffle version
		return shuffle(mergeList);
	}
	if (sharkButton) {
		const sharkButton = await axios.get('/api/sharks');
		return sharkButton.data.sharkList;
	}
	if (catButton) {
		const catButton = await axios.get('/api/cats');
		return catButton.data.catList;
	}
	return [];
});

/**
 * createSlice for images
 */
export const imageSlice = createSlice({
	name: 'images',
	initialState,
	/**
	 * Redux Toolkit's createReducer and createSlice automatically use
	 * Immer internally to let you write simpler immutable update logic using "mutating" syntax.
	 * This helps simplify most reducer implementations.
	 * Redux Toolkit guide can be found here https://redux-toolkit.js.org/introduction/getting-started
	 */

	extraReducers: {
		[fetchApiImages.pending]: (state, action) => {
			//set the status of the API request to pending
			state.status = 'pending';
		},
		[fetchApiImages.fulfilled]: (state, action) => {
			/**
			 * If the API was a success, this set the status of the API request to idle
			 * and the imageList to the results return from the fetchApiImages thunk
			 */
			state.imageList = action.payload;
			state.status = 'idle';
			state.error = null;
		},
		/**
		 * If the API was a failure, this set the status of the API request to idle
		 * and the error to the error return from the fetchApiImages thunk
		 */
		[fetchApiImages.rejected]: (state, action) => {
			state.error = action.error;
			state.status = 'idle';
		},
	},
});

export const {} = imageSlice.actions;

export default imageSlice.reducer;
