import assets from "@/assets";

export const portfolios = [
  {
    name: "Pet Adoption Platform",
    type: "Full-Stack",
    description: [
      "Developed a comprehensive platform for pet adoption with advanced search and filtering options, enhancing the user experience and facilitating the adoption process.",
      "Implemented a secure authentication system with role-based access for users and administrators, ensuring data protection and streamlined management.",
      "Designed a responsive UI using Next.js, TypeScript, Tailwind CSS, and Next UI, providing an optimal experience across all devices.",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "NextUI",
      "Node",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Vercel",
    ],
    image: {
      cover: assets.portfolio.petAdoptionCover,
      landing: assets.portfolio.petAdoptionFull,
    },
    liveUrl: "https://pet-adoption-platform-sand.vercel.app",
    clientUrl: "https://github.com/Md-Mobassher/Pet_Adoption_Platform",
    serverUrl: "https://github.com/Md-Mobassher/Pet_Adoption_Server",
  },
  {
    name: "Bike Management System",
    type: "Full-stack",
    description: [
      "Created Bike Management System with real-time updates, CRUD, advanced filtering, secure JWT. Used RTK Query, Redux, ensuring responsive UI.",
      "Developed the Bike Management System, an open-source platform for bike inventory, featuring real-time updates, CRUD, and advanced filtering.",
      "Enhanced security with JWT for authentication and role-based access, supporting features for both buyers and sellers",
      "Utilized RTK Query and Redux for efficient data management and a mobile-responsive UI, ensuring smooth performance on all devices.",
    ],
    technology: [
      "React",
      "Redux",
      "TypeScript",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind",
      "Ant Design",
      "Vercel",
    ],
    image: {
      cover: assets.portfolio.bikeManageCover,
      landing: assets.portfolio.bikeManageFull,
    },
    liveUrl: "https://bike-management-client-alpha.vercel.app",
    clientUrl: "https://github.com/Md-Mobassher/Bike_management_client",
    serverUrl: "https://github.com/Md-Mobassher/Bike_management_server",
  },

  {
    name: "Ad-Doha Institute",
    type: "Institute Website (Full-Stack)",
    description: [
      "Ad-Doha is a dynamic web application built using Next.js, Tailwind CSS, and DaisyUI. It offers a seamless user experience with its responsive design and modern UI components.",
      "The website features various functionalities such as real-time updates, CRUD operations, advanced filtering, and secure JWT authentication, making it a comprehensive solution.",
      "Additionally, the website's integration of Next.js optimizes performance and enables server-side rendering for improved SEO and faster page loads.",
    ],
    technology: [
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind",
      "Material UI",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Vercel",
    ],
    image: {
      cover: assets.portfolio.dohaCover,
      landing: assets.portfolio.masfbdFull,
    },
    liveUrl: "https://ad-doha-institute.vercel.app",
    clientUrl: "https://github.com/Md-Mobassher/Ad-doha-Institute-Client",
    serverUrl: "https://github.com/Md-Mobassher/Ad-doha_Institute_Server",
  },
  {
    name: "Grocery Management System",
    type: "Full-Stack",
    description: [
      "A smart solution for effortless inventory management, ensuring a smoother and more organized grocery shopping experience.",
      "Developed a project where users can Sign up, Log in, order products, restock products, etc.",
      "Integrated Admin role, An admin can manage products, delete products, add products.",
      "Used firebase and JWT for authentication and hosting, and deploy the server to Heroku.",
    ],
    technology: [
      "React",
      "Redux",
      "TypeScript",
      "Node",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind",
      "Ant Design",
      "Firebase",
      "Vercel",
    ],
    image: {
      cover: assets.portfolio.groceryCover,
      landing: assets.portfolio.groceryFull,
    },
    liveUrl: "https://groca-grocery.web.app/",
    clientUrl: "https://github.com/Md-Mobassher/groca-grocery-client",
    serverUrl: "https://github.com/Md-Mobassher/groca-grocery-server",
  },
  {
    name: "Professor Abdullah al-Ahsan",
    type: "Portfolio website (Front-end)",
    description: [
      "Dynamic and efficient research foundation website powered by Next.js and TypeScript for seamless navigation and enhanced user experience.",
      "Leveraging Next.js framework with TypeScript to ensure robustness, scalability, and maintainability of the project codebase, facilitating seamless development and bug tracking.",
      "Implementing dynamic content management features to enable easy updating of research publications, events, and news, ensuring the website stays current and engaging for visitors.",
      "Prioritizing user experience through intuitive navigation, responsive design, and fast loading times, optimizing accessibility and engagement for both researchers and the public.",
    ],
    technology: ["Next.js", "TypeScript", "Tailwind", "Shadcn"],
    image: {
      cover: assets.portfolio.abdullahAhsanCover,
      landing: assets.portfolio.abdullahAhsanFull,
    },
    liveUrl: "https://abdullah-ahsan.vercel.app",
    clientUrl:
      "https://github.com/Md-Mobassher/Professor_Abdullah_Ahsan_Portfolio",
  },
  {
    name: "Project Management Dashboard",
    type: "Project Management (Front-end)",
    description: [
      "Developed a project management dashboard with robust task and project management features, enhancing productivity and organization.",
      "Implemented advanced state management with Zustand and React Query, ensuring efficient data fetching, state handling, and caching.",
      "Designed a responsive and interactive UI using Next.js, Ant Design, and Tailwind CSS, providing an intuitive user experience across all devices.",
    ],
    technology: [
      "Next.js",
      "Zustand",
      "React Query",
      "Ant Design",
      "Tailwind CSS",
      "Vercel",
    ],
    image: {
      cover: assets.portfolio.projectCover,
      landing: assets.portfolio.projectFull,
    },
    liveUrl: "https://project-management-dashboard-nu.vercel.app",
    clientUrl: "https://github.com/Md-Mobassher/project-management-dashboard",
  },
  {
    name: "MASFBD",
    type: "Charity Foundation (WordPress)",
    description: [
      "Developed a Dawah Institute website using Wordpress, Astra theme, Elementor.",
    ],
    technology: ["Wordpress", "Elementor"],
    image: {
      cover: assets.portfolio.masfbdCover,
      landing: assets.portfolio.masfbdFull,
    },
    liveUrl: "https://masfbd.com",
  },
  {
    name: "Save Humanity Trust",
    type: "Charity Website (WordPress)",
    description: ["Developed a Charity website using Wordpress, Elementor."],
    technology: ["Wordpress", "Elementor"],
    image: {
      cover: assets.portfolio.saveHumanityCover,
      landing: assets.portfolio.saveHumanityFull,
    },
    liveUrl: "https://savehumanitytrust.org",
  },
  {
    name: "MM IT Solution",
    type: "IT Service (WordPress)",
    description: ["Developed an IT website using Wordpress, Elementor."],
    technology: ["Wordpress", "Elementor"],
    image: {
      cover: assets.portfolio.mmitCover,
      landing: assets.portfolio.mmitFull,
    },
    liveUrl: "https://mmitsolution.com",
  },
  {
    name: "IRDF Bangladesh",
    type: "Charity Foundation (WordPress)",
    description: [
      "Developed Charity foundation website using WordPress with Divi theme.",
    ],
    technology: ["WordPress", "Divi", "Divi Builder"],
    image: {
      cover: assets.portfolio.irdfCover,
      landing: assets.portfolio.irdfFull,
    },
    liveUrl: "https://irdfbd.com",
  },
  {
    name: "SAHANU Trust",
    type: "University Trust (WordPress)",
    description: [
      "Developed a University Trust website using Wordpress, Phlox theme, Elementor.",
    ],
    technology: ["Wordpress", "Elementor", "Phlox Theme"],
    image: {
      cover: assets.portfolio.sahanutrustCover,
      landing: assets.portfolio.sahanutrustFull,
    },
    liveUrl: "https://sahanutrust.org",
  },
  {
    name: "NGIT Research Foundation",
    type: "Research Foundation (Front-end)",
    description: [
      "Dynamic and efficient research foundation website powered by Next.js and TypeScript for seamless navigation and enhanced user experience.",
      "Leveraging Next.js framework with TypeScript to ensure robustness, scalability, and maintainability of the project codebase, facilitating seamless development and bug tracking.",
      "Implementing dynamic content management features to enable easy updating of research publications, events, and news, ensuring the website stays current and engaging for visitors.",
      "Prioritizing user experience through intuitive navigation, responsive design, and fast loading times, optimizing accessibility and engagement for both researchers and the public.",
    ],
    technology: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    image: {
      cover: assets.portfolio.ngitCover,
      landing: assets.portfolio.ngitFull,
    },
    liveUrl: "https://ngit-research-foundation.vercel.app",
    clientUrl:
      "https://github.com/Md-Mobassher/ngit-research-foundation-client",
  },
  {
    name: "Uifry Responsive App",
    type: "Landing Page (Front-end)",
    description: [],
    technology: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    image: {
      cover: assets.portfolio.uifryCover,
      landing: assets.portfolio.uifryFull,
    },
    liveUrl: "https://uifry-nine-amber.vercel.app",
    clientUrl: "https://github.com/Md-Mobassher/Uifry",
  },
  {
    name: "Mobile App Bootstrap",
    type: "Landing Page (Front-end)",
    description: [
      "Developed a website using Html, CSS, Bootstrap. It is a front-end project. Backend is not included.",
    ],
    technology: ["HTML", "CSS", "Bootstrap"],
    image: {
      cover: assets.portfolio.mobileCover,
      landing: assets.portfolio.mobileFull,
    },
    liveUrl: "https://mobile-app-mobassher.netlify.app/",
    clientUrl: "https://github.com/Md-Mobassher/mobile-app",
  },

  {
    name: "Watts Basketball",
    type: "Landing Page (Front-end)",
    description: [
      "Dive into the basketball world with watts-basketball, a dynamic React JS and Tailwind CSS project offering an immersive experience with its standout design and user-friendly features.",
    ],
    technology: ["React", "Tailwind", "Netlify"],
    image: {
      cover: assets.portfolio.wattsCover,
      landing: assets.portfolio.wattsFull,
    },
    liveUrl: "https://wattsbasketball.netlify.app",
    clientUrl: "https://github.com/Md-Mobassher/wattsbasketball",
  },
  {
    name: "Outrival Media Tailwind",
    type: "Landing Page (Front-end)",
    description: [
      "Developed a website using Html, CSS, Tailwind CSS and DaisyUI. Backend is not included now.",
    ],
    technology: ["HTML", "CSS", "Tailwind", "DaisyUI"],
    image: {
      cover: assets.portfolio.mediaCover,
      landing: assets.portfolio.mediaFull,
    },
    liveUrl: "https://outrival-media-tailwind.netlify.app/",
    clientUrl: "https://github.com/Md-Mobassher/Outrival-media-tailwind",
  },
  {
    name: "Influencer-gear",
    type: "Landing Page (Front-end)",
    description: [
      "This is an HTML and CSS Landing Page. Only front-end design was added here. There is no functionality added to this project now.",
    ],
    technology: ["HTML", "CSS"],
    image: {
      cover: assets.portfolio.influencerCover,
      landing: assets.portfolio.influencerFull,
    },
    liveUrl: "https://influencer-gear-mobassher.netlify.app/",
    clientUrl: "https://github.com/Md-Mobassher/influencer-gear",
  },
];
