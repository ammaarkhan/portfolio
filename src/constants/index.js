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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };