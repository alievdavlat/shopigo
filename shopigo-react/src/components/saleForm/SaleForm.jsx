import React from 'react'
import arrowGold from '../../assets/img/arrow-gold.svg'
import video from '../../assets/video/video.mp4'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const SaleForm = ({price, image, discount, isDiscount, deadline, title, setLoading, loading, type}) => {
  const { lang } = useSelector(state => state.locale)

	const {id} = useParams()
	const [username, setUsername] = React.useState('')
	const [phone_number, setPhoneNumber] = React.useState('')
	const [isValid, setIsValid] = React.useState(true);

	const navigate = useNavigate()

	const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

	
	const getTime = () => {
		const time = Date.parse(deadline) - Date.now();
		setDays(Math.floor(time / (1000 * 60 * 60 * 24)) || 0);
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24) || 0);
    setMinutes(Math.floor((time / 1000 / 60) % 60) || 0);
    setSeconds(Math.floor((time / 1000) % 60) || 0);
	}


	React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


	const postOrder = async (e) => {
		e.preventDefault();

		try {
			setLoading(true)
		const response = await axios.post('http://localhost:1337/api/orders', 
		{
			data:{
			username,
			phone_number,
			product_name:title
			}
			}
		)


		
		
		setTimeout(() => {
			setUsername('')
			setPhoneNumber('')
			setLoading(false)
		}, 1000);

		if (response.status === 200 || response.status === 201) {
			toast.success("Заказ успешно создан", {
				theme: "dark",
			})
			navigate(`/sale-done/${type}/${id}`)
		} else{
			toast.error("Произошла ошибка при создании заказа", {
				theme: "dark",
			})
		}

		} catch (err) {
			setLoading(false)
		} 
	}
	const videoRef = React.useRef(null)

  const handleVideoEnd = () => {
    videoRef.current.play();
  };





 
console.log(username. phone_number);

  return (
	<section class="buy" id="buy">
		<div class="container">
			<div class="buy-main">
				<div class="buy__img">

					{
						isDiscount 
						&& 
						<div class="main-item__discount">
						-{discount}%
					</div>
					}
					{
						image 
						? <img src={image} alt="img" />
						: <video 
						autoPlay={true}
						muted
						loop
						onEnded={handleVideoEnd}
					 >
						 <source src={video} />
					 </video>
					}
				</div>
				<div class="buy-wrap">
					<div class="offer-sale">
						{
						deadline ?  	`${days} дня:${hours}:${minutes}:${seconds}`
						: deadline
					}
					</div>
					{
						lang === 'uz'
						? <h2 class="buy__title">
							Yarim narxida <br/> sotib olsihga ulguring!
					</h2>
						: <h2 class="buy__title">
						Успейте купить <br/> со скидкой прямо сейчас!
					</h2>
					}
					<form class="buy-form" onSubmit={postOrder}>
						<input type="text" required placeholder="Ваше имя" value={username} onChange={(e) => setUsername(e.target.value)}/>
						<input 
						type="tel" 
						class="form__tel" 
						required 
						placeholder="Введите номер" 
						value={phone_number}
						onChange={(e) => setPhoneNumber(e.target.value)} 
						pattern='/^9989[012345789][0-9]{7}$/'
						
						/>
						<div class="buy-form__wrap">
							<div class="buy-form__price">
              <span>{lang == 'uz' ? 'Aksiya Tugashiga': 'До конца акции'}:</span>
								<div>{price} <span>{lang === 'uz' ? 'So`m' : 'Сум'}</span></div>
							</div>
							<img src={arrowGold} alt="ico" />
							<button class="buy-form__btn" disabled={loading}>
								{lang == 'uz' ? 'Aksiya boyicha buyurtma' : 'Заказать по акции'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>  )
}

export default SaleForm