import categories from '../../asset/icon/side-bar-icon/categories1.svg'
import drafts from '../../asset/icon/side-bar-icon/drafts1.svg'
import important from '../../asset/icon/side-bar-icon/important1.svg'
import dashboard from '../../asset/icon/side-bar-icon/dashboard.svg'
import more from '../../asset/icon/side-bar-icon/more1.svg'
import sent from '../../asset/icon/side-bar-icon/sent1.svg'
import news from '../../asset/icon/side-bar-icon/news1.svg'
import personal from '../../asset/icon/side-bar-icon/personal1.svg'
import starred from '../../asset/icon/side-bar-icon/starred1.svg'
import team from '../../asset/icon/side-bar-icon/team1.svg'
import work from '../../asset/icon/side-bar-icon/work1.svg'
import trash from '../../asset/icon/side-bar-icon/trash1.svg'
import snoozed from '../../asset/icon/side-bar-icon/snoozed1.svg'

import './LeftNav.scss'

const LeftNav =() => {
    return (
        <nav>
            <ul className="left-nav">
                <li className="left-nav__item left-nav__item--selected">
                    <img className="left-nav__item-icon" alt="dashboard icon" src={dashboard}/>
                    <p className="left-nav__item-text left-nav__item-text--selected">My dashboard</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="starred icon" src={starred}/>
                    <p className="left-nav__item-text">Starred</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="snoozed icon" src={snoozed}/>
                    <p className="left-nav__item-text">Snoozed</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="important icon" src={important}/>
                    <p className="left-nav__item-text">important</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="sent icon" src={sent}/>
                    <p className="left-nav__item-text">Sent</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="trash icon" src={trash}/>
                    <p className="left-nav__item-text">Trash</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="drafts icon" src={drafts}/>
                    <p className="left-nav__item-text">Drafts</p>
                    <p className="left-nav__item-number">14</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="categories icon" src={categories}/>
                    <p className="left-nav__item-text">Categories</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="team icon" src={team}/>
                    <p className="left-nav__item-text">Team</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="news icon" src={news}/>
                    <p className="left-nav__item-text">News</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="work icon" src={work}/>
                    <p className="left-nav__item-text">Work</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="personal icon" src={personal}/>
                    <p className="left-nav__item-text">Personal</p>
                </li>
                <li className="left-nav__item">
                    <img className="left-nav__item-icon" alt="more icon" src={more}/>
                    <p className="left-nav__item-text">More</p>
                </li>
                
            </ul>
        </nav>
    )
}

export default LeftNav