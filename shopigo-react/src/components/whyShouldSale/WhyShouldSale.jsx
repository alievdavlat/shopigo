import React from 'react'
import telegramPlaneicon from '../../assets/img/telegram-plane.svg'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'



const WhyShouldSale = ({title, description}) => {
  const { lang } = useSelector(state => state.locale)
  const { id } = useParams()




  const [singleProductsData , setSingleProductData] = React.useState([])
  const getdata = async () => {
    const products =  await axios.get(`http://localhost:1337/api/products/${+id}?populate=*`)
    setSingleProductData(products?.data?.data);
    
  }

  console.log(singleProductsData?.attributes?.image?.data);
  React.useEffect(() => {
    getdata()
  }, [])

const [slideIndex, setSlideIndex] = React.useState(0)


  return (
    <div className='info'>
        <div className="container">
          <div className="info-wrapp">

            <div className="info-left">
              <h2>{title}</h2>
              
              <div className='info-left_descr'>
                <p>
                  {description.slice(0, 284)}
                </p>
                <p>
                {description.slice(284)}

                </p>
              </div>

              <div className='info-left_btns'>
                  <a href='#buy'>
                  {
                    lang == 'uz' 
                    ? 'Aksiyada Xarid Qilish'
                    : 'Купить по акции'
                  }
                  </a>
                  <button className='info-left_btns_white'>
                    <img src={telegramPlaneicon} alt="telegram" />
                    <span>{
                      lang == 'uz'
                      ? 'Telegramdan yozish'
                      : 'Купить по акции'
                      }</span>
                  </button>
              </div>


            </div>

            <div className="info-right">
              <div className='info-right_mainImg'>
                <img src={`http://localhost:1337${singleProductsData?.attributes?.image?.data[slideIndex].attributes?.url}`} alt="slide" />
              </div>

                <div className='info-right_thumbs'>
                    {
                      singleProductsData?.attributes?.image?.data.map((item, index) => (
                        <div key={item.id}  onClick={() => setSlideIndex(index)}>
                          <img src={`http://localhost:1337${item?.attributes?.url}`} alt="thumbs" className={`${index === slideIndex && 'current_img'}`} />
                        </div>
                      ))
                    }
                </div>

            </div>

          </div>
        </div>
    </div>
  )
}

export default WhyShouldSale