import React from 'react'
import c from "./AboutHealth.module.css"

const AboutHealth = () => {
  return (
    <div className={c.aboutHealth}>
        <div className={c.container}>
            <div className={c.aboutHealth__container}>
                <h3 className={c.aboutHealth__heading}>Sog'ligingiz haqida shifokorimiz bilan maslahatlashing</h3>
                <div className={c.aboutHealth__wrapper}>
                    <p className={c.aboutHealth__text}>biz eng yaxshi xizmatni taqdim etamiz.</p>
                    <button className={c.aboutHealth__btn}>Biz bilan bog’laning</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutHealth