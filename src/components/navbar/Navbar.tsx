// Navbar component represents the website navigation bar
const Navbar = () => {
  return (
    // Navigation bar container with styling
    <nav className="flex items-center justify-between fixed z-50 w-full gap-5 bg-gray-900 p-6 sm:px-12">
      {/* Link to home with Spacex logo */}
      <a href="/">
        <img
          src="/assets/icons/spacex.svg"
          alt="Spacex Logo"
          className="w-40"
        />
      </a>

      {/* MobileNav component for mobile navigation */}
    </nav>
  );
};

// Export the Navbar component as the default export
export default Navbar;
