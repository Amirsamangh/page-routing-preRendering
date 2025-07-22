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
    <div className=' px-4'>
      <div>
        <ul className='list-disc px-4'>
          {posts.map(p => (
            <li key={p.id}>
              {p.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Index;
