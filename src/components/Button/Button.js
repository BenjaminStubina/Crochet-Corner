import './Button.scss';
import FlagUS from '../../assets/icons/united-states.png';
import FlagUK from '../../assets/icons/united-kingdom.png';
import Favourite from '../../assets/icons/red-heart.png';

function Button({ styling, text }) {
    
    function buttonStyle(){
        if (styling === 'US') {
            return 'button button--US';
        }
        else if (styling === 'UK') {
            return 'button button--UK';
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