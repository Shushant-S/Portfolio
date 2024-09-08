import CartLane from "@/assets/projects/CartLane.png"
import RandomGif from "@/assets/projects/RandomGIF.png";
import Inkwell from "@/assets/projects/Inkwell.png";
import securepay from "@/assets/projects/SecurePay.png";

export const ProjectList = [
  {
    id: 1,
    name: "Ink-Well",
    description: [
      "Developed Ink Well, a blogging platform where users can write and publish blogs, using React.js and Tailwind CSS for a modern, responsive interface.",
      "Implemented backend functionality with Hono and Prisma, ensuring efficient database management and deployed using Cloudflare Workers.",
      "Leveraged TypeScript and Vite for a scalable, fast, and robust development process.",
    ],
    img: Inkwell,
    //max 6 tech stack
    tech: ["React.js", "Node.js", "Typescript", "cloudflare(serverless)", "Postgresql", "Prisma"],
    source: "https://github.com/Shushant-S/Ink-Well",
    demo: "https://ink-well.onrender.com/",
  },
  {
    id: 2,
    name: "SecurePay",
    description: [
      "Developed Secure Pay, an internet banking platform using React.js and Tailwind CSS, with features like JWT-secured authentication, fund transfers, bill payments, and account overview.",
      "Integrated Chart.js for data visualizations and Nodemailer for emails.",
      "Built the backend with Express.js and MongoDB , ensuring security and optimized development, and deployed on Render."
    ],
    img: securepay,
    //max 6 tech stack
    tech: ["React.js", "TailwindCss", "Javascript", "MongoDB", "Nodemailer", "Bcrypt"],
    source: "https://github.com/Shushant-S/Secure-Pay",
    demo: "https://secure-pay.onrender.com/",
  },
  {
    id: 3,
    name: "CartLane",
    description: [
      "Built Cartlane, an e-commerce platform where users can easily add items to their cart, using React.js and Redux Toolkit for state management.",
      "Styled the application with Tailwind CSS for a clean, responsive design.",
      "Integrated React Router for seamless navigation and React Hot Toast for user-friendly notifications.",
    ],
    img: CartLane,
    //max 6 tech stack
    tech: ["Javascript","React.js", "Tailwind CSS", "React Router", "Redux Toolkit"],
    source: "https://github.com/Shushant-S/Cart-Lane",
    demo: "https://cartlane.netlify.app/",
  },
  {
    id: 4,
    name: "Random GIF",
    description: [
      "Developed randomGIF, a platform where users can search for GIFs and receive random GIFs, using React.js for a dynamic user interface.",
      "Integrated Axios to fetch GIFs from external APIs, ensuring fast and reliable content delivery.",
      "Styled the application with Tailwind CSS for a responsive and visually appealing design."
    ],
    img: RandomGif,
    //max 6 tech stack
    tech: ["React.js", "Javascript", "Tailwind CSS", "Axios", "Web API's"],
    source: "https://github.com/Shushant-S/Random-GIF",
    demo: "https://randomgiffy.netlify.app/",
  },
];
