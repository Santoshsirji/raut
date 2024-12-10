import getAuthorById from "@/app/(actions)/getAuthorById";
import Image from "next/image";

const SlateWriterDetails = async ({ blog, className }) => {
    function formatDate(dateString) {
        const date = new Date(dateString);

        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        return date.toLocaleDateString('en-US', options);
    }

    const readableDate = formatDate(blog.createdAt);

    const author = await getAuthorById(blog.userId);

    return (
        <div className="">
            <div className="flex space-x-1 items-center">
                <Image alt="Logo" src={author.image || '/bmlogo.png'} height={100} width={100} quality={30} className="border w-6 h-auto rounded-full shadow-sm" />
                <span className="text-xs md:text-md font-semibold">{author.name}</span>
                {author.email === 'santoshraut9862281653@gmail.com' && (<Image alt="Verified" src={'/verified.png'} height={40} width={40} className="w-3 h-3 md:w-4 md:h-4" />)}
                <span className="text-xs">{readableDate}</span>
            </div>
        </div>
    )
};

export default SlateWriterDetails;