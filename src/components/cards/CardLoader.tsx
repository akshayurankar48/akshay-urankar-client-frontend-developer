// Import the Skeleton component for displaying loading placeholders
import { Skeleton } from '@/components/ui/skeleton';

// CardLoader component displays a loading skeleton for a card
const CardLoader = () => {
  return (
    // Container for the loading skeleton
    <div className="flex flex-col space-y-1 items-start ">
      {/* Skeleton placeholders for the card image */}
      <Skeleton className="h-52 w-80 rounded-lg bg-gray-800" />
      {/* Skeleton placeholders for various text lines */}
      <Skeleton className="h-4 w-[150px] bg-gray-800" />
      <Skeleton className="h-4 w-[200px] bg-gray-800" />
      <Skeleton className="h-4 w-[150px] bg-gray-800" />
      <Skeleton className="h-4 w-[250px] bg-gray-800" />
    </div>
  );
};

// Export the CardLoader component as the default export
export default CardLoader;
