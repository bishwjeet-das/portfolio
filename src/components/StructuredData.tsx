"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bishwjeet Das",
      jobTitle: "Software Developer",
      description: "B.Tech Information Technology student with a strong foundation in C++, Data Structures & Algorithms, and practical web development skills.",
      url: "https://www.linkedin.com/in/bishwjeetHitk",
      sameAs: [
        "https://www.linkedin.com/in/bishwjeetHitk"
      ],
      knowsAbout: [
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "HTML5",
        "CSS",
        "SQL",
        "SQLite",
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "DBMS",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
        "Git",
        "GitHub",
        "VS Code"
      ],
      affiliation: [],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

