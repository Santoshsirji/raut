import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/(actions)/getCurrentUser";

export async function POST(
    request
) {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
        return NextResponse.error();
    }
    
    const body = await request.json();
    // console.log("I am here at current user")

    const {
        title,
        mainpara,
        content,
        createdAt,
    } = body;

    Object.keys(body).forEach((value) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const blog = await prisma.blog.create({
        data: {
            title,
            front: mainpara,
            backparagraph: content,
            userId: currentUser.id,
            createdAt
        }
    });

    return NextResponse.json(blog);
}



// Define the route handler for DELETE requests to delete vacancies
export async function DELETE(request) {
    try {
        // Extract the blog ID from the request body
        const { id } = await request.json();

        // Use Prisma to delete the blog with the extracted ID
        await prisma.blog.delete({
            where: {
                id: id,
            },
        });

        // Return a success response indicating that the blog was deleted
        return NextResponse.json({
            message: "blog deleted successfully",
        });
    } catch (error) {
        // If an error occurs during the deletion process, return an error response
        console.error("Error deleting blog:", error);
        return NextResponse.error("An error occurred while deleting the blog");
    }
}