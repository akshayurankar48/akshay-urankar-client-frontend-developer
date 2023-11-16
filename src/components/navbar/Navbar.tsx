// Import MobileNav component for mobile navigation
import { Button } from '../ui/button';
import MobileNav from './MobileNav';

// Navbar component represents the website navigation bar
const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const logout = () => {
    localStorage.removeItem('sessionToken');
    window.location.reload();
  };

  return (
    // Navigation bar container with styling
    <nav className="flex items-center justify-between fixed z-50 w-full gap-5 bg-gray-900 p-6 sm:px-12">
      {/* Link to home with Spacex logo */}
      <a href="/">
        <img src="/assets/spacex.svg" alt="Spacex Logo" className="w-40" />
      </a>

      {isLoggedIn && (
        <Button
          onClick={logout}
          className="bg-dark text-light w-24 font-bold text-lg"
        >
          Logout
        </Button>
      )}

      {/* MobileNav component for mobile navigation */}
      <MobileNav />
    </nav>
  );
};

// Export the Navbar component as the default export
export default Navbar;
