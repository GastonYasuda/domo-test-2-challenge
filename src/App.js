import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, [])

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
