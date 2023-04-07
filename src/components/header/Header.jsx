import React from 'react'
import { Link } from 'react-router-dom'
import shifoLogiImg from "../../assets/images/Logo.svg"
import c from "./Header.module.css"
import { RxHamburgerMenu } from "react-icons/rx"
import { FiX } from "react-icons/fi"

const Header = ({setIsCartActive}) => {
  return (
    <div className={c.header}>
        <div className={c.container}>
           <div className={c.header__inner__container}>
            <div className={c.header__container}>
                    <Link>
                        <img className={c.header__img} src={shifoLogiImg} alt="" />
                    </Link>
                    <nav className={c.header__nav}>
                        <ul className={c.header__list}>
                            <li className={c.header__item}>
                                <Link className={c.header__link}>Xizmatlar</Link>
                            </li>
                            <li className={c.header__item}>
                                <Link className={c.header__link}>Biz haqimizda</Link>
                            </li>
                            <li className={c.header__item}>
                                <Link className={c.header__link}>Shifokorlarimiz</Link>
                            </li>
                            <li className={c.header__item}>
                                <Link className={c.header__link}>Mijozlarimiz</Link>
                            </li>
                            <li className={c.header__item}>
                                <Link className={c.header__link}>Bosh sahifa</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={c.header__btn}>Kirish</button>

                    <button className={c.header__hamburger}>
                        <RxHamburgerMenu className={c.header__hamburger__icon} onClick={() => {setIsCartActive(true)}}/>
                        <FiX  className={c.header__fix__icon}/>
                    </button>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Header