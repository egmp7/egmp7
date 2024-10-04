import MediaSlider from "@/app/components/MediaSlider";

// Define the project structure
interface Media {
  type: 'image' | 'video'; // Define media types
  src: string;
  alt?: string; // Optional alt text for images
  thumbnail?: string; // Optional thumbnail for videos
}

// Update the Project interface to include media
interface Project {
  title: string;
  summary: string;
  technologiesUsed: string[];
  role: string;
  keyFeatures: string[];
  challengesAndSolutions: string;
  impact: string;
  links: string[];
  duration: string;
  media: Media[]; // Add media property
}

// Define the projects type to only allow specific project keys
interface Projects {
  "1": Project;
  "2": Project;
  // Add more projects as needed
}

const projects: Projects = {
  "1": {
    title: "REPL Plus",
    summary: "A Slack-integrated application tailored for University of London BSc students, enabling them to submit, read, update, and delete reviews for modules they have taken. This application fosters collaboration by allowing students to share their feedback and insights with their peers, helping others make informed decisions when selecting modules. Built as a robust CRUD (Create, Read, Update, Delete) system, it leverages the Slack SDK to seamlessly receive and manage data from students directly within the Slack Workspace.",
    technologiesUsed: ["Deno", "TypeScript", "Slack API", "Web Standards"],
    role: "Developer Lead",
    keyFeatures: [
      "Comprehensive module review and rating system for students to share detailed feedback and ratings.",
      "Advanced search and filter options for easily finding and comparing specific modules.",
      "Full CRUD functionality (Create, Read, Update, Delete) for managing student reviews.",
      "Seamless Slack-based authentication for secure, hassle-free access for University of London BSc students."
    ],
    challengesAndSolutions: "One challenge I encountered was ordering the reviews, as the data lacked proper indexing. Currently, the application loads all the reviews from the database and then reorders them on the client side. While this approach works for now, I recognize that as the user base grows, this method will become inefficient and will need to be optimized with better indexing or server-side sorting. As the team leader, another challenge was maintaining clear communication and coordination with the team. To address this, we used Linear to create tickets, which helped us stay organized and ensure all requirements were clearly defined and tracked throughout the development process..",
    impact: "Improved module selection process for students, leading to better-informed decisions. University Admins gained valuable insights for program improvements, positively impacting overall student satisfaction.",
    links: ["https://github.com/uol-slack-plugin/repl-plus"],
    duration: "6 months (Oct 2023 - March 2024)",
    media: [ // Add media for project-1
      { type: 'video', src: '/projects/1/REPL-Plus.mp4', thumbnail: '/projects/1/REPL-Plus.png' },
      { type: 'image', src: '/projects/1/REPL-Plus-1.png', alt: 'Image 1' },
      { type: 'image', src: '/projects/1/REPL-Plus-2.png', alt: 'Image 2' },
      { type: 'image', src: '/projects/1/REPL-Plus-3.png', alt: 'Image 3' },
      { type: 'image', src: '/projects/1/REPL-Plus-4.png', alt: 'Image 4' },
      { type: 'image', src: '/projects/1/REPL-Plus-5.png', alt: 'Image 5' },
      { type: 'image', src: '/projects/1/user-flow-diagram.jpg', alt: 'Image 6' },
    ],
  },
  "2": {
    title: "Project Title",
    summary: "Created a mobile app for tracking fitness goals.",
    technologiesUsed: ["React Native", "Firebase"],
    role: "Team Lead",
    keyFeatures: ["Goal tracking", "Push notifications", "Data visualization"],
    challengesAndSolutions: "Optimized app performance for low-end devices.",
    impact: "Improved user engagement by 40%.",
    links: ["https://github.com/example/project-2"],
    duration: "4 months (Feb 2023 - May 2023)",
    media: [],
  },
  // Add more projects as needed
};

// Update the ProjectPage component
interface ProjectProps {
  params: {
    slug: keyof Projects; // Use keyof to ensure only valid project keys
  };
}


const ProjectPage = ({ params }: ProjectProps) => {

  const project = projects[params.slug]; // Now the slug will be properly typed

  if (!project) {
    return <div className="text-center text-xl">Project not found | 404</div>;
  }

  return (
    <div className="project-details">
      <h1 className="sm:mx-8 mx-4 mt-6 mb-4 text-4xl font-bold">{`${project.title}`}</h1>
      <MediaSlider media={project.media} /> {/* Use the project's media */}
      <div className="mt-4 p-4 text-lg sm:mx-4 text-justify">
        <p className="mb-4"><strong className="text-xl">Summary:</strong> {project.summary}</p>
        <p className="text-xl font-bold ">Technologies Used:</p>
        <ul className="list-disc pl-5 mb-4">
          {project.technologiesUsed.map((tech, index) => (
            <li key={index} className="text-lg">{tech}</li>
          ))}
        </ul>
        <p className="mb-4"><strong className="text-xl">Role/Contribution:</strong> {project.role}</p>
        <p className="mb-4"><strong className="text-xl">Key Features:</strong></p>
          {<ul className="list-disc pl-5 mb-4">
            {project.keyFeatures.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>}
        <p className="mb-4"><strong className="text-xl">Challenges and Solutions:</strong> {project.challengesAndSolutions}</p>
        <p className="mb-4"><strong className="text-xl">Impact/Results:</strong> {project.impact}</p>
        <p className="mb-4">
          <strong className="text-xl">Links:</strong>{' '}
          {project.links.map((link: string, index: number) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          ))}
        </p>
        <p className="mb-4"><strong className="text-xl">Duration and Timeline:</strong> {project.duration}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
