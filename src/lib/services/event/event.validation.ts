import { z } from "zod";

export const eventSchema = z.object( {
    title: z.string().min( 3 ),
    category: z.string().min( 1 ),
    description: z.string().min( 10 ),

    image: z.string().nullable(),

    date: z.date( {
        message: "Event date is required",
    } ).refine( ( date ) =>
    {
        const today = new Date();
        today.setHours( 0, 0, 0, 0 );
        return date > today;
    }, { message: "Date must be in the future" } ),

    time: z.string().min( 1, "Time is required" ),
    location: z.string().min( 2 ),

    maxParticipants: z
        .number()
        .int()
        .min( 2, "Minimum 2 participants required" ),

    joiningFee: z
        .number()
        .min( 0, "Joining fee must be 0 or greater" ),
} );