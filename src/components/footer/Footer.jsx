import React from 'react'
import { Link } from 'react-router-dom'
import c from "./Footer.module.css"
import footerImg from "../../assets/images/Logo.svg"
import footerIcons from "../../assets/images/fuul.svg"

const Footer = () => {
  return (
    <div className={c.footer}>
        <div className={c.container}>
            <div className={c.footer__container}>
                <div className={c.footer__left}>
                    <Link>
                        <img className={c.footer__img} src={footerImg} alt="" />
                    </Link>
                    <p className={c.footer__left__text}>Bizning shifoxonamiz jamiyatning sifatli stomatologik tibbiy xizmatlarga bo'lgan ehtiyojidagi muammolarga javob berishga harakat qiladi.</p>
                    <div className={c.footer__img__wrapper}>
                        <img className={c.footer__icons} style={{cursor: "pointer"}} src={footerIcons} alt="" />
                    </div>
                </div>
                <div className={c.footer__right}>
                    <ul className={c.footer__right__list}>
                        <li className={c.footer__right__item}>
                            <h4 className={c.footer__right__heading}>Sahifalar</h4>
                            <Link className={c.footer__right__link}>Biz haqimizda</Link>
                        </li>
                        <li className={c.footer__right__item}>
                            <Link className={c.footer__right__link}>Bosh sahifa</Link>
                        </li>
                        <li className={c.footer__right__item}>
                            <Link className={c.footer__right__link}>Xizmatlarimiz</Link>
                        </li>
                    </ul>
                    <div className={c.footer__right__wrapper}>
                        <h4 className={c.footer__right__heading2}>Tibbiy tekshiruv vaucherini oling</h4>
                        <input className={c.footer__right__input} type="text" placeholder='Emailingizni kiritinng'/>
                        <button className={c.footer__right__btn}>Ulanish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer