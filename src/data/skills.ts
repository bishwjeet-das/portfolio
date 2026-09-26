export interface Skill {
  id: string;
  name: string;
  category: string;
}

export const skills: Skill[] = [
  { id: "lang-cpp", name: "C++", category: "Languages" },
  { id: "lang-java", name: "Java", category: "Languages" },
  { id: "lang-python", name: "Python", category: "Languages" },
  { id: "lang-js", name: "JavaScript", category: "Languages" },

  { id: "web-html5", name: "HTML5", category: "Web Technologies" },
  { id: "web-css", name: "CSS", category: "Web Technologies" },

  { id: "data-sql", name: "SQL", category: "Databases" },
  { id: "data-sqlite", name: "SQLite", category: "Databases" },

  { id: "core-dsa", name: "Data Structures & Algorithms", category: "Core Concepts" },
  { id: "core-oop", name: "Object-Oriented Programming (OOP)", category: "Core Concepts" },
  { id: "core-dbms", name: "DBMS", category: "Core Concepts" },
  { id: "core-cn", name: "Computer Networks", category: "Core Concepts" },

  { id: "tools-git", name: "Git", category: "Tools & Platforms" },
  { id: "tools-github", name: "GitHub", category: "Tools & Platforms" },
  { id: "tools-vscode", name: "VS Code", category: "Tools & Platforms" },
];

export const skillCategories = [
  "Languages",
  "Web Technologies",
  "Databases",
  "Core Concepts",
  "Tools & Platforms",
];
