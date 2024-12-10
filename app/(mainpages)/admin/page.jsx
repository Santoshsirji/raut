//Global Imports
import Image from "next/image";

//Local Imports
import getAllUsers from "@/app/(actions)/getAllUsers";
import Slate from "@/components/slate/Slate";
import Heading from "@/components/subjects/Heading";

const AdminPage = async () => {
    const users = await getAllUsers();
    return ( 
        <div className="
        flex
        flex-col
        pt-20
        px-2
        md:px-4
        lg:px-10
        ">
            <Slate>
                <Heading title={"Admin Page"}/>
                <div className="
                    flex 
                    flex-col
                    ">
                    <h2 
                        className="
                        font-semibold 
                        text-2xl 
                        underline">
                            List of Users:
                    </h2>
                    <span 
                        className="
                        text-muted-foreground
                        ">
                            Following are the list of users in your project!
                    </span>
                    <hr 
                        className="
                        mt-4 
                        mb-4 
                        border-zinc-900
                        " />
                    <div 
                         className="
                        flex 
                        border 
                        py-2 
                        rounded-xl 
                        bg-white 
                        space-x-2 
                        px-2">
                        <div 
                            className="
                            font-semibold
                         ">
                            SN.
                        </div>
                        <div 
                            className="
                            font-semibold 
                            px-10 
                            w-2/4">
                        Name
                        </div>
                        <div 
                        className="
                        w-2/5 
                        font-semibold
                        ">
                        Email
                        </div>
                    </div>
                    <div className="space-y-2">
                        {users?.map((user, index) => (
                            <div
                            key={user.id}
                            className="flex border px-2 py-1 rounded-xl items-center space-x-4 cursor-pointer hover:bg-sky-50 duration-200"
                            >
                                <div>
                                    {index+1}.
                                </div>
                                <Image src={user.image || '/bmlogo.png'}  width={80} height={80} className="rounded-full h-8 w-8 border"/>
                                <div className="w-2/5">{user.name}</div>
                                <div className="w-2/5">{user.email}</div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Slate>
        </div>
     );
}
 
export default AdminPage;