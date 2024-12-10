import prisma from "../libs/prismadb";
export default async function getBlogs(
) {
    try {

        const blogs = await prisma.blog.findMany({
            take: 10,
            orderBy: {
                createdAt: 'desc'
            }
        })

        return blogs
    } catch (error) {
        throw new Error(error)
    }
}