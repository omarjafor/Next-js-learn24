

async function fetchUserDetails(currentUserId){
    try {
        const apiResponse = await fetch(`http://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export default async function UserDetails({params}){
    console.log(params);
    const userDetails = await fetchUserDetails(params.details)
    console.log(userDetails);
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">User Details Page Here</h2>
            <img className="mx-auto" src={userDetails?.image}></img>
            <p className="text-lg font-bold">Name : {userDetails?.firstName} {userDetails?.lastName}</p>
            <p className="text-lg font-bold">Age : {userDetails?.age}</p>
            <p className="text-lg font-bold">Email : {userDetails?.email}</p>
            <p className="text-lg font-bold">Phone : {userDetails?.phone}</p>
            <p className="text-lg font-bold">Birth Date : {userDetails?.birthDate}</p>
        </div>
    )
}