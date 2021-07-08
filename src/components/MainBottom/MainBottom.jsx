import React from 'react'
import './MainBottom.scss'
import twoFactor from '../../asset/images/two-factor.svg'
import mobileLogin from '../../asset/images/mobile-login.svg'

const MainBottom = () => {
    return (
        <section className="mainBottom">
            <div className="mainBottom__container">
                <article className="mainBottom__card">
                    <img className="mainBottom__image" src={twoFactor} alt="two-factor" />
                    <p className="mainBottom__heading">Two Factor Authentication</p>
                    <p className="mainBottom__text">Having a second method of authorization adds an extra layer of security to your accounts.</p>
                    <div className="mainBottom__footer">
                        <p className="mainBottom__footer-text">Read More</p>
                    </div>
                </article>
                <article className="mainBottom__card">
                    <img className="mainBottom__image" src={mobileLogin} alt="two-factor" />
                    <p className="mainBottom__heading">Password Managers</p>
                    <p className="mainBottom__text">Reusing a password puts you at greater risk for having your infmoration compromised. Using a password manager can help keep you secure.</p>
                    <div className="mainBottom__footer">
                        <p className="mainBottom__footer-text">Read More</p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default MainBottom
