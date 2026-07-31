export type TrackType = 'SAC' | 'WIE' | 'YP' | 'SIGHT' | 'EXECOM';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  track: TrackType;
  institution: string;
  image: string;
  bio: string;
  email: string;
  linkedin?: string;
  github?: string;
  ieeeId?: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  category: 'Flagship' | 'Workshop' | 'Hackathon' | 'Webinar' | 'Conference';
  track: TrackType;
  date: string; // ISO date string
  time: string;
  location: string;
  venueType: 'In-Person' | 'Virtual' | 'Hybrid';
  studentBranch: string;
  description: string;
  image: string;
  registrationOpen: boolean;
  registrationLink?: string;
  speakers?: Array<{ name: string; title: string; image: string }>;
  agenda?: Array<{ time: string; session: string }>;
  highlights?: string[];
  attendeesCount?: number;
}

export interface StudentBranch {
  id: string;
  name: string;
  code: string;
  institution: string;
  district: 'Hubballi-Dharwad' | 'Belagavi' | 'Kalaburagi' | 'Vijayapura' | 'Uttara Kannada' | 'Davangere' | 'Ballari';
  counselor: string;
  chair: string;
  established: number;
  activeMembers: number;
  logo: string;
  website?: string;
  coordinates: { x: number; y: number }; // Percentage offset on SVG map
  rank: number;
  score: number;
  achievements: string[];
}

export interface CertificateData {
  id: string;
  recipientName: string;
  ieeeMemberId: string;
  eventName: string;
  role: 'Participant' | 'Winner' | 'Speaker' | 'Organizer' | 'Volunteer';
  issueDate: string;
  studentBranch: string;
  verified: boolean;
  qrCodeUrl?: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  category: 'Notice' | 'Funding' | 'Award' | 'Deadline';
  date: string;
  summary: string;
  content: string;
  important: boolean;
  link?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Grant' | 'Template' | 'Guideline' | 'Branding' | 'Reporting';
  targetAudience: 'Student Members' | 'SB Chairs' | 'Counselors' | 'Volunteers';
  fileType: 'PDF' | 'DOCX' | 'ZIP' | 'Link';
  fileSize?: string;
  downloadUrl: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: number;
  awardedBy: string;
  recipient: string;
  category: 'Global' | 'Region 10' | 'India Council' | 'Subsection';
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  eventName: string;
  date: string;
  category: 'Flagship' | 'Workshop' | 'Celebration' | 'Awards';
  imageUrl: string;
  caption: string;
}

export interface LeaderboardEntry {
  rank: number;
  branchName: string;
  district: string;
  eventsOrganized: number;
  memberGrowthPercentage: number;
  totalPoints: number;
  badge: string;
}
