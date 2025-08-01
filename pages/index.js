import { useRouter } from "next/navigation";

const Home = () => {
    const route = useRouter()
    return (
        <div className="flex flex-col my-10 mx-20 text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
            <div className="h-10 w-full flex justify-between px-10 items-center border hover:bg-cyan-800 transition-all cursor-pointer" onClick={()=>route.push('/posts')}>
                <h1 className="mb-2 text-md text-cyan-100"> پست ها</h1>
            </div>
            <div className="h-10 w-full flex justify-between px-10 items-center border hover:bg-cyan-800 transition-all cursor-pointer" onClick={()=>route.push('/fposts')}>
                <h1 className="mb-2 text-md text-cyan-100">پست های فیلتر شده</h1>
            </div>
            <div className="h-10 w-full flex justify-between px-10 items-center border hover:bg-cyan-800 transition-all cursor-pointer" onClick={()=>route.push('/users')}>
                <h1 className="mb-2 text-md text-cyan-100"> کاربر ها</h1>
            </div>
            <div className="h-10 w-full flex justify-between px-10 items-center border hover:bg-cyan-800 transition-all cursor-pointer" onClick={()=>route.push('/admin')}>
                <h1 className="mb-2 text-md text-cyan-100"> پنل ادمین</h1>
            </div>
        </div>
    )
}

export default Home;