// Import necessary components and utilities
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { formatDate } from '@/lib/utils';
import { Capsule } from '@/types';

// Define the DetailsDialogProps interface for the DetailsDialog component
interface DetailsDialogProps {
  capsule: Capsule;
}

// DetailsDialog component displays detailed information about a capsule
const DetailsDialog = ({ capsule }: DetailsDialogProps) => {
  return (
    // DialogContent component to contain the detailed information
    <DialogContent className="bg-dark text-light border-none h-[80%] w-[100%]">
      {/* DialogHeader component to contain the title and description */}
      <DialogHeader>
        {/* DialogTitle component displays the capsule serial and ID */}
        <DialogTitle className="capitalize mb-2">
          {capsule.capsule_serial} - {capsule.capsule_id}
        </DialogTitle>
        {/* DialogDescription component to contain various details */}
        <DialogDescription className="space-y-3 text-md font-medium text-gray-400">
          {/* Capsule image */}
          <img
            src="/assets/images/spacex_capsule.png"
            alt=""
            className="w-full h-52 object-cover rounded-md"
          />
          {/* Details section */}
          <p className="text-lg font-semibold">Details:</p>
          {capsule.details !== null && (
            <p>
              Desc:&nbsp;
              <span className="text-light">{capsule.details}.</span>
            </p>
          )}
          {/* Other details about the capsule */}
          <p>
            Total Landings:&nbsp;
            <span className="text-light">{capsule.landings}</span>{' '}
          </p>
          <p>
            Original Launch date:&nbsp;
            <span className="text-light">
              {formatDate(capsule.original_launch).toLocaleString()}
            </span>
          </p>
          <p>
            Reuse count:&nbsp;
            <span className="text-light">{capsule.reuse_count}</span>
          </p>
          <p>
            Status:&nbsp;
            <span className="text-light capitalize">{capsule.status}</span>
          </p>
          <p>
            Type:&nbsp;
            <span className="text-light">{capsule.type}</span>
          </p>
          <p>
            Total Missions:&nbsp;
            <span className="text-light">{capsule.missions.length}</span>
          </p>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
};

// Export the DetailsDialog component as the default export
export default DetailsDialog;
