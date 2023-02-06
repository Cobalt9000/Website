import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Nav from './Components/Nav';
import Sponsers from './Components/Sponsers';
import Tracks from './Components/Tracks';

function App() {

  const style = {
    'height': "100%",
    'padding': "2rem",
    'padding-top': "7.5rem",

    '@media only screen and (max-width : 1024px)': {
      padding: "7rem 1.5rem"
    },
    "box-sizing": "inherit"
  }

  return (
    <>
      <Nav />
      <div style={style}>
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
