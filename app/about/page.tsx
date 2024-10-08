import Image from "next/image";
import messages from "./messages";

export default function Home() {
  return (
    <>
      <h2 className="font-bold text-4xl mx-8 text-center mt-4">{messages.title}</h2>
      <div className="flex flex-wrap items-center justify-center">
        <Image
          className="m-2"
          src="/images/egse7.png"
          width={320}
          height={320}
          alt="bird" />
        <div className="m-4 text-lg text-justify sm:w-1/2">
          <p className="mb-4">{messages.descriptionOne}</p>
          <p className="mb-4">{messages.descriptionTwo}</p>
          <p className="mb-4">{messages.descriptionThree}</p>
        </div>
      </div>
    </>
  );
}
