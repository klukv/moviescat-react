import React, { Children, cloneElement, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PAGE_WIDTH = 217
const TRANSLATE_WIDTH = 534

export const Slider = ({ children }) => {
	const [pages, setPages] = useState([])
	const [translate, setTranslate] = useState(0)

	const handleLeftArrow = () => {
		setTranslate((currentTranslate) => {
			const newTranslate = currentTranslate + TRANSLATE_WIDTH
			return Math.min(newTranslate, 0)
		})
	}

	const handleRightArrow = () => {
		setTranslate((currentTranslate) => {
			const newTranslate = currentTranslate - TRANSLATE_WIDTH

			return Math.max(newTranslate, -1180)
		})
	}

	useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: '412px',
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`,
					}
				})
			})
		)

	}, [])


	return (
		<div className="slider">
			<div className='slider__inner'>
				<FaChevronLeft className='arrowLeft arrow' onClick={handleLeftArrow} />
				<div className="compilation__slider"
					style={{
						transform: `translateX(${translate}px)`,
					}}
				>
					{pages}
				</div>
				<FaChevronRight className='arrowRight arrow' onClick={handleRightArrow} />
			</div>
		</div>
	)
}
