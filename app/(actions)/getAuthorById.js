import prisma from "@/app/libs/prismadb";

export default async function getAuthorById(request){
    try {
        const author = await prisma.user.findUnique({
            where: {
                id: request
            }
        });
        return author;
    } catch (error) {
        console.error('Error finding author by ID:', error);
        throw error;
    }
}