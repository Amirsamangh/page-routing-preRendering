import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

const Index = ({ posts }) => {

  console.log(posts);

  return (
    <div className='mt-4 px-4'>
      <Link href={'/'}>
        <button className="px-4 py-1 my-3 me-4 bg-sky-600 hover:bg-sky-500 transition-all rounded-lg cursor-pointer">back</button>
      </Link>
      <br />
      <br />
      <ul class="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-gray-300">
        {posts.map(p => (
          <li key={p.id} className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 last:border-b-0'>
            <Link href={`/posts/${p.id}`}> <span className='mr-2'>{p.id}.</span> <span>{p.title}</span></Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Index;
