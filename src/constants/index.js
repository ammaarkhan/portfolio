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
    md,
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
    acechat,
    celebdetect,
    cardetect,
    robotarm,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Robotics Enthusiast",
      icon: mobile,
    },
    {
      title: "ML Developer",
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
      title: "Software Lead & VP Finance",
      company_name: "Marine Design Club",
      icon: md,
      iconBg: "#ffffff",
      date: "May 2023 - Present",
      points: [
        "Co-founder of the Marine Design Club, a student-led organization at the University of British Columbia, dedicated to the development of autonomous underwater vehicles (AUV).",
        "Overseeing team of 6 in software team to build the first-gen AUV at the club.",
        "Managing the club's finances and budget, and general club operations.",
      ],
      link: "https://www.okmarinedesign.ca",
    },
    {
      title: "Tech Lead",
      company_name: "Brokol",
      icon: brokol,
      iconBg: "#383E56",
      date: "October 2022 - Present",
      points: [
        "Spearheaded the development of the Brokol App, a React Native application designed to curb household food waste by enabling efficient grocery tracking and promoting eco-friendly consumption behaviors.",
        "Designed and implemented a receipt scanner module using OCR, RegEx, data cleansing techniques, and OpenAI's GPT API, efficiently extracting item names and generating expiry dates, achieving an accuracy of 90% on test dataset.",
        "Collaborated with design and development teams to translate user needs into product features, and led user research initiatives, ensuring responsiveness to user challenges, and alignment with our sustainable mission.",
      ],
      link: "https://www.brokol.app",
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
      link: "https://www.capillarytech.com"
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
      "Ace is a student advising chatbot built with TensorFlow and spaCy, to answer common advising questions. It uses language processing techniques to understand student queries better and provide accurate, personalized responses.",
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
      image: acechat,
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
      image: celebdetect,
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
      image: cardetect,
      source_code_link: "https://github.com/ammaarkhan/OD-Car-Counter",
    },
    {
      name: "Arduino Robot Arm",
      description:
        "This is a robot arm equipped with six degrees of motion built using an Arduino UNO, delivering precise mechanical movements. This compact robot demonstrates the intersection of software programming and hardware engineering, efficiently managing tasks requiring intricate manipulation.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "green-text-gradient",
        },
        {
          name: "CAD/CAM",
          color: "pink-text-gradient",
        },
      ],
      image: robotarm,
      // source_code_link: "https://github.com/ammaarkhan/ML-Celeb-Detector",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };