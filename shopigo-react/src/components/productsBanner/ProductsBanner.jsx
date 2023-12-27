import React from 'react'
import ProductsBannerVideo from '../../assets/video/video.mp4'
import checkIcon from '../../assets/img/check.png'
import { useSelector } from 'react-redux'

const ProductsBanner = ({image, title, price, isDiscount, discount, advantages}) => {
  const { lang } = useSelector(state => state.locale)

  const videoRef = React.useRef(null)

  const handleVideoEnd = () => {
    videoRef.current.play();
  };

  return (
    
    <div className='products_hero'> 
  
    <div className="container">

      <div className="products_hero-wrapp">
      <div className="products_hero-left">
          {

            image 
            ? <img src={image} alt="img" />
            : 
            <video
            autoPlay={true}
            muted
            loop
            onEnded={handleVideoEnd}
          >
						<source src={ProductsBannerVideo} />
					</video>
          }

          {
            isDiscount 
            &&  
            <div className='products_hero-left_discount'>
            -{discount}%
          </div>
          }
          
      </div>

      <div className="products_hero-right">
        <h2>
            {title}
        </h2>

        <ul>
          {
          advantages?.map(item => (
            <li key={item}>
            <img src={checkIcon} alt="check" />
              <span>{item}</span>
            </li>
          ))
          }
        </ul>

        <div className='products_hero-right_sale'>
            <div>
            <span>{lang == 'uz' ? 'Aksiya Tugashiga': 'До конца акции'}:</span>
              <strong>
                {price}
                <span>
                {lang === 'uz' ? 'So`m' : 'Сум' }</span>
              </strong>
            </div>

            <a href='#buy'>
              {lang == 'uz' ? 'Купить' :'Sotib olish'}
            </a>
        </div>

      </div>
        
      </div>     
    </div>

    </div>
  )
}

export default ProductsBanner