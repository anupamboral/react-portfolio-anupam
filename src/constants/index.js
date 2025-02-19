import project1 from "../assets/projects/Namaste-youtube.png";
import project2 from "../assets/projects/anupam-foods.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/forkify.png";
import project5 from "../assets/projects/omnifood.png";

export const HERO_CONTENT = `I am a passionate  frontend developer with a knack for crafting robust and scalable web applications. With 1.5 years of hands-on project based experience, I have honed my skills in front-end technologies like React.js. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 1.5 years of project based experience, I have worked with a variety of technologies, including React.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active,playing guitar, exploring new technologies, and in future contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Namaste Youtube",
    image: project1,
    description:
      "A Youtube Clone with features like live chat, search suggestions,watch any video you can find in youtube as we are fetching data from youtube's API, find channels , view comments, responsive for all devices.TO build live chat feature I used api polling and to display optimized search suggestion feature I used debouncing.",
    technologies: [
      "React",
      "TailWind CSS",
      "Webpack",
      "Redux Toolkit",
      "React Router",
    ],
    url: "https://namaste-youtube-anupam.netlify.app/",
  },
  {
    title: "Anupam Foods",
    image: project2,
    description:
      "A fully responsive food ordering website built using React.js with features like restaurant filtering ,searching , adding food items from the restaurant menu to your cart.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "parcel",
      "React Testing Library",
      "jest",
    ],
    url: "https://anupam-foods.netlify.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS", "Vite", "Framer Motion"],
    url: "https://anupam-portfolio.netlify.app/",
  },
  {
    title: "Forkify",
    image: project4,
    description:
      "Recipe searching website . Search over 1,000,000 recipes. You can search recipes, bookmark them, change servings ,and also upload your own recipe.To build this project , I used MVC architecture pattern, forkify API to fetch recipes data .",
    technologies: ["HTML", "CSS", "JavaScript", "Parcel"],
    url: "https://forkify-recipe-search-anupam.netlify.app/",
  },
  {
    title: "Omnifood",
    image: project5,
    description:
      "Omnifood is an AI-based food subscription website that can help you to eat healthy customized food, 365 days at an affordable price.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://omnifood-anupam.netlify.app/",
  },
];

export const CONTACT = {
  address: "Domjur,Howrah",
  phoneNo: "91 8017421674",
  email: "anupamboral6889@gmail.com",
};
