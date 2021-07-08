import React from 'react'
import './MainCards.scss'
import chart1 from '../../asset/images/vulnerable_data.svg';
import chart2 from '../../asset/images/Default-State.jpg'

const MainCards = () => {
    return (
        <section className="mainCards">
                <article className="mainCards__card1">
                    <p>Most Vulnerable Data</p>
                    <img className="image" src={chart1} src='chart'></img>
                </article>
                <article className="mainCards__card2">
                    <img src={chart2} alt='chart' />
                </article>
        </section>
    )
}

export default MainCards
