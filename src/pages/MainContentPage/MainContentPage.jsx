import React from 'react'
import MainCards from '../../components/MainCards/MainCards'
import MainBottom from '../../components/MainBottom/MainBottom'
import './MainContentPage.scss'

const MainContent = () => {
    return (
        <div className="MainContent">
            <p className="MainContent__header">My Dashboard</p>
            <MainCards />
            <MainBottom />
        </div>
    )
}

export default MainContent
