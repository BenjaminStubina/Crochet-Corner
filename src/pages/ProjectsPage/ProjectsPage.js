import './ProjectsPage.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import WIP from '../../assets/icons/work-in-progress.png'

function ProjectsPage() {
    return (
        <>
            <Header color='Projects' />
            <section className='projects'>
                <h1 className='projects__text'>
                    Feature coming soon!
                </h1>
                <img className='projects__icon' src={WIP} alt='work in progress icon' />
            </section>
            <Footer color='Projects' />
        </>
    )
}

export default ProjectsPage;