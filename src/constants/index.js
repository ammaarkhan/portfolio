import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    capillary,
    brokol,
    jobbox,
    arduino,
    cplus,
    dart,
    firebase,
    heroku,
    python,
    pytorch,
    scikitlearn,
    sql,
    sqlite,
    swift,
    tensorflow,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "App Developer",
      icon: web,
    },
    {
      title: "ML Developer",
      icon: mobile,
    },
    {
      title: "Robotics Enthusiast",
      icon: backend,
    },
    {
      title: "Entrepreneur",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java
    },
    {
      name: "cplus",
      icon: cplus,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "tensorflow",
      icon: tensorflow,
    },
    {
      name: "pytorch",
      icon: pytorch,
    },
    {
      name: "scikitlearn",
      icon: scikitlearn,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "heroku",
      icon: heroku,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    // {
    //   name: "sqlite",
    //   icon: sqlite,
    // },
    // {
    //   name: "dart",
    //   icon: dart,
    // },
    // {
    //   name: "swift",
    //   icon: swift,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "arduino",
      icon: arduino,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "Jobbox",
      icon: jobbox,
      iconBg: "#383E56",
      date: "May 2023 - Present",
      points: [
        "Enhanced user engagement by redesigning the wallet page UI with the integration of interactive pie-charts, leading to a personalized and visually engaging income and spending tracking system.",
        "Improved user connectivity by developing a comprehensive messaging feature, employing data structures, back-end integration, and UI design, allowing for seamless communication between users and potential employers.",
        "Boosted user responsiveness by implementing a real-time notifications feature, alerting users about incoming messages and job application updates, thus promoting timely user response and engagement.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Brokol",
      icon: brokol,
      iconBg: "#383E56",
      date: "October 2022 - Present",
      points: [
        "Led the production of an app to reduce consumer food waste, initiating the development cycle during BC HACKS 4.0.",
        "Built a receipt scanner module utilizing Apples Vision framework and RegEx patterns to extract product names from grocery receipts, achieving an accuracy of 85%.",
        "Designed and implemented a grocery item database using Sqflite in Flutter, providing seamless CRUD functionalities.",
      ],
    },
    {
      title: "Data Analyst Intern",
      company_name: "Capillary Technologies",
      icon: capillary,
      iconBg: "#E6DEDD",
      date: "May 2022 - July 2022",
      points: [
        "Executed instrumentation of websites and Android applications using New Relic, retrieving crucial application performance analytics and enabling effective issue resolution.",
        "Worked cross-functionally with the DevOps team on the instrumentation of a client's consumer-facing app and successfully implemented alert monitors, resulting in a notable 50% decrease in critical incidents.",
        "Integrated various organizational sources to Elastic Workplace Search service for Capillary Technologies, improving the accuracy and reliability of search results.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ace Chatbot",
      description:
      "A university advising chatbot that provides a conversational interface for students to interact with, for common advising questions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ammaarkhan/Ace-Chatbot",
    },
    {
      name: "Celebrity Detector",
      description:
        "The Celeb Detector is an innovative project employing the Keras VGGFace model to recognize celebrity faces from user-uploaded images, providing users with the name and image of the closest celebrity look-alike.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Keras",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ammaarkhan/ML-Celeb-Detector",
    },
    {
      name: "OD Car Counter",
      description:
        "This project leverages the YOLO Object Detection model for real-time detection and counting of cars in a video, segregated by lane position. It ingeniously blends car and lane detection algorithms, processing each frame to visualize the car count per lane.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "OD",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ammaarkhan/OD-Car-Counter",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };