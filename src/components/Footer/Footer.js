import './Footer.scss';
import linkedin from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github-sign.png';


function Footer({ color }) {

    function footerStyle() {
        if (color === 'homepage') {
            return 'footer footer--homepage'
        }
        else if (color === 'US') {
            return 'footer footer--US'
        }
        else if (color === 'UK') {
            return 'footer footer--UK'
        }
        else if (color === 'favourite') {
            return 'footer footer--favourite'
        }
    }

    return (
        <div className={footerStyle(color)}>
            <h3 className='footer__title'>
                Contact:
            </h3>
            <p className='footer__text'>
                Benjamin Stubina
            </p>
            <p className='footer__text'>
                benjamin.stubina@gmail.com
            </p>
            <a className='footer__social-container' href='https://ca.linkedin.com/in/benjamin-stubina' target='_blank' rel="noreferrer">
                <p className='footer__text'>
                    linkedin.com/benjamin-stubina
                </p>
                <img className='footer__icon' src={linkedin} alt='LinkedIn icon' />
            </a>
            <a className='footer__social-container' href='https://www.github.com/benjaminstubina' target='_blank' rel="noreferrer">
                <p className='footer__text'>
                    github.com/benjaminstubina
                </p>
                <img className='footer__icon' src={github} alt='GitHub icon' />
            </a>
        </div>
    )
}

export default Footer;