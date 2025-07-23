import Link from "next/link"

export async function getStaticProps(context) {

    const { params } = context
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const user = await res.json()

    return {
        props: {
            user
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    const paths = users.map(u => {
        return {
            params: { userId: `${u.id}` }}})
    return {
        paths,
        fallback: false
    }
}

const UserId = ({ user }) => {
    return (
        <div className="relative overflow-x-auto mt-20 mx-5">
            <Link href={'/users'}>
                <button className="px-4 py-1 my-3 me-4 bg-sky-600 hover:bg-sky-500 transition-all rounded-lg cursor-pointer">back</button>
            </Link>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            phone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            website
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                            {user.id}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
                        </td>
                        <td className="px-6 py-4">
                            {user.name}
                        </td>
                        <td className="px-6 py-4">
                            {user.username}
                        </td>
                        <td className="px-6 py-4">
                            {user.phone}
                        </td>
                        <td className="px-6 py-4">
                            {user.website}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default UserId;