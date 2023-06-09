import './UkPage.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StitchList from '../../components/StitchList/StitchList';

function UkPage({ stitches, setSelectedStitch, setNeedUpdate }) {
    return (
        <>
            <Header color='UK' />
            <section className='uk'>
                <Link to='/'>
                    <Button styling='Home' text='Homepage' />
                </Link>
                <StitchList country='UK' stitches={stitches} setNeedUpdate={setNeedUpdate} setSelectedStitch={setSelectedStitch} />
            </section>
            <Footer color='UK' />
        </>
    )
}

export default UkPage;