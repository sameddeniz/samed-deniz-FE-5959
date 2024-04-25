import './sass/style.scss';
import GlobalNavbar from './sections/navbar.jsx';
import Hero from './sections/hero.jsx';
import SiteFeatures from './sections/features.jsx';
import Footer from './sections/footer.jsx';

function App() {
  return (
    <>
      <GlobalNavbar />
      <Hero />
      <SiteFeatures />
      <Footer />
    </>
  );
}

export default App;
