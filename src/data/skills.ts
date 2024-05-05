export type TSkills = {
  name: string;
  percent: number;
};

export const skills = {
  Web: [
    { name: "React.js", percent: 90 },
    { name: "Next.js", percent: 90 },
    { name: "Node.js", percent: 80 },
    { name: "Express.js", percent: 90 },
    { name: "MongoDB", percent: 90 },
    { name: "Redux", percent: 80 },
    { name: "TypeScript", percent: 85 },
    { name: "Mongoose", percent: 80 },
    { name: "PostgreSQL", percent: 80 },
    { name: "Prisma", percent: 85 },
  ],
  Others: [
    { name: "WordPress", percent: 85 },
    { name: "Divi", percent: 90 },
    { name: "Elementor", percent: 95 },
    { name: "NoSQL", percent: 90 },
    { name: "MySQL", percent: 80 },
    { name: "RESTful APIs", percent: 80 },
    { name: "Responsive Web Design", percent: 80 },
    { name: "E-commerce Platforms", percent: 75 },
  ],
  Programming: [
    { name: "JavaScript", percent: 90 },
    { name: "Python", percent: 50 },
  ],
  Tools: [
    { name: "Git", percent: 90 },
    { name: "Github", percent: 90 },
    { name: "VS Code", percent: 85 },
    { name: "Postman", percent: 80 },
    { name: "npm/yarn", percent: 85 },
    { name: "Figma", percent: 75 },
    { name: "Photoshop", percent: 60 },
    { name: "Chrome Dev Tool", percent: 75 },
  ],
};
