import React from 'react'
import ProductsItem from './ProductsItem'
import axios from 'axios'
import { useSelector } from 'react-redux'



const Products = ({category, title}) => {
  const { lang } = useSelector(state => state.locale)

  const [productsData , setProductData] = React.useState([])
  const getdata = async () => {
    const products =  await axios.get(`http://localhost:1337/api/products?populate=*`)
    setProductData(products?.data?.data);
  }

  React.useEffect(() => {
    getdata()
  }, [])

  const sortedData = productsData.filter(items => items?.attributes?.type === category || category === 'all')


  return (
    <div className='products'>
      <div className="container">
        <div className="products_wrapp">
          
          <div className="products_title">
            <h2>
            {title}
            </h2>  
            <span>{sortedData.length}</span>
          </div>  

            <div className="products_content">
              {
              sortedData.length === 0 
              ? <h1>{lang == 'uz' ? 'Maxsulot topilmadi': 'Товар не найден'} ☹️</h1>
              :   sortedData.map((item) => <ProductsItem item = {item} key={item.id}   />)
              }
            </div>
        </div>  
      </div>  
    </div>
  )
}

export default Products