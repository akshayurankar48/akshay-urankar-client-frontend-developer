// Footer component displays the website footer
const Footer = () => {
  return (
    // Footer container with styling
    <footer className="w-full flex items-center justify-center h-16 bg-gray-900 text-light uppercase text-center text-[10px] md:text-sm">
      {/* Text content with spacing */}
      <p className="space-x-3 md:space-x-8">
        {/* Spacex copyright */}
        <span className="text-gray-400">Spacex © 2023</span>
        {/* Privacy Policy link */}
        <span>Privacy Policy</span>
        {/* Suppliers link */}
        <span>Suppliers</span>
      </p>
    </footer>
  );
};

// Export the Footer component as the default export
export default Footer;
