import React from 'react'
import { reviewsWidtgetData } from '../../utils/constants'

const ReviewWidget = () => {
  return (
    <section className="numbers">
		<div className="container">
			
			{
        reviewsWidtgetData.map(item => (
      <div className="numbers__item" key={item.id}>
				<div className="numbers__number">
					{item.precent}
				</div>
				<div className="numbers__text">
          {item.text}
				</div>
			</div>
        ))
      }
		</div>
	</section>
  )
}

export default ReviewWidget