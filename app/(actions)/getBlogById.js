import prisma from "../libs/prismadb";

export default async function getBlogById(
    params
) {
    try {


        const { blogId, myApplicationId } = params;

        var blog
        if (blogId) {

            blog = await prisma.blog.findUnique({
                where: {
                    id: blogId
                },
                include: {
                    user: true
                }
            });
        }
        if (myApplicationId) {

            blog = await prisma.blog.findUnique({
                where: {
                    id: myApplicationId
                },
                include: {
                    user: true
                }
            });
        }

        if (!blog) {
            return null;
        }

        return {
            ...blog,
            createdAt: blog.createdAt.toISOString(),
            user: {
                ...blog.user,
                createdAt: blog.user.createdAt.toISOString(),
                updatedAt: blog.user.updatedAt.toISOString(),
                emailVerified:
                    blog.user.emailVerified?.toISOString() || null,
            }
        };
    } catch (error) {
        throw new Error(error);
    }

}