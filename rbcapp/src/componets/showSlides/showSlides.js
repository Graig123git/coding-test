import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './slides.css';
import NoPhotos from '../noPhotos/noPhotos';

/**
 *
 * @returns the ShowSlides component which is used to render slides
 */

export default function ShowSlides() {
	//useSelector listen to the images state in the redux store
	const images = useSelector((state) => state.images.imageList);
	const [slideIndex, setSlideIndex] = useState(1);

	/**
	 * This useEffect runs every time the redux store updates the images
	 * hence rendering the slides
	 */
	useEffect(() => {
		if (images.length) showCurrentSlide(1);
	}, [images]);

	const showCurrentSlide = (n) => {
		var i;
		var images = document.getElementsByClassName('mySlides');
		if (n > images.length) {
			n = 0;
		}
		if (n < 1) {
			n = images.length;
		}
		for (i = 0; i < images.length; i++) {
			images[i].style.display = 'none';
		}

		images[n - 1].style.display = 'block';
	};

	const plusSlides = (index) => {
		setSlideIndex(slideIndex + index);
		showCurrentSlide(slideIndex + index);
	};

	if (!images.length) return <NoPhotos />;

	return (
		<>
			<div className='slideshow-container'>
				{images.map((image, index) => (
					<div className='mySlides fade'>
						<img src={image} />
					</div>
				))}
				{slideIndex != 1 ? (
					<a className='prev' onClick={() => plusSlides(-1)}>
						&#10094;
					</a>
				) : null}

				{slideIndex < images.length ? (
					<a className='next' onClick={() => plusSlides(1)}>
						&#10095;
					</a>
				) : null}
			</div>
		</>
	);
}
