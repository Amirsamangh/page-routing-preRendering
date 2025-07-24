import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

export async function getStaticProps() {
  const res = await fetch('http://localhost:4000/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
    revalidate: 10
  }
}

const Index = ({ posts }) => {

  const route = useRouter()

  return (
    <div className='mt-4 px-4'>
      <h1 className="text-cyan-100">پست ها</h1>
      <button onClick={() => route.back()} className="px-4 py-1 my-3 me-4 bg-cyan-500 hover:bg-cyan-400 transition-all rounded-lg cursor-pointer">back</button>
      <br />
      <br />
      <ul className="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-cyan-950 text-cyan-300">
        {posts.map(p => (
          <li
            key={p.id}
            onClick={() => route.push(`/posts/${p.id}`)}
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
