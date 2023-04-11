import './Favourite.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import trashIcon from '../../assets/icons/trash.png'

function Favourite({ setRender, setNeedUpdate, setSelectedStitch, favouriteStitch }) {

    let id = favouriteStitch.id;

    function handleSelect() {
        setSelectedStitch(favouriteStitch)
    }

    // Handle click function will run an axios patch to update the stitch JSON to change the favourited from true to false
    // Function also updates state to re-render and refresh the axios calls on the above parents
    function handleClick() {

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
        updateFavourites();
        setNeedUpdate(Math.random());
        setRender(Math.random());
    }

    return (
        <article className='favourite'>
            <div className='favourite__container'>
                <Link className='favourite__inner-container' onClick={handleSelect} to={`/stitch/${id}`}>
                    <img className='favourite__symbol' src={favouriteStitch.diagram} alt='stitch symbol' />
                    <p className='favourite__text-name'>
                        US Name: {favouriteStitch.usName}
                    </p>
                    <p className='favourite__text-name'>
                        UK Name: {favouriteStitch.ukName}
                    </p>
                    <p className='favourite__text-code'>
                        US Code: {favouriteStitch.usCode}
                    </p>
                    <p className='favourite__text-code'>
                        UK Code: {favouriteStitch.ukCode}
                    </p>
                </Link>
                <img onClick={handleClick} className='favourite__trash' src={trashIcon} alt='trash icon' />
            </div>
        </article>
    )
}

export default Favourite;