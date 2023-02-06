import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Sponsers from './Components/Sponsers';
import Tracks from './Components/Tracks';

function App() {

  const style =  {
    'height': "100%",
    'position' : "relative",
    'padding': "7.5rem 2rem", 
    '@media only screen and (max-width : 1024px)' :{ 
      padding : "7rem 1.5rem"
    }
  }

  return (
    <>
      <Nav />
      <div style={style}>
        <Tracks />
        <Sponsers />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
