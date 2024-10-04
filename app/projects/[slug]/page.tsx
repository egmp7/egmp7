import MediaSlider from "@/app/components/MediaSlider";
import fs from 'fs';
import path from 'path';

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
    summary: "A Slack Application that allows UoL BSc students to read and write reviews of modules they have taken. Our main objective is to assist students in their decision making; making it easier for them to choose modules that best suit their needs. Our application will be made available to anyone that has access to the UoL BSc Workspace on Slack, hence, it may also be used by any University Admin; perhaps, allowing them to improve various aspects of the program and modules, utilising our review app as a resource.",
    technologiesUsed: ["Deno", "TypeScript", "Slack API", "Web Standards"],
    role: "Developer Lead",
    keyFeatures: [
      "User authentication for UoL BSc Workspace members",
      "Module review and rating system",
      "Real-time updates on new reviews and responses",
      "Admin access for viewing and managing module feedback",
      "Search and filter options for finding specific modules",
      "Data visualization of module performance for students and university admin"
    ],
    challengesAndSolutions: "Handling real-time review updates was achieved using WebSockets, ensuring that students and admins receive instant feedback without refreshing the app. Additionally, ensuring secure access was critical, and OAuth was implemented for authentication tied to Slack Workspace members.",
    impact: "Improved module selection process for students, leading to better-informed decisions. University Admins gained valuable insights for program improvements, positively impacting overall student satisfaction.",
    links: ["https://github.com/example/project-1"],
    duration: "6 months (Jan 2022 - Jun 2022)",
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
  // // Automatically populate media arrays for all projects
  // const projectsFolder = path.normalize('./public/pro'); // Adjust to your actual path
  // Object.keys(projects).forEach((projectId) => {
  //   const key = projectId as keyof Projects; // Cast projectId to keyof Projects
  //   projects[key].media = generateMediaArray(projectId, projectsFolder);
  // });

  // Log the updated projects object
  console.log(JSON.stringify(projects, null, 2));

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

// Helper function to check if a file is an image
function isImageFile(filename: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
  return imageExtensions.includes(path.extname(filename).toLowerCase());
}

// Helper function to check if a file is a video
function isVideoFile(filename: string): boolean {
  const videoExtensions = ['.mp4', '.mov', '.avi', '.mkv'];
  return videoExtensions.includes(path.extname(filename).toLowerCase());
}

// Helper function to find a thumbnail for a video
function findThumbnailForVideo(dir: string, videoBaseName: string): string | null {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    // If it's a directory, search recursively
    if (stat.isDirectory()) {
      const found = findThumbnailForVideo(fullPath, videoBaseName);
      if (found) return found;
    }
    // Check if it's an image and matches the video base name
    else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      const baseName = path.basename(file, ext);

      // List of image extensions to match against
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

      if (baseName === videoBaseName && imageExtensions.includes(ext)) {
        // Return the relative path to the thumbnail
        return path.relative(process.cwd(), fullPath);
      }
    }
  }

  // Return null if no match found
  return null;
}


// Function to recursively generate the media array with videos first, followed by images
function generateMediaArray(projectId: string, projectsFolder: string): Media[] {
  const media: Media[] = [];

  const projectPath = path.join(projectsFolder, projectId);

  // Check if the project path exists
  if (!fs.existsSync(projectPath)) {
    console.error(`Project path does not exist: ${projectPath}`);
    return media; // Return an empty array if the project path is missing
  }

  // Recursive function to process files
  function processFiles(dir: string) {
    if (!fs.existsSync(dir)) {
      // Guard to ensure the directory exists before scanning
      console.warn(`Directory does not exist: ${dir}`);
      return;
    }

    const items = fs.readdirSync(dir);

    // Separate files and subdirectories
    const files = items.filter(item => fs.statSync(path.join(dir, item)).isFile());
    const subdirs = items.filter(item => fs.statSync(path.join(dir, item)).isDirectory());

    // Process videos first
    files.filter(isVideoFile).forEach((video) => {
      const videoBaseName = path.basename(video, path.extname(video));
      const videoFolder = path.relative(projectPath, dir);
      const thumbnail = findThumbnailForVideo(projectPath, videoBaseName);

      media.push({
        type: 'video',
        src: `/projects/${projectId}${videoFolder === '' ? '' : '/' + videoFolder}/${video}`,
        thumbnail: thumbnail ? `/projects/${projectId}/${path.relative(projectPath, thumbnail).replace(/\\/g, '/')}` : undefined
      });
    });

    // Then process images
    files.filter(isImageFile).forEach((image, index) => {
      const imageFolder = path.relative(projectPath, dir);

      media.push({
        type: 'image',
        src: `/projects/${projectId}${imageFolder === '' ? '' : '/' + imageFolder}/${image}`,
        alt: `Image ${index + 1}` // Assign alt text dynamically
      });
    });

    // Recurse into subdirectories
    subdirs.forEach((subdir) => {
      processFiles(path.join(dir, subdir));
    });
  }

  // Start recursive processing from the project path
  processFiles(projectPath);

  // Collect all the thumbnail src values
  const thumbnailSrcs = media
    .filter((media) => media.thumbnail)
    .map((media) => media.thumbnail);

  // Filter the media array to exclude items where the src matches a thumbnail
  return media.filter((media) => !thumbnailSrcs.includes(media.src));
}

export default ProjectPage;
