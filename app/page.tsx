import Image from "next/image";
import Link from "next/link";

const data ={
  title: "Software Engineer",
  name: "Erick Gonzalez",
  action: "Check Projects"
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col my-auto" >

        <div className="mt-4"></div>

        <div className="
        flex 
        flex-wrap 
        items-center 
        justify-center">
          <Image
            className="m-2"
            src="/images/egse7.png"
            width={320}
            height={320}
            alt="bird" />

          <div className="font-bold m-2">
            <p className="text-3xl">{data.name}</p>
            <p className="text-4xl">{data.title}</p>
            <div className="flex">
              <Link href={"https://www.linkedin.com/in/egmp/"}>
                <Image
                  className="mr-2 mb-2"
                  src="/images/linkedin.png"
                  width={48}
                  height={48}
                  alt="linked in account" />
              </Link>

              <Link href={"https:/github.com/egmp7"}>
                <Image
                  src="/images/github.png"
                  width={48}
                  height={48}
                  alt="github account" />
              </Link>
            </div>

            <Link
              href="/projects">
              <div className="
              inline-block
              bg-blue-500
              hover:bg-blue-600
              text-xl
              text-white 
              py-6
              px-8
              w-full sm:w-auto 
              text-center
              rounded">
                {data.action}
              </div>
            </Link>
          </div>
          
        </div>

        <div className="mt-4"></div>
      </main>
    </>
  );
}
