// import images
import Hero_person from "./assets/images/Hero/person.png";

// import skills images
import express from "./assets/images/Skills/express.png";
import react from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import js from "./assets/images/Skills/js.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import reactquery from "./assets/images/Skills/reactquery.png";
import azuredevops from "./assets/images/Skills/azuredevops.png";
import ts from "./assets/images/Skills/ts.png";
import zustand from "./assets/images/Skills/zustand.png";
import next from "./assets/images/Skills/next.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import git from "./assets/images/Skills/git.png";
import cicd from "./assets/images/Skills/cicd.png";
import jira from "./assets/images/Skills/jira.png";


//import Services images
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";
import services_logo5 from "./assets/images/Services/logo5.png";

// import Project images
import project0 from "./assets/images/Projects/img0.png";
import project00 from "./assets/images/Projects/img00.png";
import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";
import projecst5 from "./assets/images/Projects/img05.png";

import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiCustomerService2Line, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  // change some content links below
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      // icon: RiServiceLine,
      icon: RiCustomerService2Line,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#hireme",
      icon: RiServiceLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engr.",
    firstName: "EMMANUEL",
    LastName: "CHUKS",
    btnText: "Hire Me",
    image: person_project,
    hero_content: [
      {
        count: "4+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "TypeScript",
        para: "A superset of JavaScript.",
        logo: ts,
        descriptionLine1: "I leverage TypeScript to write clean, type-safe code, reducing bugs and ensuring the scalability of the applications I build..",
      },
      {
        name: "NextJS",
        para: " A framework built on top of React",
        logo: next,
        descriptionLine1: "I use NextJS to develop performant web applications, focusing on server-side rendering and static site generation for better SEO and user experience.",
      },    
      {
        name: "React.JS",
        para: "JavaScript Library",
        logo: react,
        descriptionLine1: "I create dynamic and reusable UI components with ReactJS, delivering seamless and interactive user experiences.",
      },      
      {
        name: "JavaScript",
        para: "Versatile programming language.",
        logo: js,
        descriptionLine1: "JavaScript is my go-to for implementing core application logic, enabling rich interactivity and functionality in web interfaces.",
      },
      {
        name: "Zustand",
        para: "Global state manager.",
        logo: zustand,
        descriptionLine1: "I manage complex application state efficiently using Zustand, ensuring smooth data flow and improved performance.",
      },
      {
        name: "React-Query",
        para: "Global state manager.",
        logo: reactquery,
        descriptionLine1: "I simplify data fetching and synchronization with React Query, providing users with a responsive and optimized experience.",
      },
      {
        name: "Tailwind CSS",
        para: "Utility-first CSS framework for design.",
        logo: tailwind,
        descriptionLine1: "Tailwind CSS empowers me to design responsive and visually appealing layouts quickly, maintaining consistent branding and style.",
      },
      {
        name: "Node.js",
        para: "Runtime environment for executing Js.",
        logo: nodejs,
        descriptionLine1: "I collaborate with backend teams using NodeJS to debug and integrate APIs, ensuring seamless frontend-backend communication.",
      },   
      {
        name: "Express.JS",
        para: "Node Js frame work.",
        logo: express,
        descriptionLine1: "I assist in setting up lightweight APIs with ExpressJS to enable smooth data exchanges between the client and server.",
      }, 
      {
        name: "CSS3",
        para: "Style sheet web documents.",
        logo: css,
        descriptionLine1: "I use CSS3 to style components, ensuring modern, responsive designs that enhance the user interface.",
      },
      {
        name: "HTML5",
        para: "HTML5 is a markup language.",
        logo: html,
        descriptionLine1: "I structure web pages with semantic HTML5, improving accessibility and ensuring a solid foundation for my projects.",
      },
      {
        name: "Git",
        para: "Distributed version control system.",
        logo: git,
        descriptionLine1: "Git helps me collaborate effectively with my team, manage version control, and maintain a clean codebase.",
      },
      {
        name: "Jira",
        para: "Distributed version control system.",
        logo: jira,
        descriptionLine1: "I use Jira to track tasks, manage sprints, and ensure the timely delivery of projects in an Agile environment.",
      },
      {
        name: "Azure_devops",
        para: " Cloud-based collaboration platform.",
        logo: azuredevops,
        descriptionLine1: "I deploy and manage applications on Azure, utilizing its cloud services for scalable and reliable infrastructure.",
      }, 
      {
        name: "CI/CD",
        para: "software development lifecycle",
        logo: cicd,
        descriptionLine1: "Automating deployment pipelines with CI/CD tools allows me to deliver updates quickly and ensure application stability.",
      },
    
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Crafting responsive, user-friendly, and visually appealing web interfaces that deliver exceptional user experiences.",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: "Collaborating with backend teams to integrate robust APIs and ensure seamless data flow between the frontend and backend systems.",
        logo: services_logo2,
      },
      {
        title: "API Development",
        para: "Designing and implementing efficient API integrations to enable dynamic and interactive web applications",
        logo: services_logo3,
      },
     
      {
        title: "Maintenance",
        para: "Ensuring optimal performance, regular updates, and swift resolution of issues to keep web applications running smoothly.",
        logo: services_logo5,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "HYDROGENPAY FINTECH",
        image: project0,
        link:"https://dashboard.hydrogenpay.com/login",
        description: "The Hydrogen payment application enables users to onboard by signing up, logging in, requesting products, and retrieving login credentials for seamless access to services."
      },
      {
        title: "AWARRI AI",
        image: project00,
        link:"https://backoffice-langeasy-tk7ash3eaa-uc.a.run.app/",
        description: "The AI app streamlines the quality assurance workflow by annotating and auditing collected data, improving efficiency in data analysis"
      },
      {
        title: "LMS STUDENT REGISTRATION PORTAL",
        image: project4,
        link:"https://student-portal-form.vercel.app/",
        description:"An LMS student registration app for SAIL Innovation Lab allows candidates to enroll in Tech Talent, STEM, or Data Science programs seamlessly.",
      },
      {
        title: "LMS ADMINISTRATIVE PORTAL",
        image: project5,
        link:"https://ssmp-admin-portal.vercel.app/",
        description:"An administrative backoffice app for the LMS registration allows management to oversee and control the enrollment process, ensuring smooth operation and tracking",
      },
      {
        title: "RUTHINAS CONCEPTZ",
        image: projecst5,
        link:"https://ruthinaconcept.netlify.app/",
        description:"A socal-influencer app that allows users to request services from Ruthina, a versatile performer specializing in voice-overs for commercials, narration, audiobooks, animations, and more, as well as video presentations for corporate training, online tutorials, and event hosting.",
      },
      {
        title: "BANK TOKEN OTP GENERATOR",
        image: project1,
        link:"https://magnificent-palmier-e34b42.netlify.app/",
        description: "A software application embedded in hardware used by banks to enhance security for online transactions."
      },
      {
        title: "SCHEDULE TRACKER",
        image: project2,
        link:"https://hilarious-daifuku-bc7205.netlify.app/",
        description:"A task tracker application helps teams manage tasks by allowing users to create, assign, set deadlines, track progress, and communicate efficiently.",
      },
      {
        title: "API RANDOM QUOTE GENERATOR",
        image: project3,
        link:"https://random-quote-generate.vercel.app/",
        description:"An API random quote generator provides users with random quotes on demand, ideal for apps, websites, or inspiration tools.",
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Enhanced Online Presence: Thanks to Chuks's innovative web application, My client online presence has seen a remarkable boost. The user-friendly design and seamless functionality have significantly improved hercustomers' experience, resulting in increased engagement and retention.”",
        img: avatar1,
        name: "KUFREY SAMUEL / (UI/UX)",
      },
      {
        review:
          "“Tailored Solutions: Emmanuel took the time to truly understand my business plight on marketing & awareness. The web application he developed was custom-tailored to address our specific needs, which has been instrumenat for driving sale since I employed it...Thanks”",
        img: avatar2,
        name: "MARYJANE OBI - Entrepreneur (AuntyJayz Onlin-Store)",
      },
      {
        review:
          "“Expanded Reach: My Micro-business have expanded our it's customer's base beyond the local market. Emmanuel's web application has allowed us to reach a broader audience, resulting in increased sales and revenue.”",
        img: avatar3,
        name: "Engr. GODSLOVE .U",
      },
      {
        review:
          "“User-Centric Design: Chuks commitment to creating an intuitive and visually appealing user interface for my Electrical business has greatly enhanced the user experience. The application's design not only attracts visitors but also keeps them engaged.”",
        img: avatar4,
        name: " Engr. DAREAL SOLOMON - Electrical Engr (Dareal-Electrical)",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "“Cultivating digital experiences with a mastery of both front-end finesse and back-end prowess,  My commitment to crafting seamless, innovative solutions fuels my passion for creating captivating online landscapes. Welcome to a collaboration built on expertise and vision.”",
    btnText: "Hire Me",
    
  },
  Contact: {
    title: "Lets Talk",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "emlighttechnologies2022@gmail.com",
        icon: GrMail,
        link: "emlighttechnologies2022@gmail.com",
      },
      {
        text: "+2349 3810 4041",
        icon: MdCall,
        link: "https://wa.me/+234938104041",
      },
      {
        text: "ephysians",
        icon: BsInstagram,
        link: "https://www.instagram.com/ephysians/",
      },
      {
        text: "@ephysians",
        icon: BsGithub,
        link: "https://github.com/ephysians/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
