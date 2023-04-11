import './FavouriteList.scss';
import Favourite from '../Favourite/Favourite';

// Component maps over all of the favourited stitches
function FavouriteList({ setRender, favouriteStitches, setSelectedStitch, setNeedUpdate }) {
    return (
        <section className='favourite-list'>
            {favouriteStitches.map((favouriteStitch) => {
                return (
                    <Favourite 
                    key={favouriteStitch.id}
                    setNeedUpdate={setNeedUpdate}
                    setSelectedStitch={setSelectedStitch}
                    favouriteStitch={favouriteStitch}
                    setRender={setRender}
                    />
                )
            })}
        </section>
    )
}

export default FavouriteList;