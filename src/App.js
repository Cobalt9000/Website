import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Sponsers from './Components/Sponsers';
import Tracks from './Components/Tracks';

function App() {

  return (
    <>
      <Nav />
      <div className='conta'>
        <Landing />
        <Tracks />
        <FAQ />
        <Sponsers />
        <Footer />
      </div>
    </>
  );
}

export default App;
