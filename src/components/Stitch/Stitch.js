import './Stitch.scss';
import redHeart from '../../assets/icons/red-heart.png';
import noHeart from '../../assets/icons/empty-heart.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Stitch({ stitch, country, setSelectedStitch }) {

    const [favourite, setFavourite] = useState(false);

    let id = stitch.id

    function handleSelect() {
        setSelectedStitch(stitch)
    }

    function handleClick() {
        if (favourite === false) {
            setFavourite(true);
        }
        else {
            setFavourite(false);
        }
    }

    function favouriteChecker() {
        if (favourite === false) {
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