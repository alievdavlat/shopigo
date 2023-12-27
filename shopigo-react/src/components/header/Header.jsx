import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { headerSocials } from '../../utils/constants'
import logo from '../../assets/img/logo.svg'
import phooneIcon from '../../assets/img/phone.svg'
import langIcon from '../../assets/img/lang.svg'
import homeIcon from '../../assets/img/home.svg'
import { changeLang} from '../../redux/features/localeSlice'

const Header = () => {

  const [showDropDown, setShowDropDown] = React.useState(false)
  const dispatch = useDispatch()
  const { lang } = useSelector(state => state.locale)


const changeLanguageHandler = (key) => {
  dispatch(changeLang(key))
  setShowDropDown(false)
}

  return (
    <header className='header'>
      <div className="container">
          <nav className="header_nav">
              <Link to={'/'} className='header_nav-logo'>
                <img src={logo} alt='header-logo'/>
              </Link>

              <div className="header_nav-right">
                  <Link to={'/'} className="header_nav-home">
                  <img src={homeIcon} alt="home_icon"/>
                  </Link>
                  
                  <ul className='header_nav-right__socials '>

                    {
                      headerSocials.map((item) => (
                      <li key={item?.id} className='header_nav-right__socials-item'>
                        <a href={item.path} target='_blank'>
                            <img src={item?.icon} alt="header_socials" />
                        </a>
                      </li>
                      ))
                    }

                    <li>
                      <a href="tel:+998(97) 088 08 08">
                          <img src={phooneIcon} alt="phone" />
                      </a>
                    </li>
                  </ul>
                    

                  <div className='header_nav-right__lang'>

                    <div className='header_nav-right__lang-btns' onClick={() => setShowDropDown(!showDropDown)}>
                      <img src={langIcon} alt="language" />
                      {
                        lang === 'ru'
                        ? <span>РУ</span>
                        : <span>O’Z</span>
                      }
                    </div>

                    {
                    showDropDown && 
                    
                    <div className={`header_nav-right__lang-dropdown ${showDropDown && 'fadeIn'}`}>
                      <span onClick={() => changeLanguageHandler('uz')} >O’Z</span>
                      <span onClick={() => changeLanguageHandler('ru')} >РУ</span>
                    </div>
                    
                    }

                  </div>

                  
              </div>

          </nav>
      </div>
    </header>
  )
}

export default Header