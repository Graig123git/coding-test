import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ErrorIndicator from '../errorIndicator/errorIndicator';
import './myButtons.css';
import { fetchApiImages } from '../../features/imageSlice';

/**
 *
 * @returns the MyButtons component
 */
export default function MyButtons() {
	//useDispatch is use to dispatch actions
	const dispatch = useDispatch();
	//sharkButton indicates if status of the sharkButton true or false, Default false
	const [sharkButton, setSharkButton] = useState(false);
	//catButton indicates if status of the catButton true or false
	const [catButton, setCatButton] = useState(true);

	/**
	 * this useEffect is use to execute API calls to the server
	 */
	useEffect(() => {
		async function fetch_Api_Images() {
			dispatch(fetchApiImages({ sharkButton: sharkButton, catButton: catButton }));
		}
		fetch_Api_Images();
	}, [sharkButton, catButton]); // controls when the useEffect should re-run

	return (
		<Fragment>
			<div className='btn-container'>
				<button
					className={sharkButton ? 'Active' : 'InActive'}
					onClick={() => setSharkButton(sharkButton ? false : true)}
				>
					Sharks
				</button>
				<button className={catButton ? 'Active' : 'InActive'} onClick={() => setCatButton(catButton ? false : true)}>
					Cats
				</button>
			</div>

			<ErrorIndicator />
		</Fragment>
	);
}
