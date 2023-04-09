import './Header.scss'
import logo1 from '../../assets/icons/yarn-hook.png'
import logo2 from '../../assets/icons/crochet-hook-2.png'
import { Link } from 'react-router-dom'

function Header( {color} ) {

    function headerStyle() {
        if (color === 'Home') {
            return 'header header--homepage'
        }
        else if (color === 'US') {
            return 'header header--US'
        }
        else if (color === 'UK') {
            return 'header header--UK'
        }
        else if (color === 'favourite') {
            return 'header header--favourite'
        }
    }

    return (
        <section className={headerStyle(color)}>
            <Link to='/'>
                <div className='header__container'>
                    <img className='header__logo' src={logo1} alt='Crochet Corner Logo' />
                    <h1 className='header__title'>
                        Crochet Corner
                    </h1>
                    <img className='header__logo' src={logo2} alt='Crochet Corner Logo' />
                </div>
            </Link>
        </section>
    )
}

export default Header;