import React from 'react'
import "./Sidebar.css"
// import { FiX } from "react-icons/fi"
import { Link } from 'react-router-dom'

const Sidebar = ({isCartActive, setIsCartActive}) => {
  return (
    <div className={isCartActive === true ? "sidebar sidebaractive" : "sidebar"}>
        {/* <FiX onClick={() => {setIsCartActive(false)}} className="sidebar__icon"/> */}
        <div>
        <ul className="sidebar__list">
            <li className='sidebar__item'>
              <Link className='sidebar__link'>Xizmatlar</Link>
              <Link className='sidebar__link'>Biz haqimizda</Link>
              <Link className='sidebar__link'>Shifokorlarimiz</Link>
              <Link className='sidebar__link'>Mijozlarimiz</Link>
              <Link className='sidebar__link'>Bosh sahifa</Link>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar