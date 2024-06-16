import Link from "next/link";


async function fetchListOfUsers() {
    try {

        const apiResponse = await fetch('http://dummyjson.com/users');
        const result = await apiResponse.json();
        return result.users;

    } catch (error) {
        throw new Error(error)
    }
}

export default async function ServertDataFetching() {
    const listOfUsers = await fetchListOfUsers();
    
    return (
        <div className="text-center my-2 text-lg font-bold">
            <h2 className="text-3xl">Server Side Data Fetching</h2>
            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ? 
                    listOfUsers.map(user => 
                    <li className="cursor-pointer">
                            <Link href={`server/${user.id}`}>{user.firstName} {user.lastName}</Link>
                    </li>)
                    : null
                }
            </ul>
        </div>
    )
}