import prisma from "@/db";
import { redirect } from "next/navigation";

export default function Home() {

    async function createPost(data: FormData) {
        "use server"

        // get data
        const title = data.get("title")?.valueOf();
        const content = data.get("content")?.valueOf();

        // validation
        if (typeof title !== "string" || title.length === 0) throw new Error("Invalid Title")
        if (typeof content !== "string" || title.length === 0) throw new Error("Invalid Content")

        // create post
        await prisma.post.create({ data: { title, content } })

        redirect("/")
    }


    return (<>

        <header className='flex justify-between items-center mb-4'>
            <h1 className='text-2x1'>New Post</h1>
        </header>

        <form action={createPost} className='flex gap-2 flex-col'>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
            </div>

            <div>
                <label htmlFor="content">Content:</label>
                <textarea
                    id="content"
                    name="content"
                    required
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                />
            </div>
            
            <div className='flex gap-1 justify-end'>
                <button
                    className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
                    type="submit">
                    Submit
                </button>
            </div>
        </form>

    </>)
}