import './UsPage.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import StitchList from '../../components/StitchList/StitchList';

function UsPage({ stitches }) {
    return (
        <>
            <Header color='US' />
            <section className='us'>
                <Link to='/'>
                    <Button styling='Home' text='Homepage' />
                </Link>
                <StitchList country='US' stitches={stitches} />
            </section>
            <Footer color='US' />
        </>
    )
}

export default UsPage;