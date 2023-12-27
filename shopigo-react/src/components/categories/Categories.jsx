import React from 'react'
import CategoriesItem from './CategoriesItem'
import axios from 'axios'
import { useSelector } from 'react-redux'


const Categories = ({setCategory, setTitle}) => {
  const { lang } = useSelector(state => state.locale)

  const [categoryData, setCategoryData] = React.useState([])

  const getdata = async () => {
    const categories =  await axios.get(`http://localhost:1337/api/categories?populate=*`)
    setCategoryData(categories?.data?.data)
  }

  React.useEffect(() => {
    getdata()
  }, [])

  return (
    <div className='categories'>
        <div className="container">
            <div className="categories_wrapp">


              <h2 className='categories-title'>
                {lang === 'uz' ? "Kattegoriyalar" :'Категории' }
              </h2>

              <div className="categories-content">
                    
                {
                  categoryData.map((item) => <CategoriesItem item = {item} key={item.id} setCategory={setCategory} setTitle={setTitle}/>)
                }

              </div>


            </div>
        </div>
    </div>
  )
}

export default Categories