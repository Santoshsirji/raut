import prisma from "../libs/prismadb";
export default async function getAllUsers(
) {
    try {

        const user = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return user
    } catch (error) {
        throw new Error(error)
    }
}