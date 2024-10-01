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
  "project-1": Project;
  "project-2": Project;
  // Add more projects as needed
}

const projects: Projects = {
  "project-1": {
    title: "Project Title",
    summary: "Developed a full-stack web application for managing tasks.",
    technologiesUsed: ["React", "Node.js", "Express", "MongoDB"],
    role: "Team Lead, Project Lead",
    keyFeatures: ["User authentication", "Task management", "Real-time updates Lorem ipsum odor amet, consectetuer adipiscing elit. Primis malesuada suspendisse orci aenean vivamus tempor. Ad ad mauris finibus; elementum ridiculus mi. Lacus tincidunt per, nec aliquet dis suscipit scelerisque ac. Elementum justo elementum elit suspendisse torquent. Vel elementum tellus nulla ligula penatibus turpis. Lorem ipsum odor amet, consectetuer adipiscing elit. Primis malesuada suspendisse orci aenean vivamus tempor. Ad ad mauris finibus; elementum ridiculus mi. Lacus tincidunt per, nec aliquet dis suscipit scelerisque ac. Elementum justo elementum elit suspendisse torquent. Vel elementum tellus nulla ligula penatibus turpis. Lorem ipsum odor amet, consectetuer adipiscing elit. Primis malesuada suspendisse orci aenean vivamus tempor. Ad ad mauris finibus; elementum ridiculus mi. Lacus tincidunt per, nec aliquet dis suscipit scelerisque ac. Elementum justo elementum elit suspendisse torquent. Vel elementum tellus nulla ligula penatibus turpis."],
    challengesAndSolutions: "Handling real-time updates using WebSockets.",
    impact: "Increased productivity by 25% for the client.",
    links: ["https://github.com/example/project-1"],
    duration: "6 months (Jan 2022 - Jun 2022)",
    media: [ // Add media for project-1
      { type: 'image', src: '/images/egse7.png', alt: 'Image 1' },
      { type: 'video', src: '/videos/2024-08-06 12-05-30.mov', thumbnail: '/images/egse7.png' },
      { type: 'image', src: '/images/egse7.png', alt: 'Image 2' },
      { type: 'image', src: '/images/me.jpg', alt: 'Me' },
      { type: 'image', src: '/images/you.jpg', alt: 'Me' },
    ],
  },
  "project-2": {
    title: "Project Title",
    summary: "Created a mobile app for tracking fitness goals.",
    technologiesUsed: ["React Native", "Firebase"],
    role: "Team Lead",
    keyFeatures: ["Goal tracking", "Push notifications", "Data visualization"],
    challengesAndSolutions: "Optimized app performance for low-end devices.",
    impact: "Improved user engagement by 40%.",
    links: ["https://github.com/example/project-2"],
    duration: "4 months (Feb 2023 - May 2023)",
    media: [ // Add media for project-2
      { type: 'image', src: '/images/egse7.png', alt: 'Image 3' },
      { type: 'image', src: '/images/egse7.png', alt: 'Image 4' },
    ],
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
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h1 className="sm:mx-8 mx-4 mt-6 mb-4 text-4xl font-bold ">{`${project.title}`}</h1>
      <MediaSlider media={project.media} /> {/* Use the project's media */}
      <div className="p-4 text-lg sm:mx-4">
        <p><strong className="text-xl">Summary:</strong> {project.summary}</p>
        <p className="text-xl font-bold">Technologies Used:</p>
        <ul className="list-disc pl-5">
          {project.technologiesUsed.map((tech, index) => (
            <li key={index} className="text-lg">{tech}</li>
          ))}
        </ul>
        <p><strong className="text-xl">Role/Contribution:</strong> {project.role}</p>
        <p><strong className="text-xl">Key Features:</strong> {project.keyFeatures.join(', ')}</p>
        <p><strong className="text-xl">Challenges and Solutions:</strong> {project.challengesAndSolutions}</p>
        <p><strong className="text-xl">Impact/Results:</strong> {project.impact}</p>
        <p>
          <strong className="text-xl">Links:</strong>{' '}
          {project.links.map((link: string, index: number) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          ))}
        </p>
        <p><strong className="text-xl">Duration and Timeline:</strong> {project.duration}</p>
      </div>
    </div>
  );
};

export default ProjectPage;
