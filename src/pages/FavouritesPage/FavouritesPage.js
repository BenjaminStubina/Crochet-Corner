import './FavouritesPage.scss';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import FavouriteList from '../../components/FavouriteList/FavouriteList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function FavouritesPage({ setNeedUpdate, setSelectedStitch }) {
    
    const [favouriteStitches, setFavouriteStitches] = useState()
    const [render, setRender] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                let {data} = await axios.get("http://localhost:8080/");
                setFavouriteStitches(data.filter(stitch => stitch.favourite === 'true'))
        }
        catch {
            console.log("Error 404")
            }
        }
    
        fetchData();
    },[render])

    if (!favouriteStitches || favouriteStitches.length === 0) {
        return (
            <>
                <Header color='favourite'/>
                <section className='favourites'>
                    <Link to='/'>
                        <Button styling='Home' text='Homepage' />
                    </Link>
                    <h1 className='favourite__title'>
                        No stitches favourited yet!
                    </h1>
                </section>
                <Footer color='favourite'/>
            </>
        )
    }

    return (
        <>
            <Header color='favourite'/>
            <section className='favourites'>
                <Link to='/'>
                    <Button styling='Home' text='Homepage' />
                </Link>
            <div className='favourites__container'>
                <FavouriteList setRender={setRender} setSelectedStitch={setSelectedStitch} setNeedUpdate={setNeedUpdate} favouriteStitches={favouriteStitches} />
            </div>
            </section>
            <Footer color='favourite'/>
        </>
    )
}

export default FavouritesPage;