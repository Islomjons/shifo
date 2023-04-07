import React from 'react'
import c from "./Hero.module.css"
import heroRightImg from "../../assets/images/herorighImg.png"

const Hero = () => {
  return (
    <div className={c.hero}>
        <div className={c.container}>
            <div className={c.hero__container}>
                <div className={c.hero__left}>
                    <h3 className={c.hero__left__heading}>Biz sizning sog'ligingiz haqida qayg'uramiz</h3>
                    <p className={c.hero__left__text}>Bizning professional shifokorimiz va zamonaviy jihozlarimiz bilan sog'lig'ingizni tekshiring</p>
                    <button className={c.hero__left__btn}>Hozir tekshiring</button>
                </div>
                <div className={c.hero__right}>
                    <img className={c.hero__right__img} src={heroRightImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero