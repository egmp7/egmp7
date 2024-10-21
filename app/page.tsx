import Image from "next/image";
import Link from "next/link";
import UserLinks from "./components/UserLinks";

const messages = {
  title: "Software Engineer",
  name: "Erick Gonzalez",
  action: "My Projects"
}

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-center my-4">
      <Image
        className="m-2"
        src="/images/egse7.png"
        width={320}
        height={320}
        alt="bird" />

      <div className="font-bold m-2">
        <p className="text-3xl">{messages.name}</p>
        <p className="text-4xl">{messages.title}</p>
        <UserLinks />
        <Link
          href="/projects">
          <div className=" inline-block bg-blue-500 hover:bg-blue-600 text-xl text-white py-6 px-8 mt-4 w-full sm:w-auto text-center rounded">
            {messages.action}
          </div>
        </Link>
      </div>
    </main>
  );
}
