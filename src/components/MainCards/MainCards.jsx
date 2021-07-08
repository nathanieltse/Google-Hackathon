import React from 'react'
import './MainCards.scss'
import chart1 from '../../asset/images/vulnerable_data.svg';
import chart2 from '../../asset/images/Default-State.jpg'

const MainCards = () => {
    return (
        <section className="mainCards">
                <article className="mainCards__card mainCards__card1">
                    <img className="image" src={chart1}></img>
                </article>
                <article className="mainCards__card">
                    <img  className="image1"src={chart2} alt='chart' />
                </article>
        </section>
    )
}

export default MainCards
