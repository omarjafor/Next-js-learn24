'use client'
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientDataFetching(){
    
    const { data, error, isLoading } = useSWR('http://dummyjson.com/users', fetcher)
    if (error) return <div className="font-bold text-lg">Failed to load</div>
    if(isLoading) return <h2 className="font-bold text-lg">Loading Users ..........! Please Wait.....</h2>

    return (
        <div className="text-center my-2 text-lg font-bold">
            <h2 className="text-3xl">Client Side Data Fetching</h2>
            <ul>
                {
                    data && data.users && data.users.length > 0 ?
                        data?.users.map(usr =>
                            <li className="cursor-pointer">
                                <Link href={`server/${usr.id}`}>{usr.firstName} {usr.lastName}</Link>
                            </li>)
                        : null
                }
            </ul>
        </div>
    )
}