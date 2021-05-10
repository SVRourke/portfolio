import './App.scss';
import Header from './components/Header/Header'
import NavBar from './components/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'
import Techs from './components/Techs/Techs'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Techs />
    </>
  );
}

export default App;
