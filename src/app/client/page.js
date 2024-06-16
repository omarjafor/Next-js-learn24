'use client'
import Link from "next/link";
import { useEffect, useState } from "react"


export default function ClientDataFetching(){
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState([]);

    async function fetchListOfUsers(){
        try {
            setLoading(true);
            const apiResponse = await fetch('http://dummyjson.com/users');
            const result = await apiResponse.json();
            if(result?.users){
                setUser(result.users);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
            setUser([]);
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchListOfUsers();
    } , []);

    if(loading) return <h2 className="font-bold text-lg">Loading Users ..........! Please Wait.....</h2>

    return (
        <div className="text-center my-2 text-lg font-bold">
            <h2 className="text-3xl">Client Side Data Fetching</h2>
            <ul>
                {
                    user && user.length > 0 ?
                        user.map(usr =>
                            <li className="cursor-pointer">
                                <Link href={`server/${usr.id}`}>{usr.firstName} {usr.lastName}</Link>
                            </li>)
                        : null
                }
            </ul>
        </div>
    )
}