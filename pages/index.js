import Link from "next/link";

const Home = () => {
    return (
        <div className="h-100 w-full flex flex-col justify-center items-center">
            <h1 className="mb-5 text-3xl">نمایش کاربران</h1>
            <Link href={'/users'} class="text-white bg-blue-700 hover:!bg-blue-800 transition-all focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none cursor-pointer">نمایش</Link>
        </div>
    )
}

export default Home;