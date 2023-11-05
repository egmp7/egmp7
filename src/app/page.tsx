import prisma from '@/db'
import PostItem from '@/components/PostItem';

export default async function Home() {

  const posts =  await prisma.post.findMany();

  return (<>

    <h1>Prisma Post</h1>
    <div>{posts.map((post) => (
        <PostItem key={post.id} {...post}  />
    ))}</div>

  </>)
}