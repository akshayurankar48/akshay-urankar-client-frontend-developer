// Define the type for a mission
export type Mission = {
  name: string;
  flight: number;
};

// Define the type for a capsule
export type Capsule = {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch: string;
  original_launch_unix: number;
  missions: Mission[]; // An array of missions associated with the capsule
  landings: number;
  type: string;
  details: string;
  reuse_count: number;
};

// Define the type for a sidebar link
export type SidebarLink = {
  route: string;
  label: string;
};

// Define the type for a slide in a slider
export type Slide = {
  url: string;
  tag: string;
  desc: string;
};

// Define a union type for possible search criteria
export type SearchBy = 'status' | 'original_launch' | 'type';
