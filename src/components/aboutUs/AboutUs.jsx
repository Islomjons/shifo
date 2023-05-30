import React from 'react'
import c from "./AboutUs.module.css"

const AboutUs = () => {
  return (
    <div className={c.aboutUs}>
        <div className={c.container}>
            <div className={c.aboutUs__container}>
                <div className={c.aboutUs__left}>
                  <div className={c.aboutUs__wrapper}></div>
                </div>
                <div className={c.aboutUs__right}>
                    <p className={c.aboutUs__title}>Biz haqimizda</p>
                    <h4 className={c.aboutUs__description}>Biz sizga yordam berolamiz</h4>
                    <p className={c.aboutUs__text}>Biz sizning sog'lingizni saqlash xizmatlari va tibbiy yordam ko'rsatish faoliyatini, shuningdek, umumiy kasalxonaning barcha sharoitlarini, etnik kelib chiqishi  va chastotasi bo'lgan keng jamoatchilikda aks ettirilgan sharoitlarini  tavsiflaydi. </p>
                    <button className={c.aboutUs__btn}>biz haqimizda ko’proq</button>
                </div>
            </div>
        </div>

        <div className='hero'>
            <h2>Islomjon Mukhammadaliev</h2>
            <h2>I am 20 years old</h2>
        </div>
    </div>
  )
}

export default AboutUs