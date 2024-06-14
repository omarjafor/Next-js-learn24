'use client'
import { usePathname, useSearchParams } from "next/navigation";


const page = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    console.log(pathName, searchParams.get('search'), searchParams.get('random'));
    return (
        <div>
            <h2 className="text-lg font-bold">Hello This is Cart Page</h2>
        </div>
    );
};

export default page;