import { useRouter } from "next/navigation"

export default function Users({ users }) {
    const route = useRouter()
    return (
        <div className='mt-4 px-4'>
            <h1 className="text-cyan-100">لیست کاربران</h1>
            <button onClick={() => route.back()} className="px-4 py-1 my-3 me-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">back</button>
            <br />
            <br />
            <ul className="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
                {users.map(u => (
                    <li 
                    key={u.id} 
                    onClick={() => route.push(`/users/${u.id}`)} 
                    className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 last:border-b-0 hover:bg-cyan-800 cursor-pointer'>
                        <span className='mr-2'>{u.id}.</span> <span>{u.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://localhost:4000/users`)
    const users = await res.json()

    // Pass data to the page via props
    return { props: { users } }
}