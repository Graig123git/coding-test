import React from 'react';
import './loader.css';
import { useSelector } from 'react-redux';

/**
 *
 * @param {*} Component
 * @returns this is an HOC accpets and return a component with the loading state
 */
function Loader(Component) {
	return function WihLoadingComponent({ ...props }) {
		//useSelector to listen to the loading state in the redux store
		const isLoading = useSelector((state) => state.images.status);
		return (
			<div className={isLoading == 'idle' ? '' : 'overlay'}>
				<span className={isLoading == 'idle' ? '' : 'loading'}>
					<div className='spinner' />
				</span>
				<Component {...props} />
			</div>
		);
	};
}
export default Loader;
