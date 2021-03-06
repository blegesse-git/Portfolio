import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

import Portfolio from './components/Portfolio';
function App() {
  return (
    <>
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type: "circle",
              stroke: {
                width: 6,
                color: "#fff"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
