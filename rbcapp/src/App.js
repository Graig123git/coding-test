import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import MyButtons from './componets/myButtons/myButtons';
import ShowSlides from './componets/showSlides/showSlides';
import Loader from './componets/loader/loader';
import './App.css';

/**
 *
 * @returns retunrs the app components such as MyButtons and ShowSlides
 */
const MainApp = () => {
	return (
		<div className='App '>
			<MyButtons />
			<ShowSlides />
		</div>
	);
};

/**
 * wraps the MainApp component in a HOC for loading indicator
 */
const AppLoader = Loader(MainApp);

/**
 *
 * @returns the AppLoader component wrapped inside Redux Provider
 */
function App() {
	return (
		<Provider store={store}>
			<div className='App '>
				<AppLoader />
			</div>
		</Provider>
	);
}

export default App;
