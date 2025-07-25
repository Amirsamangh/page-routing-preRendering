import React, { useState } from 'react';
import { useRouter } from "next/navigation"

export async function getServerSideProps(context) {
  const { query } = context
  const { userId } = query
  const q = userId ? `?userId=${userId}` : ''
  const res = await fetch(`http://localhost:4000/posts${q}`)
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}

const Index = (props) => {
  const router = useRouter()
  const [filterPosts, setFilterPosts] = useState(props.posts)

  const handleFilterPosts = async (userId) => {
    const res = await fetch(`http://localhost:4000/posts?userId=${userId}`)
    const posts = await res.json()
    setFilterPosts(posts)
    router.push(`/fposts?userId=${userId}`, { shallow: true })
  }
  return (
    <div className='mt-4 px-4'>
      <h1 className="text-cyan-100">پست ها</h1>
      <button onClick={() => router.back()} className="px-4 py-1 my-3 me-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">back</button>
      <button onClick={() => handleFilterPosts(1)} className="px-4 py-1 my-3 me-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">filter</button>
      <br />
      <br />
      <ul className="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
        {filterPosts.map(p => (
          <li
            key={p.id}
            onClick={() => router.push(`/posts/${p.id}`)}
            className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 last:border-b-0 hover:bg-cyan-800 cursor-pointer'
          >
            <span className='mr-2'>{p.id}.</span> <span>{p.title}</span>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Index;
