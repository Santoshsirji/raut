import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/(actions)/getCurrentUser";


export async function POST(request) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.error("User not found");
        }


        const body = await request.json();
        const {
            paragraph,
            blogId
        } = body;



        const blog = await prisma.comment.create({
            data: {
                userId: currentUser.id,
                blogId,
                paragraph
            }
        });

        return NextResponse.json(blog);
    } catch (error) {
        return NextResponse.error("An error occurred while processing your request");
    }
}