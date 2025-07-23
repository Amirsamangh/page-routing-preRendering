import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  }
}

const Index = ({ users }) => {

  console.log(users);

  return (
    <div className='mt-4 px-4'>
      <Link href={'/'} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-red-900">back</Link>
      <br />
      <br />
      <ul class="w-full text-sm font-medium border border-gray-200 rounded-lg shadow-lg bg-gray-300">
        {users.map(u => (
          <li key={u.id} className='w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 last:border-b-0'>
            {u.name}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Index;
