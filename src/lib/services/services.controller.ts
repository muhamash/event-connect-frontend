"use server";

import cloudinary from "../config/cloudinary.config";

export const cloudinaryUpSingleImage = async ( file: string ) =>
{
    try
    {
        if ( !file )
        {
            return {
                success: false,
                message: "No file provided",
            };
        }

        const result = await cloudinary.uploader.upload( file, {
            folder: "eventConnect",
            use_filename: true,
            unique_filename: true,
            overwrite: false,
        } );

        return {
            success: true,
            url: result.secure_url,
        };
    } catch ( error: any )
    {
        return {
            success: false,
            message: error?.message || "Unknown upload error",
        };
    }
};