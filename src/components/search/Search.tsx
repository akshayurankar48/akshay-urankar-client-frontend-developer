// Import necessary components from the UI library and React
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useContext } from 'react';

// Import the AppContext and SearchBy type
import { AppContext } from '@/store/AppContext';
import { SearchBy } from '@/types';

// Search component for handling search functionality
const Search = () => {
  // Destructure values and functions from the AppContext
  const { searchTerm, searchBy, setSearchBy, handleSearch } =
    useContext(AppContext);

  return (
    // Container for search components
    <div className="flex items-center space-x-4 m-4 md:mx-10 md:-my-5">
      {/* Dropdown for selecting search category */}
      <div>
        <Select
          value={searchBy}
          onValueChange={(value: SearchBy) => setSearchBy(value)}
        >
          <SelectTrigger className="w-32 md:w-[180px] text-light bg-gray-900 border-none outline-none focus:ring-offset-gray-500">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="md:w-[180px] p-0 m-0 text-light bg-gray-900 border-none outline-none focus:ring-offset-gray-500">
            <SelectItem value="status">Status</SelectItem>
            <SelectItem value="original_launch">Original Launch</SelectItem>
            <SelectItem value="type">Type</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Input for entering search term */}
      <Input
        className="max-w-xs bg-gray-900 text-light border-none focus:ring-offset-gray-500 capitalize"
        placeholder={`Search by ${searchBy?.split('_').join(' ')}`}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

// Export the Search component as the default export
export default Search;
