import { useCallback, useContext, useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import CardLoader from './CardLoader';
import Card from './Card';
import { Capsule } from '@/types';
import useFetch from '@/hooks/useFetch';
import { AppContext } from '@/store/AppContext';
import { formatDate } from '@/lib/utils';

const Cards = () => {
  // Fetch capsule data using custom hook
  const { capsules, loading, error } = useFetch();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { searchTerm, searchBy } = useContext(AppContext);
  const [filteredCapsules, setFilteredCapsules] = useState<Capsule[]>([]);

  const postsPerPage = 8;

  // Calculate the index of the last and first post for pagination
  const lastPostIndex: number = currentPage * postsPerPage;
  const firstPostIndex: number = lastPostIndex - postsPerPage;
  const currentCapsules: Capsule[] = filteredCapsules.slice(
    firstPostIndex,
    lastPostIndex
  );

  // Function to filter capsules based on search term and criteria
  const filterResults = useCallback(() => {
    if (!searchTerm) {
      // If no search term, show all capsules
      setFilteredCapsules(capsules);
      return;
    }

    // Filter capsules based on searchBy field and search term
    const filtered = capsules?.filter((capsule: Capsule) => {
      if (
        searchBy === 'status' &&
        capsule.status?.toLowerCase().includes(searchTerm?.toLowerCase())
      ) {
        return true;
      } else if (
        searchBy === 'original_launch' &&
        formatDate(capsule.original_launch)
          ?.toLowerCase()
          .includes(searchTerm?.toLowerCase())
      ) {
        return true;
      } else if (
        searchBy === 'type' &&
        capsule.type?.toLowerCase().includes(searchTerm?.toLowerCase())
      ) {
        return true;
      }

      return false;
    });

    setFilteredCapsules(filtered);
  }, [searchTerm, searchBy, capsules]);

  // Use effect to trigger the filter when search criteria changes
  useEffect(() => {
    filterResults();
  }, [filterResults]);

  // Loading state
  if (loading && !error)
    return (
      <div className="flex items-center justify-center flex-wrap gap-10 w-full my-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <CardLoader key={index} />
        ))}
      </div>
    );

  // Error state
  if (error && !loading)
    return (
      <div className="flex flex-col items-center justify-center mb-10">
        <img className="object-contain" src="/assets/images/error.png" />
        <p className="text-2xl text-red-500 font-semibold text-center">
          Error fetching results. Please try again later
        </p>
      </div>
    );

  // No matching results state
  if (currentCapsules.length === 0 && !loading && !error) {
    return (
      <div className="flex flex-col items-center justify-center my-10">
        <img
          className="object-contain w-80 h-80"
          src="/assets/images/no_results.svg"
        />
        <p className="text-2xl text-light font-semibold">No matching results</p>
      </div>
    );
  }

  // Display the filtered capsules
  return (
    <>
      <main className="flex items-center flex-wrap gap-12 w-full m-10">
        {currentCapsules?.map((capsule: Capsule, index: number) => (
          <Card key={index} capsule={capsule} />
        ))}
      </main>
      <Pagination
        currentPage={currentPage}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        totalPosts={filteredCapsules.length}
      />
    </>
  );
};

export default Cards;
