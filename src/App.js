import './App.scss';

import {
  Header,
  NavBar,
  About,
  Work,
  Techs,
  BlogSample,
  Contact,
  Footer
} from 'blocks'

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
      <Footer />
    </>
  );
}

export default App;
