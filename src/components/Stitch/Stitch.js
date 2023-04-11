import './Stitch.scss';
import redHeart from '../../assets/icons/red-heart.png';
import noHeart from '../../assets/icons/empty-heart.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';    

function Stitch({ stitch, country, setSelectedStitch, setNeedUpdate }) {

    const [favourite, setFavourite] = useState(stitch.favourite);

    let id = stitch.id

    function handleSelect() {
        setSelectedStitch(stitch)
    }

    function handleClick() {

        if (stitch.favourite === 'false') {
            async function updateFavourites() {
                try {
                    await axios.patch("http://localhost:8080/", 
                    {
                        id: id,
                        favourite: "true",
                    })
                }
                catch {
                    console.log("Error updating favourites!")
                }
            }
            updateFavourites()
            setFavourite('true')
            setNeedUpdate(Math.random())
            favouriteChecker();
        }
        else {
            async function updateFavourites() {
                try {
                    await axios.patch("http://localhost:8080/", 
                    {
                        id: id,
                        favourite: "false",
                    })
                }
                catch {
                    console.log("Error updating favourites!")
                }
            }
            updateFavourites()
            setFavourite('false')
            setNeedUpdate(Math.random())
            favouriteChecker();
        }
    }

    function favouriteChecker() {
        if (favourite === 'false') {
            return noHeart;
        }
        else {
            return redHeart;
        }
    }

    function colorChecker() {
        if (country === 'US') {
            return 'stitch stitch--US';
        }
        else if (country === 'UK') {
            return 'stitch stitch--UK';
        }
        else {
            return 'stitch stitch--favourite';
        }
    }

    function stitchName() {
        if (country === 'US') {
            return stitch.usName;
        }
        else {
            return stitch.ukName;
        }
    }

    function stitchCode() {
        if (country === 'US') {
            return stitch.usCode;
        }
        else {
            return stitch.ukCode;
        }
    }

    return (
        <article className={colorChecker(country)}>
            <div className='stitch__container'>
                <Link onClick={handleSelect} to={`/stitch/${id}`}>
                    <img className='stitch__symbol' src={stitch.diagram} alt='stitch symbol' />
                    <p className='stitch__text-name'>
                        {stitchName(stitch)}
                    </p>
                    <p className='stitch__text-code'>
                        {stitchCode(stitch)}
                    </p>
                </Link>
                <img onClick={handleClick} className='stitch__heart' src={favouriteChecker()} alt='heart icon' />
            </div>
        </article>
    )
}

export default Stitch;