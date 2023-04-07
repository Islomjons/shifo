import React from 'react'
import c from "./Cards.module.css"

const Cards = () => {
  return (
    <div className={c.cards}>
        <div className={c.container}>
            <div className={c.cards__container}>
                <p className={c.cards__heading}>Bizning xizmatlarimiz</p>
                <p className={c.cards__text}>3 qadam bilan biz sizning sog'lig'ingizga g'amxo'rlik qilamiz</p>
            </div>
            <ul className={c.cards__list}>
                <li className={c.cards__item}>
                    <h4 className={c.cards__title}>sana</h4>
                    <p className={c.cards__description}>O’zizga maqul vaqtni tanlang</p>
                </li>
                <li className={c.cards__item}>
                    <h4 className={c.cards__title}>Sog’lk</h4>
                    <p className={c.cards__description}>sog’ligingizni tekshiring</p>
                </li>
                <li className={c.cards__item}>
                    <h4 className={c.cards__title}>Shifokor</h4>
                    <p className={c.cards__description}>Xoxlagan shifokoringizni tanlang</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Cards