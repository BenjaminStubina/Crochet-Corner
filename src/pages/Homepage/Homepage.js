import './Homepage.scss'
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Homepage() {
    return (
        <>
            <Header color='homepage' />
            <div className='homepage'>
                <h2 className='homepage__title'>
                    Welcome to the Crochet Corner!
                </h2>
                <p className='homepage__text'>
                    Crochet Corner is a hub for crochet enthusiast of all skill levels to learn about the different crochet stitchs.
                </p>
                <p className='homepage__text'>
                    Use the buttons below to navigate the application!
                </p>
                <Button styling='US' text='US Stitches' />
                <Button styling='UK' text='UK Stitches' />
                <Button styling='Favourite' text='Favourite Stitches' />
            </div>
            <Footer color='homepage' />
        </>
    )
}

export default Homepage;