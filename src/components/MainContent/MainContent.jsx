import React from 'react'
import MainCards from '../MainCards/MainCards'
import MainBottom from '../MainBottom/MainBottom'
import './MainContent.scss'

const MainContent = () => {
    return (
        <div className="MainContent">
            <MainCards />
            <MainBottom />
        </div>
    )
}

export default MainContent
