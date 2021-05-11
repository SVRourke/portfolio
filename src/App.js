import './App.scss';
import Header from './components/Header/Header'
import NavBar from './components/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'
import Techs from './components/Techs/Techs'
import BlogSample from './components/BlogSample/BlogSample'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Work />
      <Techs />
      <BlogSample />
      <Contact />
    </>
  );
}

export default App;
