// Import necessary components and data
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { SidebarLink } from '@/types';

// NavContent component displays links in the mobile navigation
const NavContent = () => {
  return (
    // Section container for mobile navigation links
    <section className="flex h-full flex-col gap-6 pt-6">
      {/* Map through sidebarLinks array to generate navigation links */}
      {sidebarLinks.map((item: SidebarLink) => {
        return (
          // SheetClose component for handling sheet closure on link click
          <SheetClose asChild key={item.label}>
            {/* Link element with href from sidebarLinks */}
            <a href={item.route}>
              {/* Link label */}
              <p>{item.label}</p>
            </a>
          </SheetClose>
        );
      })}
    </section>
  );
};

// MobileNav component represents the mobile navigation with a sheet
const MobileNav = () => {
  return (
    // Sheet component for creating a sheet-based mobile navigation
    <Sheet>
      {/* SheetTrigger component as a child to trigger the sheet */}
      <SheetTrigger asChild>
        {/* Hamburger menu icon */}
        <img
          src="/assets/icons/hamburger.svg"
          alt="menu"
          className="w-8 h-8 sm:hidden"
        />
      </SheetTrigger>
      {/* SheetContent component with right side placement and styling */}
      <SheetContent side="right" className="bg-dark text-light">
        {/* SheetClose component as a child for handling sheet closure */}
        <SheetClose asChild>
          {/* Render NavContent component inside SheetContent */}
          <NavContent />
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

// Export the MobileNav component as the default export
export default MobileNav;
