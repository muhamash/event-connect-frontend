import z from "zod";
import { eventSchema } from "./event.validation";



export type EventFormValues = z.infer<typeof eventSchema>;

export type CreateEventPayload = {
  title: string;
  category: string;
  description: string;
  image?: string | null;
  date: Date;
  time: string;
  location: string;
  maxParticipants: number;
  joiningFee?: number;
};

export interface GetEventsOptionsOnUserEvents {
  role: string;
  userId: string;
  page?: number;
  limit?: number;
  category?: string;
  status?: string;
  search?: string;
}
