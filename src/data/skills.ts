export type TSkills = {
  name: string;
  percent: number;
};

export const skills = {
  Web: [
    { name: "HTML", percent: 90 },
    { name: "CSS", percent: 90 },
    { name: "React", percent: 90 },
    { name: "Node JS", percent: 80 },
    { name: "Express JS", percent: 90 },
    { name: "MongoDB", percent: 90 },
    { name: "Redux", percent: 80 },
    { name: "TypeScript", percent: 85 },
    { name: "Mongoose", percent: 70 },
  ],
  Others: [
    { name: "WordPress", percent: 85 },
    { name: "Divi", percent: 90 },
    { name: "Elementor", percent: 95 },
    { name: "NoSQL", percent: 90 },
    { name: "PostgreSQL", percent: 85 },
    { name: "MySQL", percent: 80 },
  ],
  Programming: [
    { name: "JavaScript", percent: 90 },
    { name: "Python", percent: 50 },
  ],
  Tools: [
    { name: "Git", percent: 90 },
    { name: "Github", percent: 90 },
    { name: "VS Code", percent: 85 },
    { name: "Figma", percent: 80 },
    { name: "Photoshop", percent: 60 },
    { name: "Chrome Dev Tool", percent: 75 },
  ],
};
