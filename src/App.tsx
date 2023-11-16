import { useContext } from 'react';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import { AppContext } from './store/AppContext';
import Auth from './components/auth/Auth';
import Cards from './components/cards/Cards';

function App() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <div className="bg-dark h-screen w-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
      {/* Navigation Bar */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Image Slider */}
      <Slider />

      {/* Display Cards */}
      {isLoggedIn ? <Cards /> : <Auth />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
