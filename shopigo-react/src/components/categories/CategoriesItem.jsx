import React from 'react'
import { useSelector } from 'react-redux'

const CategoriesItem = ({item ,  setCategory, setTitle}) => {
  const { lang } = useSelector(state => state.locale)


  const handleSetTitle = ()  => {
    if (lang == 'uz') {
      setTitle(item?.attributes?.title_uz)
    } else {
      setTitle(item?.attributes?.title_ru)
    }

    setCategory(item?.attributes?.category_name)
  }

  return (
    <div className="categories-content_item" onClick={handleSetTitle}>
                
    <div className="categories-content_item-img">
      <img src={`http://localhost:1337${item?.attributes?.icon?.data?.attributes?.url}`} alt="categories" />
    </div>


      <div className="categories-content_item-text">
        <p>{lang === 'uz' ? item?.attributes?.title_uz : item?.attributes?.title_ru}</p>
      </div>
  </div>
  )
}

export default CategoriesItem