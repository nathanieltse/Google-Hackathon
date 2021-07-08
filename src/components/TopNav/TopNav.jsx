import apps from '../../asset/icon/apps.svg'
import help from '../../asset/icon/help_outline.svg'
import settings from '../../asset/icon/settings.svg'
import google from '../../asset/icon/google.svg'
import avatar from '../../asset/icon/avatar.svg'
import './TopNav.scss'



const TopNav = () => {
    return (
        <nav className="top-nav">
            <div className="top-nav__left">
                <img src={google} className="top-nav__logo" alt="google icon"/>
                <h2 className="top-nav__page-name">Secure</h2>
            </div>
            <div className="top-nav__right">
                <img className="top-nav__icon" src={help} alt="help icon"/>
                <img className="top-nav__icon" src={settings} alt="setting icon"/>
                <img className="top-nav__icon" src={apps} alt="apps icon"/>
                <img className="top-nav__avatar" src={avatar} alt="apps icon"/>
            </div>

        </nav>
    )
}

export default TopNav