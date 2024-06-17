import { redirect } from "next/navigation";


const page = () => {
    const userProfile = undefined;
    if(userProfile === null ) redirect('profile')
    return (
        <div>
            <h2 className="text-lg font-bold">Hello This is Account Page</h2>
        </div>
    );
};

export default page;