// Import necessary types and components
import { Capsule } from '@/types';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { formatDate } from '@/lib/utils';

// Define the CardProps interface for the Card component
interface CardProps {
  capsule: Capsule;
}

// Card component displays information about a capsule and triggers a DetailsDialog
const Card = ({ capsule }: CardProps) => {
  return (
    // Dialog component to wrap the card content and trigger the DetailsDialog
    <Dialog>
      <DialogTrigger>
        {/* Card content */}
        <div className="text-gray-300 bg-gray-900 p-4 flex flex-col items-start space-y-1 rounded-xl cursor-pointer capitalize w-80 shadow-lg">
          {/* Capsule image */}
          <img
            src="/assets/images/spacex_capsule.png"
            alt=""
            className="w-full h-52 object-cover rounded-md"
          />
          {/* Capsule information */}
          <p>Name: {capsule.capsule_id}</p>
          <p>Status: {capsule.status}</p>
          <p>Type: {capsule.type}</p>
          {/* Display formatted launch date using the formatDate utility */}
          <p>
            Launch Date: {formatDate(capsule.original_launch).toLocaleString()}
          </p>
        </div>
      </DialogTrigger>
    </Dialog>
  );
};

// Export the Card component as the default export
export default Card;
