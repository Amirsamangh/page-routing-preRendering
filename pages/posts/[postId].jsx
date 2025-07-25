import { useRouter } from "next/navigation"
export async function getStaticProps(context) {

    const { params } = context
    const res = await fetch(`http://localhost:4000/posts/${params.postId}`)
    const post = await res.json()

    return {
        props: {
            post
        },
        revalidate: 30
    }
}

export const getStaticPaths = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const posts = await res.json()
    // const paths = posts.map(u => {
    //     return {
    //         params: { postId: `${u.id}` }
    //     }
    // })
    return {
        paths: [
            { params: { postId: '1' } },
            { params: { postId: '2' } },
            { params: { postId: '3' } },
        ],
        fallback: 'blocking'
    }
}

const PostId = ({ post }) => {
const route = useRouter()

    return (
        <div className="relative overflow-x-auto mt-20 mx-5">
            <button onClick={() => route.back()} className="px-4 py-1 my-3 me-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">back</button>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            body
                        </th>
                        <th scope="col" className="px-6 py-3">
                            userId
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                        <td className="px-6 py-4">
                            {post.id}
                        </td>
                        <td className="px-6 py-4">
                            {post.title}
                        </td>
                        <td className="px-6 py-4">
                            {post.body}
                        </td>
                        <td className="px-6 py-4">
                            {post.userId}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default PostId;