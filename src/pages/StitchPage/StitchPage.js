import './StitchPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

function StitchPage({ stitch }) {

    if (!stitch) {
        return (
            <>
                <Header color='Stitch'/>
                <h1>
                    Loading...
                </h1>
                <Footer color='Stitch'/>
            </>
        )
    }

    return (
        <>
            <Header color='Stitch'/>
            <section className='stitch-container'>
                <Link to='/'>
                    <Button styling='Home' text='Homepage' />
                </Link>
                <div className='stitch-container__image-container'>
                    <img className='stitch-container__image' src={stitch.image} alt='pattern using stitch' />
                </div>
                <div className='stitch-container__details-container'>
                    <div className='stitch-container__inner-container'>
                        <p className='stitch-container__name'>
                            US Name: {stitch.usName}
                        </p>
                        <p className='stitch-container__name'>
                            UK Name: {stitch.ukName}
                        </p>
                    </div>
                    <div className='stitch-container__inner-container'>
                        <p className='stitch-container__name'>
                            US Code: {stitch.usCode}
                        </p>
                        <p className='stitch-container__name'>
                            UK Code: {stitch.ukCode}
                        </p>
                    </div>
                </div>
                <p className='stitch-container__description'>
                    {stitch.description}
                </p>
                <iframe
                    className='stitch-container__video-player'
                    src={stitch.tutorial}
                    frameBorder="0"
                    title='Embedded Youtube'
                />
            </section>
            <Footer color='Stitch'/>
        </>
    )
}

export default StitchPage;