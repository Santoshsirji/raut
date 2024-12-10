import bcryptjs from "bcryptjs";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            email,
            name,
            password
        } = body;

        // Validate incoming data (check for required fields, etc.)

        // Hash the password
        const hashedPassword = await bcryptjs.hash(password, 12);
        //Check if the user already exists 
        const previousUser = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (previousUser) {
            return NextResponse.error({ message: "User already exists" });
        }
        // Create a new user in the database
        const user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword
            }
        });

        // Return the user object in the response
        return NextResponse.json(user);
    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 });
    }
}