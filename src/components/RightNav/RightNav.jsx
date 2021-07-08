import calender from '../../asset/icon/right-side-bar-icon/calender.svg'
import edit from '../../asset/icon/right-side-bar-icon/edit.svg'
import plus from '../../asset/icon/right-side-bar-icon/plus.svg'
import profile from '../../asset/icon/right-side-bar-icon/profile.svg'
import tip from '../../asset/icon/right-side-bar-icon/tip.svg'
import './RightNav.scss'

const LeftNav =() => {
    return (
        <nav>
            <ul className="right-nav">
                <li className="right-nav__item">
                    <img className="right-nav__item-icon" alt="calender icon" src={calender}/>
                </li>
                <li className="right-nav__item">
                    <img className="right-nav__item-icon" alt="tip icon" src={tip}/>
                </li>
                <li className="right-nav__item">
                    <img className="right-nav__item-icon" alt="edit icon" src={edit}/>
                </li>
                <li className="right-nav__item right-nav__item--last">
                    <img className="right-nav__item-icon" alt="profile icon" src={profile}/>
                </li>
                <li className="right-nav__item">
                    <img className="right-nav__item-icon " alt="plus icon" src={plus}/>
                </li>

                
            </ul>
        </nav>
    )
}

export default LeftNav