
import dashboard from '../../asset/icon/side-bar-icon/dashboard.svg'
import status from '../../asset/icon/side-bar-icon/status.svg'


import './LeftNav.scss'

const LeftNav = (props) => {
    return (
        <nav>
            <ul className="left-nav">
                <li className={props.state === "main" ? "left-nav__item left-nav__item--selected" : "left-nav__item"} onClick={() => props.clickHandle(1)}>
                    <img className="left-nav__item-icon" alt="dashboard icon" src={dashboard}/>
                    <p className={props.state === "main" ? "left-nav__item-text left-nav__item-text--selected" : "left-nav__item-text"}>My dashboard</p>
                </li>
                <li className={props.state === "notmain" ? "left-nav__item left-nav__item--selected" :"left-nav__item"} onClick={() => props.clickHandle(2)}>
                    <img className="left-nav__item-icon" alt="status icon" src={status}/>
                    <p className={props.state === "notmain" ? "left-nav__item-text left-nav__item-text--selected" : "left-nav__item-text"}>Security Status</p>
                </li>
               
                
            </ul>
        </nav>
    )
}

export default LeftNav