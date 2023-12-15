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
import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";
import project5 from "./assets/images/Projects/img5.png";

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
    firstName: "OBINNA",
    LastName: "CHUKS",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
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
        descriptionLine1: "Web Server: Building efficient and scalable web servers and APIs.",
        descriptionLine2: "Middleware: Implementing custom middleware for request handling.",
        descriptionLine3: "Routing: Defining and managing routes for different parts of an application.",
      },
      {
        name: "NextJS",
        para: " A framework built on top of React",
        logo: next,
        descriptionLine1: "Web Server: Building efficient and scalable web servers and APIs.",
        descriptionLine2: "Middleware: Implementing custom middleware for request handling.",
        descriptionLine3: "Routing: Defining and managing routes for different parts of an application.",
      },
      
      {
        name: "React.JS",
        para: "JavaScript Library",
        logo: react,
        descriptionLine1: "Component-Based UI: Building reusable UI components for web apps.",
        descriptionLine2: "Virtual DOM: Optimizing performance by minimizing DOM updates.",
        descriptionLine3: "State Management: Managing application state using props and state.",
      },
      
      {
        name: "JavaScript",
        para: "Versatile programming language.",
        logo: js,
        descriptionLine1: "Interactivity: Adding dynamic behavior to web pages.",
        descriptionLine2: "Client-Side Logic: Handling user interactions and form validation.",
        descriptionLine3: "AJAX Requests: Fetching data from servers without page reloads.",
      },
      {
        name: "Zustand",
        para: "Global state manager.",
        logo: zustand,
        descriptionLine1: "State Management: Centralized state management for complex React apps.",
        descriptionLine2: "Predictable State Updates: Ensuring a predictable flow of data changes.",
        descriptionLine3: "Middleware: Implementing custom logic between dispatch and reducers.",
      },

      {
        name: "React-Query",
        para: "Global state manager.",
        logo: reactquery,
        descriptionLine1: "State Management: Centralized state management for complex React apps.",
        descriptionLine2: "Predictable State Updates: Ensuring a predictable flow of data changes.",
        descriptionLine3: "Middleware: Implementing custom logic between dispatch and reducers.",
      },
      {
        name: "Tailwind CSS",
        para: "Utility-first CSS framework for design.",
        logo: tailwind,
        descriptionLine1: "Utility-First CSS: Rapidly styling web components with utility classes.",
        descriptionLine2: "Customization: Easily customizing and extending the default styles.",
        descriptionLine3: "Responsiveness: Creating responsive designs using pre-built classes.",
      },
      {
        name: "Node.js",
        para: "Runtime environment for executing Js.",
        logo: nodejs,
        descriptionLine1: "Backend Development: Creating server-side logic for web applications.",
        descriptionLine2: "Real-Time Applications: Developing real-time features like chat applications.",
        descriptionLine3: "Microservices: Building microservices architecture for scalable systems.",
      },   
      {
        name: "Express.JS",
        para: "Node Js frame work.",
        logo: express,
        descriptionLine1: "Web Server: Building efficient and scalable web servers and APIs.",
        descriptionLine2: "Middleware: Implementing custom middleware for request handling.",
        descriptionLine3: "Routing: Defining and managing routes for different parts of an application.",
      }, 
      {
        name: "CSS3",
        para: "Style sheet web documents.",
        logo: css,
        descriptionLine1: "Styling: Applying styles and layouts to HTML elements.",
        descriptionLine2: "Responsiveness: Creating responsive designs for various screen sizes.",
        descriptionLine3: "Animations: Adding animations and transitions to web elements.",
      },
      {
        name: "HTML5",
        para: "HTML5 is a markup language.",
        logo: html,
        descriptionLine1: "Semantic Markup: Structuring web content with meaningful HTML elements.",
        descriptionLine2: "Multimedia Support: Embedding audio, video, and interactive content.",
        descriptionLine3: "Accessibility: Ensuring web content is accessible to all users.",
      },
      {
        name: "Git",
        para: "Distributed version control system.",
        logo: git,
        descriptionLine1: "Version Control: Managing and tracking changes in code and projects.",
        descriptionLine2: "Collaboration: Enabling collaboration among developers on a codebase.",
        descriptionLine3: "Branching: Creating branches for feature development and bug fixes.",
      },
      {
        name: "Jira",
        para: "Distributed version control system.",
        logo: jira,
        descriptionLine1: "Version Control: Managing and tracking changes in code and projects.",
        descriptionLine2: "Collaboration: Enabling collaboration among developers on a codebase.",
        descriptionLine3: "Branching: Creating branches for feature development and bug fixes.",
      },

      {
        name: "Azure_devops",
        para: " Cloud-based collaboration platform.",
        logo: azuredevops,
        descriptionLine1: "Version Control: Managing and tracking changes in code and projects.",
        descriptionLine2: "Collaboration: Enabling collaboration among developers on a codebase.",
        descriptionLine3: "Branching: Creating branches for feature development and bug fixes.",
      }, 
      {
        name: "CI/CD",
        para: "software development lifecycle",
        logo: cicd,
        descriptionLine1: "Package Management: Managing and installing JavaScript packages.",
        descriptionLine2: "Dependency Resolution: Resolving and installing project dependencies.",
        descriptionLine3: "Script Execution: Running custom scripts defined in `package.json`.",
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
        para: "Building and designing responsive and user-friendly websites, developing custom web applications tailored to specific business needs and creating dynamic and interactive user interfaces using HTML, CSS, and JavaScript",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: " Designing and developing server-side logic and APIs, Setting up databases and managing data storage and retrieval and implementing user authentication and authorization systems",
        logo: services_logo2,
      },
      {
        title: "API Development",
        para: "Building RESTful APIs for communication between front-end and back-end systems and implementing API endpoints for data retrieval, creation, updating, and deletion.",
        logo: services_logo3,
      },
     
      {
        title: "Maintenance",
        para: "Providing ongoing maintenance, updates, and enhancements to existing websites and applications.Troubleshooting and resolving technical issues and bugs.",
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
        title: "BANK TOKEN OTP GENERATOR",
        image: project1,
        link:"https://magnificent-palmier-e34b42.netlify.app/",
        description: "Software application embedded inside a hardware used by banks and financial institutions to provide an additional layer of security for online banking transactions"

      },
      {
        title: "SCHEDULE TRACKER",
        image: project2,
        link:"https://hilarious-daifuku-bc7205.netlify.app/",
        description:"A task tracker application is a software tool used to manage and track tasks or projects within a team or organization. The application allows users to create tasks, assign them to team members, set deadlines, track progress, and communicate about the",

      },
      {
        title: "API RANDOM QUOTE GENERATOR",
        image: project3,
        link:"https://random-quote-generate.vercel.app/",
        description:"",
      },
      {
        title: "LMS STUDENT REGISTRATION PORTAL",
        image: project4,
        link:"https://student-portal-form.vercel.app/",
        description:" ",
      },
      {
        title: "LMS ADMINISTRATIVE PORTAL",
        image: project5,
        link:"https://ssmp-admin-portal.vercel.app/",
        description:"",
      },
      {
        title: "Gym Website",
        image: project1,
        link:"https://ssmp-admin-portal.vercel.app/",
        description:"",
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
