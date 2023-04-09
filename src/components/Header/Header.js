import './Header.scss'
import logo1 from '../../assets/icons/yarn-hook.png'
import logo2 from '../../assets/icons/crochet-hook-2.png'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo1} alt='Crochet Corner Logo' />
            <h1 className='header__title'>
                Crochet Corner
            </h1>
            <img className='header__logo' src={logo2} alt='Crochet Corner Logo' />
        </div>
    )
}

export default Header;