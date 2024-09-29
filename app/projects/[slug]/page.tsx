
// Define the project structure
interface Project {
  summary: string;
  technologiesUsed: string[];
  role: string;
  keyFeatures: string[];
  challengesAndSolutions: string;
  impact: string;
  links: string[];
  duration: string;
}

// Define the projects type to only allow specific project keys
interface Projects {
  "project-1": Project;
  "project-2": Project;
  // Add more projects as needed
}

const projects: Projects = {
  "project-1": {
    summary: "Developed a full-stack web application for managing tasks.",
    technologiesUsed: ["React", "Node.js", "Express", "MongoDB"],
    role: "Team Lead, Project Lead",
    keyFeatures: ["User authentication", "Task management", "Real-time updates"],
    challengesAndSolutions: "Handling real-time updates using WebSockets.",
    impact: "Increased productivity by 25% for the client.",
    links: ["https://github.com/example/project-1"],
    duration: "6 months (Jan 2022 - Jun 2022)",
  },
  "project-2": {
    summary: "Created a mobile app for tracking fitness goals.",
    technologiesUsed: ["React Native", "Firebase"],
    role: "Team Lead",
    keyFeatures: ["Goal tracking", "Push notifications", "Data visualization"],
    challengesAndSolutions: "Optimized app performance for low-end devices.",
    impact: "Improved user engagement by 40%.",
    links: ["https://github.com/example/project-2"],
    duration: "4 months (Feb 2023 - May 2023)",
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
      <h1>{`Project: ${params.slug}`}</h1>
      <p><strong>Summary:</strong> {project.summary}</p>
      <p><strong>Technologies Used:</strong> {project.technologiesUsed.join(', ')}</p>
      <p><strong>Role/Contribution:</strong> {project.role}</p>
      <p><strong>Key Features:</strong> {project.keyFeatures.join(', ')}</p>
      <p><strong>Challenges and Solutions:</strong> {project.challengesAndSolutions}</p>
      <p><strong>Impact/Results:</strong> {project.impact}</p>
      <p>
        <strong>Links:</strong>{' '}
        {project.links.map((link: string, index: number) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        ))}
      </p>
      <p><strong>Duration and Timeline:</strong> {project.duration}</p>
    </div>
  );
};

export default ProjectPage;
