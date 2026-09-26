export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  impact: string;
  founded?: string;
  achievements?: string[];
  technologies?: string[];
  statistics?: { label: string; value: string }[];
  mission?: string;
  website?: string;
}

export const projects: Project[] = [
  {
    id: "ecotrack-smart-e-waste-management",
    title: "EcoTrack — Smart E-Waste Management",
    description: "Developed a technology-driven solution for smart e-waste management, collaborating within a hackathon setting to address a real-world environmental challenge.",
    tags: ["Web Development", "Problem Solving", "Collaboration", "E-Waste Management"],
    impact: "Contributed to a practical software solution addressing critical environmental concerns.",
    mission: "Innovating sustainable solutions through technology to improve environmental practices.",
    achievements: [
      "Worked on a hackathon project focused on improving e-waste management through a technology-driven solution.",
      "Collaborated with the team to analyze a real-world problem and develop a practical software solution."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "SQL"],
    statistics: [
      { label: "Focus", value: "Environmental Impact" },
      { label: "Type", value: "Hackathon Project" }
    ],
    website: "",
  },
  {
    id: "hackathon-project-team-lead",
    title: "Hackathon Project — Team Lead",
    description: "Led a team to a Top 30 finalist position in a competitive hackathon, overseeing problem analysis, solution design, and backend implementation for a real-world software solution.",
    tags: ["Team Leadership", "Backend Development", "AI-Assisted Coding", "Problem Solving", "Software Implementation"],
    impact: "Successfully led a team to deliver a functional backend solution, achieving recognition as a Top 30 finalist.",
    mission: "Driving innovation and effective problem-solving through collaborative software development.",
    achievements: [
      "Led a team through problem analysis, solution design, development, and project implementation.",
      "Contributed to backend development using AI-assisted coding and problem-solving techniques.",
      "Worked on implementing backend functionality and integrating the solution to support the project's core requirements.",
      "Achieved Top 30 Finalist status in a competitive hackathon."
    ],
    technologies: ["C++", "JavaScript", "SQL", "Git", "GitHub"],
    statistics: [
      { label: "Achievement", value: "Top 30 Finalist" },
      { label: "Role", value: "Team Lead" }
    ],
    website: "",
  },
];
