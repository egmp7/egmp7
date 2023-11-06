"use client"

type PostItemProps = {
    id: string,
    title: string,
    content: string | null,
    createdOn: Date,
    updatedOn: Date,
    deletePost: (id: string) => void
}

export default function PostItem({ id, title, content, createdOn, updatedOn, deletePost }: PostItemProps) {
    return <li className="bg-slate-700 list-none p-2 mb-2">
        <div>{title}</div>
        <div>Created On: {createdOn.toTimeString()} Updated On: {updatedOn.toTimeString()}</div>
        <div>{content}</div>
        <button onClick={e => deletePost(id)}>Delete</button>
    </li>
}