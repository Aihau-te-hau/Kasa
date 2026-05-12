import Header from '../../components/Header';
import './Home.scss'

function Home() {

    // Affichage des 6 premières locations
    const recentLocations = locationsData.slice(0, 6);

    return (
        <div className="page">
            <section id = "dashboard" className="page-header">
                < Header />
            </section>

            <section id = "locations" className="dashboard-section">
                <h1 className="home-title">
                    Chez vous, partout et ailleurs
                </h1>
                <div className="locations-grid">
                    {recentLocations.map((location) => (
                        <LocationCard key={location.id} location={location} />
                    ))}
                </div>
            </section>
            
            <section id="page-footer">
                <Footer />
            </section>                
        </div>
    );
}

export default Home;
