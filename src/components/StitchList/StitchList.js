import './StitchList.scss';
import Stitch from '../Stitch/Stitch';

function StitchList({ stitches, country }) {

    if (!stitches) {
        return (
            <h1>
                Fetching Stiches!
            </h1>
        )
    }

    function countryChecker() {
        if (country === 'US') {
            return 'US';
        }
        else if (country === 'UK') {
            return 'UK';
        }
        else {
            return 'favourite';
        }
    }

    return (
        <section className='stich-list'>
            {stitches.map((stitch) => {
                return (
                    <Stitch 
                    stitch={stitch}
                    country={countryChecker(country)}
                    />
                )
            })}
        </section>
    )
}

export default StitchList;