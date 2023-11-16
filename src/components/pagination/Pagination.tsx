// Import the Button component from the UI library
import { Button } from '@/components/ui/button';

// Define the props interface for Pagination component
interface PaginationProps {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

// Pagination component displays page buttons for navigating through content
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  // Calculate the total number of pages based on totalPosts and postsPerPage
  const pages: number[] = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    // Container for pagination buttons
    <div className="flex items-center justify-center my-10">
      {/* Map through pages array to generate pagination buttons */}
      {pages?.map((page: number, index: number) => (
        // Button component for each page with dynamic styling
        <Button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 font-bold text-base mx-2 rounded-md cursor-pointer transition duration-300 ease-in-out bg-transparent text-light border border-light ${
            page === currentPage ? 'font-extrabold bg-gray-400 text-dark' : ''
          }`}
        >
          {/* Display the page number on the button */}
          {page}
        </Button>
      ))}
    </div>
  );
};

// Export the Pagination component as the default export
export default Pagination;
