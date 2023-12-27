import React from 'react'
import { Products, Sended } from '../components'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SalePage = () => {
  const {type} = useParams()
  const { lang } = useSelector(state => state.locale)



  return (
    <div>
      <Sended/>
      <Products category={type} title={lang == 'uz' ? 'Boshqa maxsulotlar' : 'Другие товары'} setTitle={() => {}} />

      <div className='other_products'>
      <Link to={'/'} className='other_products-btn'>
        {
          lang == 'uz'
          ? 'Hamma maxsulotlar'
          : 'Все товары'
        }
      </Link>
      </div>

    </div>
  )
}

export default SalePage