import './Homepage.scss'
import Button from '../../components/Button/Button';

function Homepage() {
    return (
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
    )
}

export default Homepage;