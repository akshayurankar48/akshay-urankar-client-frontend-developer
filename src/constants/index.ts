// Importing necessary types from the application
import { SidebarLink, Slide } from '@/types';

// Sidebar links for navigation
export const sidebarLinks: SidebarLink[] = [
  {
    route: '/',
    label: 'Mission',
  },
  {
    route: '/',
    label: 'Launches',
  },
  {
    route: '/',
    label: 'Updates',
  },
  {
    route: '/',
    label: 'Blogs',
  },
];

// Slides for the slider component
export const slides: Slide[] = [
  {
    url: '/assets/images/spacex_1.jpg',
    tag: 'Beyond Boundaries, Into the Cosmos.',
    desc: 'Exploring the uncharted, our rocket ships redefine the limits of human ambition.',
  },
  {
    url: '/assets/images/spacex_2.jpg',
    tag: "Sky's Not the Limit, It's the Beginning.",
    desc: 'Embark on a celestial journey with our state-of-the-art rocket ships, pushing the boundaries of space exploration.',
  },
  {
    url: '/assets/images/spacex_3.jpg',
    tag: 'Rocketing into Tomorrow, Today.',
    desc: 'Pioneering the future of space travel, our rocket ships fuse innovation with the thrill of cosmic discovery.',
  },
  {
    url: '/assets/images/spacex_4.jpg',
    tag: 'Elevate Your Vision, Ascend with Us.',
    desc: 'Our rocket ships are more than vessels; they are the conduits to a future where the stars are within reach.',
  },
];
