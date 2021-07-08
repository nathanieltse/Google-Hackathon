
import dashboard from '../../asset/icon/side-bar-icon/dashboard.svg'
import status from '../../asset/icon/side-bar-icon/status.svg'


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
                    <img className="left-nav__item-icon" alt="status icon" src={status}/>
                    <p className="left-nav__item-text">Security Status</p>
                </li>
               
                
            </ul>
        </nav>
    )
}

export default LeftNav