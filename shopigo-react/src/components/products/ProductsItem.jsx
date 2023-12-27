import React from 'react'
import electroIcon from '../../assets/img/electro.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProductsItem = ({item}) => {
  const { lang } = useSelector(state => state.locale)

 

  return (
    <Link to={`/products/${item?.id}`} className='products_content-item' >
        {
           item?.attributes?.isDiscount &&
        <div className='products_content-item_discount'>
          -{item?.attributes?.discount}%
        </div>
        }

      <div className="products_content-item_left">
        <img src={`http://localhost:1337${item?.attributes?.image?.data[0]?.attributes?.url}`} alt="products" />
      </div>

      <div className="products_content-item_right">
        <p>{lang == 'uz' ? item?.attributes?.mainTitle_uz : item?.attributes?.mainTitle_ru}</p>

        <div className='products_content-item_right_text'>
          <img src={electroIcon} alt="electro" />
          <span>{lang == 'uz' ? 'Tez yetkazib berish' : 'Быстрая доставка'}</span>
        </div>
      </div>

    </Link>
  )
}

export default ProductsItem