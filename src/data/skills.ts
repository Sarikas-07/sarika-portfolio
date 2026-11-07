import type { SkillCategory } from "@/lib/types";

/**
 * SKILLS — grouped, no proficiency levels (the schema has none, and none are claimed).
 * Add or remove names inside any `skills` list.
 */
export const skillCategories: SkillCategory[] = [
  { id: "languages", title: "Programming and query languages", icon: "code", skills: ["Python", "SQL", "C#", "C", "C++", "Data Structures"] },
  { id: "app-dev", title: "Web and application development", icon: "globe", skills: ["Streamlit", "Windows Forms", "ADO.NET", "HTML", "CSS"] },
  { id: "databases", title: "Databases", icon: "database", skills: ["SQL Server", "SQLite", "DBMS", "CRUD Operations"] },
  {
    id: "ai-nlp-analytics",
    title: "AI, NLP and analytics",
    icon: "brain",
    skills: ["NLTK", "TextBlob", "NLP Preprocessing", "Sentiment Analysis", "Keyword Extraction", "TF-IDF", "Data Analysis", "Data Visualization", "Power BI", "AI Tools (Research, Planning, Design)"],
  },
  { id: "tools", title: "Developer tools and practices", icon: "tools", skills: ["Git", "GitHub", "Visual Studio", "VS Code", "Blue Desktop", "Software Testing", "Prompt Engineering"] },
];
