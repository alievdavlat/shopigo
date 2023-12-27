import React from 'react'
import ReviewsItem from './ReviewsItem'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { reviewsData } from '../../utils/constants';
import { useSelector } from 'react-redux';



const Reviews = () => {
  const { lang } = useSelector(state => state.locale)

	const [swiperRef, setSwiperRef] = React.useState(null);
			
	const prevHandler = () => {
			swiperRef.slidePrev();
	};

	const nextHandler = () => {
				swiperRef.slideNext();
	};


  return (
    <section class="reviews">
		<div class="container">
			{
				lang == 'uz'
				 ? <h2 class="reviews__title">
						Mijozlarning fikri <span>231+</span>
					</h2>
			 : <h2 class="reviews__title">
					Отзывы клиентов <span>231+</span>
				</h2>
			}
				<Swiper
							className="reviews-carousel"
							speed={1000}
							loop={true}
							onSwiper={(swiper) => setSwiperRef(swiper)}
							modules={[Autoplay]}
							centeredSlides={true}
							slidesPerView={3}
							autoplay={{
									delay: 2500,
									disableOnInteraction: false,
							}}
							breakpoints={{
									380: {
											slidesPerView: 1.3,
											spaceBetween: 10,
									},
									640: {
											slidesPerView: 1,
											spaceBetween: 20,
									},
									768: {
											slidesPerView: 2,
											spaceBetween: 30,
									},
									992: {
											slidesPerView: 3,
											spaceBetween: 30,
									},
									1024: {
											slidesPerView: 3,
											spaceBetween: 30,
									},
							}}
							>
						{
							reviewsData.map((item) => (
							<SwiperSlide key={item.id}>
								<ReviewsItem {...item}/>
						</SwiperSlide>
							))
						}
					</Swiper>

			
		</div>
	</section>
  )
}

export default Reviews