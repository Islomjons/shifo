import React from 'react'
import c from "./Products.module.css"
import productsImg1 from "../../assets/images/productsImg1.png"
import productsImg2 from "../../assets/images/productsImg2.png"
import productStars from "../../assets/images/starts.svg"

const Products = () => {
  return (
    <div className={c.products}>
        <div className={c.container}>
            <div className={c.products__container}>
                <h5 className={c.products__heading}>Mijozlarimiz</h5>
                <p className={c.products__text}>Shifoxonamizga tashrif buyurganlarni fikrlari bilan tanishing</p>
            </div>
            <ul className={c.products__list}>
                <li className={c.products__item}>
                    <img className={c.products__img} src={productsImg1} alt="" />
                    <div className={c.products__wrapper}>
                        <h4 className={c.products__name}>O’ktam Aliyev</h4>
                        <p className={c.products__desc}>Men his qilgan xizmat juda yaxshi edi, xodimlar va shifokorlar samimiy va juda aniq ma'lumot berishdi.</p>
                        <div className={c.products__stars__wrapper}>
                            <img className={c.products__stars} src={productStars} alt="" />
                        </div>
                    </div>
                </li>
                <li className={c.products__item}>
                    <img className={c.products__img} src={productsImg2} alt="" />
                    <div className={c.products__wrapper}>
                        <h4 className={c.products__name}>Sanobar Ishmuhammedova</h4>
                        <p className={c.products__desc}>Men his qilgan xizmat juda yaxshi edi, xodimlar va shifokorlar samimiy va juda aniq ma'lumot berishdi.</p>
                        <div className={c.products__stars__wrapper}>
                            <img className={c.products__stars} src={productStars} alt="" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Products