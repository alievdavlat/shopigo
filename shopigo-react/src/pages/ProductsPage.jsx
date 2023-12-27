import React from 'react'
import saleIcon from '../assets/img/sale.svg'
import {Loader, ProductsBanner, ReviewWidget, Reviews, SaleForm, Services, WhyShouldSale} from '../components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'



const ProductsPage = () => {
  const { lang } = useSelector(state => state.locale)

  const { id } = useParams()
	const [loading, setLoading] = React.useState(false)

	const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

	
	
  

  const [singleProductsData , setSingleProductData] = React.useState([])
  const getdata = async () => {
    const products =  await axios.get(`http://localhost:1337/api/products/${+id}?populate=*`)
    setSingleProductData(products?.data?.data);
    
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  const month = singleProductsData?.attributes?.discoun_deadline && singleProductsData?.attributes?.discoun_deadline !== undefined 
  ? singleProductsData?.attributes?.discoun_deadline?.slice(5, 7) 
  : 'December, 30 , 2023'
  
  const deadline = `
    ${
      month == 1 && month != NaN
      ?  monthNames[0]
      : month == 2 && month != NaN
      ? monthNames[1]
      : month == 3 && month != NaN
      ? monthNames[2]
      : month == 4 && month != NaN
      ? monthNames[3]
      : month == 5 && month != NaN
      ? monthNames[4]
      : month == 6  && month != NaN
      ? monthNames[5]
      : month == 7  && month != NaN
      ? monthNames[6]
      : month == 8 && month != NaN
      ? monthNames[7]
      : month == 9 && month != NaN
      ? monthNames[8]
      : month == 10 && month != NaN
      ? monthNames[9]
      : month == 11 && month != NaN
      ? monthNames[10]
      : month == 12 && month != NaN
      ? monthNames[11]
      : '12'
     
    }, ${singleProductsData?.attributes?.discoun_deadline?.slice(8)} ,${singleProductsData?.attributes?.discoun_deadline?.slice(0, 4)}
  `
  

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

  React.useEffect(() => {
    getdata()
  }, [])

  return (
    <div className='products_page'>
      
      <div className="sale">
        <div className="container">
          <div className="sale_wrap">

            <div className='sale-left'>
              <img src={saleIcon} alt="sale" />

              <span>{lang == 'uz' ? 'Aksiya Tugashiga': 'До конца акции'}:</span>
            </div>  

            <div className="sale-right">
            {
						deadline ?  	`${days} дня:${hours}:${minutes}:${seconds}`
						: deadline
					  }
            </div>

          </div>
        </div>
      </div>

     {
      loading ? 
      <Loader/>
     : <>
       <ProductsBanner  
      image={`http://localhost:1337${singleProductsData?.attributes?.image?.data[0]?.attributes?.url}`}
      title={lang === 'uz' ? singleProductsData?.attributes?.mainTitle_uz : singleProductsData?.attributes?.mainTitle_ru}
      price={singleProductsData?.attributes?.price}
      isDiscount={singleProductsData?.attributes?.isDiscount}
      discount = {singleProductsData?.attributes?.discount}
      advantages  = {singleProductsData?.attributes?.product_advantages?.advantages}
      />
      <Services

      />
      { 
        singleProductsData?.attributes?.productSection[0]?.title_uz
        &&
      <WhyShouldSale 
      title={lang == 'uz' ? singleProductsData?.attributes?.productSection[0]?.title_uz : singleProductsData?.attributes?.productSection[0]?.title_ru}
      description={lang == 'uz' ? singleProductsData?.attributes?.productSection[0]?.description_uz : singleProductsData?.attributes?.productSection[0]?.description_ru}

      />
      }

      <Reviews/>
      <ReviewWidget/>
      <SaleForm 
      type={singleProductsData?.attributes?.type}
      loading={loading}
      setLoading={setLoading}
      title={lang === 'uz' ? singleProductsData?.attributes?.mainTitle_uz : singleProductsData?.attributes?.mainTitle_ru}
      image={`http://localhost:1337${singleProductsData?.attributes?.image?.data[0]?.attributes?.url}`}
      isDiscount={singleProductsData?.attributes?.isDiscount}
      discount = {singleProductsData?.attributes?.discount}
      price={singleProductsData?.attributes?.price}
      deadline={deadline.trim()}
      />
      
     </>
     }


    </div>
  )
}

export default ProductsPage