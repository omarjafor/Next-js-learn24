

const page = ({params, searchParams}) => {
    console.log(params, searchParams.search);
    return (
        <div>
            <h2 className="text-lg font-bold">Hello This is Product Details Page</h2>
        </div>
    );
};

export default page;