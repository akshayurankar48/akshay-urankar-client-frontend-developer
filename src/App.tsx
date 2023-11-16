import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="bg-dark h-screen w-screen overflow-y-scroll overflow-x-hidden scrollbar-hide">
      {/* Navigation Bar */}
      <Navbar />

      {/* Image Slider */}
      <Slider />

      {/* Search Component */}

      {/* Display Cards */}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
