import React from 'react'
import MainCards from '../MainCards/MainCards'
import MainBottom from '../MainBottom/MainBottom'
import './MainContent.scss'

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
