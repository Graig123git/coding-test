import React, { Fragment } from 'react';
import './noPhotos.css';

/**
 *
 * @returns the NoPhotos component, this component is a simple dumb component
 * to indicate to the user that there is currently no Photos
 */
export default function NoPhotos() {
	return <p className='textColor'>no Photos</p>;
}
