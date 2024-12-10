import getBlogById from "@/app/(actions)/getBlogById";
import getCommentsByBlogID from "@/app/(actions)/getCommentsByBlogId";
import getCurrentUser from "@/app/(actions)/getCurrentUser";
import FetchComment from "@/components/slate/FetchComment";
import Slate from "@/components/slate/Slate";
import SlateComment from "@/components/slate/SlateComment";
import SlateParagraph from "@/components/slate/SlateParagraph";
import SlateTitle from "@/components/slate/SlateTitle";
import SlateWriterDetails from "@/components/slate/SlateWriterDetails";
import { IoBookOutline } from "react-icons/io5";

const Blog = async ({ params }) => {
    const blog = await getBlogById(params);
    const cheerio = require('cheerio');
    const currentUser = await getCurrentUser();
    const comments = await getCommentsByBlogID(params);

    // Function to extract text content from HTML using Cheerio
    const extractTextFromHTML = (htmlString) => {
        const $ = cheerio.load(htmlString);
        return $('body').text();
    };

    // Function to calculate the estimated reading time
    const calculateReadingTime = (text, wordsPerMinute) => {
        const words = text.trim().split(/\s+/);
        const wordCount = words.length;
        const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
        return readingTimeMinutes;
    };

    // Extract text content from HTML
    const textContent = extractTextFromHTML(blog.backparagraph);

    // Average reading speed in words per minute (adjust as needed)
    const wordsPerMinute = 250;

    // Calculate reading time
    const readingTimeMinutes = calculateReadingTime(textContent, wordsPerMinute);


    return (
        <div className="my-4 text-zinc-700 dark:text-zinc-100 flex flex-col items-center space-y-6">
            <Slate>
                <div className="flex flex-col items-center text-center space-y-5">
                    <SlateTitle text={blog.title}/>
                    <div className="flex items-center space-x-5 ">
                        <SlateWriterDetails className={"text-zinc-700 dark:text-zinc-100"} blog={blog}/>
                        <div className="flex items-center text-xs text-zinc-700 dark:text-zinc-100 md:text-sm space-x-2"><IoBookOutline size={20} /> <span>{`${readingTimeMinutes} minute(s) read`}</span></div>
                    </div>
                </div>
                <div className="w-full bg-transparent my-10 text-zinc-900 dark:text-zinc-100 text-justify" dangerouslySetInnerHTML={{ __html: blog.backparagraph }} />
                <SlateParagraph />
            </Slate>
            <SlateComment currentUser={currentUser} params={params}/>
            <FetchComment comments={comments}/>
        </div>
    )
};

export default Blog;