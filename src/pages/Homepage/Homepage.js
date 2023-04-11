import './Homepage.scss'
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Homepage() {
    return (
        <>
            <Header color='Home' />
            <div className='homepage'>
                <h2 className='homepage__title'>
                    Welcome to the Crochet Corner!
                </h2>
                <p className='homepage__text'>
                    Crochet Corner is a hub for crochet enthusiast of all skill levels to learn about the different crochet stitches.
                </p>
                <p className='homepage__text'>
                    Use the buttons below to navigate the application!
                </p>
                <Link to='/US'>
                    <Button styling='US' text='US Stitches' />
                </Link>
                <Link to='/UK'>
                    <Button styling='UK' text='UK Stitches' />
                </Link>
                <Link to='/favourites'>
                    <Button styling='Favourite' text='Favourite Stitches' />   
                </Link>
            </div>
            <Footer color='Home' />
        </>
    )
}

export default Homepage;