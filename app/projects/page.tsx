import Link from 'next/link';
import Image from 'next/image';

interface CardProps {
  imageSrc: string;
  title: string;
  summary: string;
  link: string;
}

const Projects: React.FC = () => {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center my-6">Projects</h1>
        <div className="flex flex-wrap justify-center">
          <Card 
            imageSrc="/projects/1/REPL-Plus-2.png"
            title="REPL Plus Review System"
            summary="A Slack-integrated application tailored for University of London BSc students"
            link="/projects/1" 
          />
          <Card 
            imageSrc="/projects/2/Seratium.png"
            title="Seratium DJ App"
            summary="Seratium is a DJ application capable of reading .mp3 and .wav files."
            link="/projects/2" 
          />
          <Card 
            imageSrc="/projects/3/lost-memories-0.png"
            title="Lost Memories VR Game"
            summary="Lost Memories is a horror game for Meta Quest 2, where players interact with various objects in a VR environment."
            link="/projects/3" 
          />
        </div>
      </div>
    );
  };
  
export default Projects;

const Card: React.FC<CardProps> = ({ imageSrc, title, summary, link }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <Image 
          className="w-full object-cover h-48"
          src={imageSrc} 
          alt={title} 
          width={300} // Set your desired width
          height={192} // Set your desired height
          layout="responsive" // Ensures the image scales correctly
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-base">{summary}</p>
        </div>
        <div className="px-6 pb-4">
          <Link href={link} passHref>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View More
            </button>
          </Link>
        </div>
      </div>
    );
  };
