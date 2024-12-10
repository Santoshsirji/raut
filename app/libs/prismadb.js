import { PrismaClient } from "@prisma/client"

// Optional global variable declaration (if using TypeScript)
// declare global {
//     var prisma: PrismaClient | undefined
// }

const client = globalThis.prisma || new PrismaClient()

// Initialize global Prisma client only in non-production environments
if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = client
}

export default client;