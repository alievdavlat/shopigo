import React from 'react'
import {Categories, Products} from '../components'
import { useSelector } from 'react-redux'

const Home = () => {
  const { lang } = useSelector(state => state.locale)

  const [category, setCategory] = React.useState('all')
  const [title, setTitle] = React.useState(lang == 'uz' ? 'Hamma tovarlar' : 'Все товары')

  console.log(title);

  return (
    <div className='home'> 
      <Categories setCategory={setCategory} setTitle={setTitle} />
      <Products category={category} title={title}/>
      
    </div>
  )
}

export default Home