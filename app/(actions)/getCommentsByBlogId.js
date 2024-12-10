import prisma from "@/app/libs/prismadb";

export default async function getCommentsByBlogID(params) {

    const comments = await prisma.comment.findMany({
        where: {
            blogId: params.blogId,
        }
    });

    return comments;
}