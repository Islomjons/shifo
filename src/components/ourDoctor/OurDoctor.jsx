import React from 'react'
import c from "./OurDoctor.module.css"
import facebook from "../../assets/images/facebook.svg"
import para from "../../assets/images/para.svg"
import bassketball from "../../assets/images/bassketball.svg"
import instagram from "../../assets/images/instagram.svg"
import ourDocturImg from "../../assets/images/outDoctorImg1.png"
import ourDocturImg1 from "../../assets/images/ourDoctorImg2.png"
import ourDocturImg2 from "../../assets/images/ourDoctorImg3.png"
import ourDocturImg3 from "../../assets/images/ourDoctorImg4.png"

const OurDoctor = () => {
  return (
    <div className={c.ourDoctor}>
        <div className={c.container}>
            <div className={c.ourDoctor__container}>
                <h5 className={c.ourDoctor__title}>Bizning doctorlar</h5>
                <p className={c.ourDoctor__text}>Bizning tajribali mutaxassislarimiz bilan uchrashing</p>
            </div>
            <ul className={c.ourDoctor__list}>
                <li className={c.ourDoctor__item}>
                    <img className={c.ourDoctor__imgss} src={ourDocturImg} alt="" />
                    <div className={c.ourDoctor__wrapper}>
                        <div className={c.ourDoctor__img__wrapper}>
                            <img className={c.ourDoctor__icons} src={facebook} alt="" />
                            <img className={c.ourDoctor__icons} src={para} alt="" />
                            <img className={c.ourDoctor__icons} src={bassketball} alt="" />
                            <img className={c.ourDoctor__icons} src={instagram} alt="" />
                        </div>
                        <h5 className={c.ourDoctor__name}>O’ktam aliyev</h5>
                        <p className={c.ourDoctor__professi}>андролог, репродуктолог</p>
                    </div>
                </li>
                <li className={c.ourDoctor__item}>
                    <img className={c.ourDoctor__imgss} src={ourDocturImg1} alt="" />
                    <div className={c.ourDoctor__wrapper}>
                        <div className={c.ourDoctor__img__wrapper}>
                            <img className={c.ourDoctor__icons} src={facebook} alt="" />
                            <img className={c.ourDoctor__icons} src={para} alt="" />
                            <img className={c.ourDoctor__icons} src={bassketball} alt="" />
                            <img className={c.ourDoctor__icons} src={instagram} alt="" />
                        </div>
                        <h5 className={c.ourDoctor__name}>Alijon shamsiyev</h5>
                        <p className={c.ourDoctor__professi}>Pediatric</p>
                    </div>
                </li>
                <li className={c.ourDoctor__item}>
                    <img className={c.ourDoctor__imgss} src={ourDocturImg2} alt="" />
                    <div className={c.ourDoctor__wrapper}>
                        <div className={c.ourDoctor__img__wrapper}>
                            <img className={c.ourDoctor__icons} src={facebook} alt="" />
                            <img className={c.ourDoctor__icons} src={para} alt="" />
                            <img className={c.ourDoctor__icons} src={bassketball} alt="" />
                            <img className={c.ourDoctor__icons} src={instagram} alt="" />
                        </div>
                        <h5 className={c.ourDoctor__name}>O’ktam aliyev</h5>
                        <p className={c.ourDoctor__professi}>Dentist </p>
                    </div>
                </li>
                <li className={c.ourDoctor__item}>
                    <img className={c.ourDoctor__imgss} src={ourDocturImg3} alt="" />
                    <div className={c.ourDoctor__wrapper}>
                        <div className={c.ourDoctor__img__wrapper}>
                            <img className={c.ourDoctor__icons} src={facebook} alt="" />
                            <img className={c.ourDoctor__icons} src={para} alt="" />
                            <img className={c.ourDoctor__icons} src={bassketball} alt="" />
                            <img className={c.ourDoctor__icons} src={instagram} alt="" />
                        </div>
                        <h5 className={c.ourDoctor__name}>Shoira Athamova</h5>
                        <p className={c.ourDoctor__professi}>Ophthalmology  </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default OurDoctor