import apps from '../../asset/icon/apps.svg'
import help from '../../asset/icon/help_outline.svg'
import settings from '../../asset/icon/settings.svg'
import './TopNav.scss'



const TopNav = () => {
    return (
        <nav className="top-nav">
            <div className="top-nav__left">
                <p className="top-nav__logo">logo</p>
                <p className="top-nav__name">logo Name</p>
            </div>
            <div className="top-nav__right">
                <img className="top-nav__icon" src={help} alt="help icon"/>
                <img className="top-nav__icon" src={settings} alt="setting icon"/>
                <img className="top-nav__icon" src={apps} alt="apps icon"/>
            </div>

        </nav>
    )
}

export default TopNav