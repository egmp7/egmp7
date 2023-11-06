import prisma from '@/db'
import PostItem from '@/components/PostItem';

export default async function Home() {

  const posts =  await prisma.post.findMany();

  async function deletePost(id:string){
    "use server"

    const post = await prisma.post.delete({where:{
      id:id
    }})

    console.log(post)
  }

  return (<>

    <h1>Prisma Post</h1>
    <div>{posts.map((post) => (
        <PostItem key={post.id} {...post} deletePost={deletePost} />
    ))}</div>

  </>)
}