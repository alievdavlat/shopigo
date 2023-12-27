import React from 'react'
import sendedIcon from '../../assets/img/sended.png'
import { useSelector } from 'react-redux'

const Sended = () => {
	const { lang } = useSelector(state => state.locale)

  return (
<section className="sended">
		<div className="container">
			<div className="sended-wrap">
				<div className="sended__img">
					<img src={sendedIcon} alt="ico"/>
				</div>
				{
					lang == 'uz'
					? <div className="sended__title">
							Xaridingiz, uchun rahmat<br/> so'rovingiz qabul qilindi!
						</div>
				: <div className="sended__title">
						Спасибо, ваша <br/> заявка принята!
					</div>
				}
				{
					lang == 'uz'
					? 
				<div className="sended__text">
					Mutaxasisimiz siz bilan yaqin orada bog'lanadi.
				</div>
				: 
				<div className="sended__text">
					В ближайшее время с вами свяжется наш специалист.
				</div>
				}
			</div>
		</div>
	</section>
  )
}

export default Sended