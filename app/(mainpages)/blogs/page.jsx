
import Slate from "@/components/slate/Slate";
import SlateButton from "@/components/slate/SlateButton";
import SlateParagraph from "@/components/slate/SlateParagraph";
import SlateTitle from "@/components/slate/SlateTitle";
import SlateWriterDetails from "@/components/slate/SlateWriterDetails";

import EmptyState from "@/components/EmptyState";
import getBlogs from "@/app/(actions)/getBlogs";
import Create from "@/components/slate/Create";
import getCurrentUser from "@/app/(actions)/getCurrentUser";


const Blog = async () => {

    const blogs = await getBlogs();

    const currentUser = await getCurrentUser();
    if(blogs.length === 0 || !blogs) {
        return (
            <div className="h-[80vh] w-full">
                {currentUser && (
                <Create/>
                )}
            <EmptyState/>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center gap-10">
                <Create currentUser={currentUser} />

            {blogs.map((item, index)=> (
                <div key={index} className="w-full">
                    <Slate>
                        <div className="space-y-3">
                            <SlateTitle text={item.title} />
                            <SlateWriterDetails blog={item} />
                            <SlateParagraph text={item.front} />
                            <SlateButton id={item.id} />
                        </div>
                    </Slate>
                </div>
            ))}
        </div>
    )
};

export default Blog;