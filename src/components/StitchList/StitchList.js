import './StitchList.scss';
import Stitch from '../Stitch/Stitch';

function StitchList({ stitches, country, setSelectedStitch, setNeedUpdate }) {

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
        <section className='stitch-list'>
            {stitches.map((stitch) => {
                return (
                    <Stitch 
                    key={stitch.id}
                    setNeedUpdate={setNeedUpdate}
                    setSelectedStitch={setSelectedStitch}
                    stitch={stitch}
                    country={countryChecker(country)}
                    />
                )
            })}
        </section>
    )
}

export default StitchList;