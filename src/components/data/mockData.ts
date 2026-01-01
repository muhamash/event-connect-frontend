// Centralized mock data for the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  location: string;
  interests: string[];
  joinedDate: string;
  isHost: boolean;
  rating: number;
  totalReviews: number;
  eventsHosted: number;
  eventsAttended: number;
}

export interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  address: string;
  attendees: number;
  maxAttendees: number;
  price: number;
  rating: number;
  hostId: string;
  host: string;
  hostAvatar: string;
  image: string;
  description: string;
  status: 'open' | 'full' | 'cancelled' | 'completed';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export const mockUsers: User[] = [
  {
    id: "user-1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    bio: "Music lover and event enthusiast. I love bringing people together for amazing experiences. When I'm not hosting jazz nights, you'll find me exploring new coffee shops or hiking trails.",
    location: "New York City",
    interests: ["Music", "Arts", "Food", "Networking"],
    joinedDate: "January 2024",
    isHost: true,
    rating: 4.8,
    totalReviews: 47,
    eventsHosted: 12,
    eventsAttended: 8,
  },
  {
    id: "user-2",
    name: "Michael Chen",
    email: "michael@example.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    bio: "Adventure seeker and outdoor enthusiast. Certified hiking guide with 10 years of experience leading groups through the most beautiful trails.",
    location: "Denver, CO",
    interests: ["Sports", "Outdoor", "Photography", "Travel"],
    joinedDate: "March 2024",
    isHost: true,
    rating: 4.9,
    totalReviews: 62,
    eventsHosted: 24,
    eventsAttended: 15,
  },
  {
    id: "user-3",
    name: "Emma Williams",
    email: "emma@example.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    bio: "Art curator and creative director. Passionate about connecting people through artistic experiences and supporting local artists.",
    location: "Los Angeles, CA",
    interests: ["Arts", "Culture", "Design", "Photography"],
    joinedDate: "February 2024",
    isHost: true,
    rating: 4.7,
    totalReviews: 38,
    eventsHosted: 8,
    eventsAttended: 22,
  },
  {
    id: "user-4",
    name: "David Park",
    email: "david@example.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    bio: "Foodie and culinary explorer. I believe great food brings people together. Join me for unforgettable food adventures!",
    location: "San Francisco, CA",
    interests: ["Food", "Cooking", "Travel", "Culture"],
    joinedDate: "April 2024",
    isHost: true,
    rating: 4.6,
    totalReviews: 29,
    eventsHosted: 6,
    eventsAttended: 18,
  },
];

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Summer Jazz Festival",
    category: "Music",
    date: "June 15, 2025",
    time: "7:00 PM",
    location: "Central Park",
    address: "Central Park, New York, NY 10024",
    attendees: 12,
    maxAttendees: 20,
    price: 25,
    rating: 4.8,
    hostId: "user-1",
    host: "Sarah Johnson",
    hostAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80",
    description: "Join us for an evening of smooth jazz under the stars. Live performances from local artists.",
    status: "open",
  },
  {
    id: 2,
    title: "Mountain Hiking Adventure",
    category: "Sports",
    date: "June 18, 2025",
    time: "6:00 AM",
    location: "Rocky Mountains",
    address: "Rocky Mountain National Park, CO",
    attendees: 8,
    maxAttendees: 15,
    price: 40,
    rating: 4.9,
    hostId: "user-2",
    host: "Michael Chen",
    hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    description: "A challenging but rewarding 10-mile hike with breathtaking views. All skill levels welcome.",
    status: "open",
  },
  {
    id: 3,
    title: "Art Gallery Opening",
    category: "Arts",
    date: "June 20, 2025",
    time: "5:00 PM",
    location: "Downtown Gallery",
    address: "123 Art Street, Los Angeles, CA",
    attendees: 15,
    maxAttendees: 30,
    price: 0,
    rating: 4.7,
    hostId: "user-3",
    host: "Emma Williams",
    hostAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    description: "Exclusive gallery opening featuring emerging local artists. Wine and appetizers included.",
    status: "open",
  },
  {
    id: 4,
    title: "Foodie Night Market",
    category: "Food",
    date: "June 22, 2025",
    time: "6:00 PM",
    location: "Harbor District",
    address: "Pier 39, San Francisco, CA",
    attendees: 20,
    maxAttendees: 25,
    price: 15,
    rating: 4.6,
    hostId: "user-4",
    host: "David Park",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    description: "Explore the best street food from around the world. Tasting portions included in price.",
    status: "open",
  },
  {
    id: 5,
    title: "Tech Startup Meetup",
    category: "Networking",
    date: "June 25, 2025",
    time: "7:00 PM",
    location: "Innovation Hub",
    address: "456 Tech Blvd, San Francisco, CA",
    attendees: 18,
    maxAttendees: 40,
    price: 0,
    rating: 4.8,
    hostId: "user-1",
    host: "Sarah Johnson",
    hostAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    description: "Network with founders, investors, and tech enthusiasts. Lightning talks and demo sessions.",
    status: "open",
  },
  {
    id: 6,
    title: "Beach Volleyball Tournament",
    category: "Sports",
    date: "June 28, 2025",
    time: "10:00 AM",
    location: "Sunset Beach",
    address: "Sunset Beach, CA 90742",
    attendees: 16,
    maxAttendees: 24,
    price: 20,
    rating: 4.9,
    hostId: "user-2",
    host: "Michael Chen",
    hostAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    description: "Fun tournament for all skill levels. Teams of 4. Prizes for top 3 teams!",
    status: "open",
  },
  {
    id: 7,
    title: "Wine Tasting Evening",
    category: "Food",
    date: "July 5, 2025",
    time: "6:30 PM",
    location: "Napa Valley Vineyard",
    address: "789 Wine Lane, Napa, CA",
    attendees: 10,
    maxAttendees: 20,
    price: 75,
    rating: 4.8,
    hostId: "user-4",
    host: "David Park",
    hostAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    description: "Premium wine tasting experience with expert sommelier. Cheese pairing included.",
    status: "open",
  },
  {
    id: 8,
    title: "Photography Walk",
    category: "Arts",
    date: "July 10, 2025",
    time: "5:00 AM",
    location: "Golden Gate Bridge",
    address: "Golden Gate Bridge, San Francisco, CA",
    attendees: 6,
    maxAttendees: 12,
    price: 30,
    rating: 4.7,
    hostId: "user-3",
    host: "Emma Williams",
    hostAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80",
    description: "Capture sunrise at the iconic bridge. Tips and techniques for all skill levels.",
    status: "open",
  },
];

export const mockReviews: Review[] = [
  {
    id: "review-1",
    userId: "user-5",
    userName: "Alex Thompson",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    rating: 5,
    comment: "Amazing experience! Sarah is an incredible host. The jazz festival was perfectly organized.",
    date: "May 2025",
  },
  {
    id: "review-2",
    userId: "user-6",
    userName: "Jessica Lee",
    userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
    comment: "Best hiking trip ever! Michael knows all the hidden spots and made sure everyone was safe.",
    date: "April 2025",
  },
  {
    id: "review-3",
    userId: "user-7",
    userName: "Robert Kim",
    userAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
    rating: 4,
    comment: "Great gallery opening. Emma introduced me to some amazing artists. Would attend again!",
    date: "March 2025",
  },
];

export const eventCategories = [
  "Music",
  "Sports",
  "Arts",
  "Food",
  "Networking",
  "Outdoor",
  "Gaming",
  "Culture",
  "Travel",
  "Technology",
];

export const interestOptions = [
  "Music",
  "Sports",
  "Arts",
  "Food",
  "Networking",
  "Outdoor",
  "Gaming",
  "Culture",
  "Travel",
  "Technology",
  "Photography",
  "Cooking",
  "Design",
  "Fitness",
  "Reading",
];
