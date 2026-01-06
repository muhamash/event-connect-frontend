

export interface Event
{
  id: string;
  title: string;
  category: string;
  image: string;
  date: string; 
  time: string;
  location: string;
  attendees: number;
  participants: any[];
  maxParticipants: number;
  rating: number;
  joiningFee: number;
}