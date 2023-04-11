import './Button.scss';
import FlagUS from '../../assets/icons/united-states.png';
import FlagUK from '../../assets/icons/united-kingdom.png';
import Favourite from '../../assets/icons/red-heart.png';
import Home from '../../assets/icons/home.png'

// Button logic is checking to see what styling is passed down as a prop to determine the colour and the button icon

function Button({ styling, text }) {
    
    function buttonStyle(){
        if (styling === 'US') {
            return 'button button--US';
        }
        else if (styling === 'UK') {
            return 'button button--UK';
        }
        else if (styling === 'Home') {
            return 'button button--home';
        }
        else {
            return 'button button--favourite';
        }
    }

    function buttonIcon(){
        if (styling === 'US') {
            return FlagUS;
        }
        else if (styling === 'UK') {
            return FlagUK;
        }
        else if (styling === 'Home') {
            return Home;
        }
        else {
            return Favourite;
        }
    }

    return (
        <button className={buttonStyle(styling)}>
            <p className='button__text'>{text}</p>
            <img className='button__icon' src={buttonIcon(styling)} alt='button icon' />
        </button>
    )
}

export default Button;