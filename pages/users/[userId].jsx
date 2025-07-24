import { useRouter } from "next/navigation";

export async function getServerSideProps(context) {
    const { params , req, res, query} = context
    // res.setHeader('Set-Cookie', [`page=${params.userId}`])
    // console.log(req.headers.cookie);
    console.log(query);
    const response = await fetch(`http://localhost:4000/users/${params.userId}`)
    const user = await response.json()
    return {
        props: {
            user,
        }
    }
}

const userId = ({ user }) => {

    const route = useRouter()

    return (
        <div className="relative overflow-x-auto mt-20 mx-5">
            <button onClick={() => route.back()} className="px-4 py-1 my-3 me-4 bg-sky-600 hover:bg-sky-500 transition-all rounded-lg cursor-pointer">back</button>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            username
                        </th>
                        <th scope="col" className="px-6 py-3">
                            email
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                            {user.id}
                        </td>
                        <td className="px-6 py-4">
                            {user.name}
                        </td>
                        <td className="px-6 py-4">
                            {user.username}
                        </td>
                        <td className="px-6 py-4">
                            {user.email}
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

export default userId;