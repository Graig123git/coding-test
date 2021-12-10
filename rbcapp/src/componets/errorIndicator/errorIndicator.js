import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

/**
 *
 * @returns the Error component
 */
export default function ErrorIndicator() {
	/**
	 * conncets to the store and listen to errors, if error while making
	 * api request it shows the error component
	 */
	const error = useSelector((state) => state.images.error);
	if (error != null) {
		return (
			<Fragment>
				<h4>Opps Something went Wrong while fecthing Images !!!</h4>
			</Fragment>
		);
	}
	return null;
}
