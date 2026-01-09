export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  filename: string;
  category: string;
  description: string;
  tags: string[];
}

export const categories = [
  "All Books",
  "JavaScript Basics",
  "Data Structures & Algorithms",
  "Functional Programming",
  "Full Stack",
  "Advanced JavaScript",
  "DOM & Browser",
];

export const books: Book[] = [
  {
    id: "1",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    year: 2018,
    filename: "Eloquent Javascript - Marijn Haverbeke - 2018.pdf",
    category: "JavaScript Basics",
    description:
      "A modern introduction to programming with JavaScript. Covers the language fundamentals, browser programming, and Node.js.",
    tags: ["beginner", "fundamentals", "best-seller"],
  },
  {
    id: "2",
    title: "JavaScript and jQuery",
    author: "Jon Duckett",
    year: 2014,
    filename: "JavaScript and JQuery - Jon Duckett - 2014.pdf",
    category: "JavaScript Basics",
    description:
      "Interactive front-end web development with JavaScript and jQuery. Highly visual and beginner-friendly approach.",
    tags: ["beginner", "jquery", "visual"],
  },
  {
    id: "3",
    title: "You Don't Know JS: Async & Performance",
    author: "Kyle Simpson",
    year: 2015,
    filename: "You Don't Know JS Async & Performance - Kyle Simpson - 2015.pdf",
    category: "Advanced JavaScript",
    description:
      "Deep dive into asynchronous programming patterns, callbacks, promises, and performance optimization techniques.",
    tags: ["advanced", "async", "performance"],
  },
  {
    id: "4",
    title: "Data Structures and Algorithms with JavaScript",
    author: "Michael McMillan",
    year: 2014,
    filename:
      "Data Structures and Algorithms with JavaScript - Michael McMillan - 2014.pdf",
    category: "Data Structures & Algorithms",
    description:
      "Learn classic data structures and algorithms using JavaScript. Essential for technical interviews.",
    tags: ["data-structures", "algorithms", "interview-prep"],
  },
  {
    id: "5",
    title: "JavaScript Data Structures and Algorithms",
    author: "Sammie Bae",
    year: 2019,
    filename:
      "JavaScript Data Structures and Algorithms - Sammie Bae - 2019.pdf",
    category: "Data Structures & Algorithms",
    description:
      "Modern approach to data structures and algorithms with JavaScript, including time complexity analysis.",
    tags: ["data-structures", "algorithms", "modern"],
  },
  {
    id: "6",
    title: "Learning JavaScript Data Structures and Algorithms",
    author: "Loiane Groner",
    year: 2018,
    filename:
      "Learning JavaScript Data Structures and Algorithms - Loiane Groner - 2018.pdf",
    category: "Data Structures & Algorithms",
    description:
      "Comprehensive guide to implementing classic and advanced data structures and algorithms in JavaScript.",
    tags: ["data-structures", "algorithms", "comprehensive"],
  },
  {
    id: "7",
    title: "Learning Functional Data Structures and Algorithms",
    author: "Raju Kumar Mishra",
    year: 2017,
    filename:
      "Learning Functional Data Structures and Algorithms - Raju Kumar Mishra - 2017.pdf",
    category: "Data Structures & Algorithms",
    description:
      "Functional approach to data structures and algorithms. Covers immutable data structures and functional patterns.",
    tags: ["functional", "data-structures", "algorithms"],
  },
  {
    id: "8",
    title: "Full Stack JavaScript",
    author: "Azat Mardan",
    year: 2018,
    filename: "Full Stack JavaScript - Azat Mardan - 2018.pdf",
    category: "Full Stack",
    description:
      "Build full-stack applications with JavaScript using Node.js, MongoDB, and front-end frameworks.",
    tags: ["full-stack", "nodejs", "mongodb"],
  },
  {
    id: "9",
    title: "Beginning Functional JavaScript",
    author: "Anto Aravinth",
    year: 2018,
    filename: "Beginning Functional JavaScript - Anto Aravinth - 2018.pdf",
    category: "Functional Programming",
    description:
      "Introduction to functional programming concepts in JavaScript. Learn pure functions, immutability, and more.",
    tags: ["functional", "beginner", "concepts"],
  },
  {
    id: "10",
    title: "Mastering JavaScript Functional Programming",
    author: "Federico Kereki",
    year: 2017,
    filename:
      "Mastering JavaScript functional programming - Kereki Federico - 2017.pdf",
    category: "Functional Programming",
    description:
      "Advanced functional programming techniques in JavaScript. Covers monads, functors, and category theory.",
    tags: ["functional", "advanced", "theory"],
  },
  {
    id: "11",
    title: "Simplifying JavaScript",
    author: "Joe Morgan",
    year: 2018,
    filename: "Simplifying JavaScript - Joe Morgan - 2018.pdf",
    category: "Advanced JavaScript",
    description:
      "Modern JavaScript practices for writing clean, maintainable code. Covers ES6+ features and best practices.",
    tags: ["modern", "es6", "best-practices"],
  },
  {
    id: "12",
    title: "JavaScript Next",
    author: "Gandhi Raju",
    year: 2019,
    filename: "JavaScript Next - Gandhi Raju - 2019.pdf",
    category: "Advanced JavaScript",
    description:
      "Explore future JavaScript features and modern development practices. Stay ahead with the latest syntax.",
    tags: ["modern", "es-next", "future"],
  },
  {
    id: "13",
    title: "The Principles of Object-Oriented JavaScript",
    author: "Nicholas Zakas",
    year: 2014,
    filename:
      "The Principles of Object-Oriented JavaScript - Nicholas Zakas - 2014.pdf",
    category: "Advanced JavaScript",
    description:
      "Deep dive into JavaScript's object-oriented features, prototypes, constructors, and inheritance.",
    tags: ["oop", "prototypes", "advanced"],
  },
  {
    id: "14",
    title: "DOM Scripting",
    author: "Jeremy Keith",
    year: 2010,
    filename: "DOM Scripting - Jeremy Keith - 2010.pdf",
    category: "DOM & Browser",
    description:
      "Web design with JavaScript and the DOM. Learn to manipulate HTML and CSS dynamically.",
    tags: ["dom", "browser", "web-design"],
  },
  {
    id: "15",
    title: "Beginning JavaScript with DOM Scripting and Ajax",
    author: "Christian Heilmann",
    year: 2006,
    filename:
      "Beginning JavaScript with DOM Scripting and Ajax - Chrstan Hlmann - 2006.pdf",
    category: "DOM & Browser",
    description:
      "Practical introduction to JavaScript DOM manipulation and Ajax for interactive web applications.",
    tags: ["dom", "ajax", "beginner"],
  },
  {
    id: "16",
    title: "Practical JavaScript DOM Scripting and Ajax",
    author: "Frank Zammetti",
    year: 2007,
    filename:
      "Practical JavaScript DOM Scripting and Ajax - Frank Zammetti - 2007.pdf",
    category: "DOM & Browser",
    description:
      "Hands-on approach to DOM scripting and Ajax techniques for dynamic web pages.",
    tags: ["dom", "ajax", "practical"],
  },
  {
    id: "17",
    title: "Secrets of the JavaScript Ninja",
    author: "John Resig",
    year: 2016,
    filename: "Secrets of the JavaScript Ninja - John Resig - 2016.pdf",
    category: "Advanced JavaScript",
    description:
      "Advanced JavaScript techniques from the creator of jQuery. Master closures, timers, and ninja-level tricks.",
    tags: ["advanced", "techniques", "jquery-creator"],
  },
  {
    id: "18",
    title: "Pro JavaScript Techniques",
    author: "John Resig",
    year: 2007,
    filename: "Pro Javascript Techniques - John Resig - 2007.pdf",
    category: "Advanced JavaScript",
    description:
      "Professional JavaScript development techniques covering object-oriented programming, the DOM, and Ajax.",
    tags: ["advanced", "professional", "techniques"],
  },
  {
    id: "19",
    title: "Pro JavaScript Design Patterns",
    author: "Dustin Diaz",
    year: 2007,
    filename: "Pro JavaScript Design Patterns - Dustin Diaz - 2007.pdf",
    category: "Advanced JavaScript",
    description:
      "Classic design patterns applied to JavaScript. Learn singleton, factory, observer, and more patterns.",
    tags: ["design-patterns", "advanced", "architecture"],
  },
  {
    id: "20",
    title: "Pro JavaScript RIA Techniques",
    author: "Dennis Odell",
    year: 2009,
    filename: "Pro JavaScript RIA Techniques - Dennis Odell - 2009.pdf",
    category: "Advanced JavaScript",
    description:
      "Rich Internet Application development with JavaScript. Build sophisticated client-side applications.",
    tags: ["ria", "advanced", "client-side"],
  },
  {
    id: "21",
    title: "Building Microservices with JavaScript",
    author: "Diogo Resende",
    year: 2018,
    filename: "Building Microservices with JavaScript -  Diogo Resende.pdf",
    category: "Full Stack",
    description:
      "Learn to build scalable microservices architecture using Node.js and modern JavaScript patterns.",
    tags: ["microservices", "nodejs", "architecture"],
  },
  {
    id: "22",
    title: "Data Wrangling with JavaScript",
    author: "Ashley Davis",
    year: 2019,
    filename: "Data Wrangling with JavaScript - Ashley Davis - 2019.pdf",
    category: "Data Structures & Algorithms",
    description:
      "Transform and manipulate data using JavaScript. Learn to work with various data formats and sources.",
    tags: ["data", "transformation", "practical"],
  },
  {
    id: "23",
    title: "Learning JavaScript Essentials",
    author: "Ethan Brown",
    year: 2016,
    filename:
      "Learning JavaScript  Essentials for Modern Application - Ethan Brown - 2016.pdf",
    category: "JavaScript Basics",
    description:
      "Essential JavaScript for modern application development. Covers ES6 and contemporary practices.",
    tags: ["essentials", "modern", "es6"],
  },
  {
    id: "24",
    title: "Javascript.info Ebook Part 1",
    author: "javascript.info",
    year: 2019,
    filename: "Javascript.info Ebook Part 1 - javascript.info - 2019.pdf",
    category: "JavaScript Basics",
    description:
      "Comprehensive JavaScript tutorial covering fundamentals, objects, data types, and more. Part 1 of 3.",
    tags: ["fundamentals", "tutorial", "comprehensive"],
  },
  {
    id: "25",
    title: "Javascript.info Ebook Part 2",
    author: "javascript.info",
    year: 2019,
    filename: "Javascript.info Ebook Part 2 - javascript.info - 2019.pdf",
    category: "DOM & Browser",
    description:
      "Browser environment, DOM manipulation, events, and UI interaction. Part 2 of 3.",
    tags: ["browser", "dom", "events"],
  },
  {
    id: "26",
    title: "Javascript.info Ebook Part 3",
    author: "javascript.info",
    year: 2019,
    filename: "Javascript.info Ebook Part 3 - javascript.info - 2019.pdf",
    category: "Advanced JavaScript",
    description:
      "Advanced topics including modules, async programming, and modern JavaScript features. Part 3 of 3.",
    tags: ["advanced", "modules", "async"],
  },
  {
    id: "27",
    title: "Beginning Functional JavaScript (2012)",
    author: "Anto Aravinth",
    year: 2012,
    filename: "Beginning Functional JavaScript - Anto Aravinth - 2012.pdf",
    category: "Functional Programming",
    description:
      "Earlier edition focusing on functional programming basics in JavaScript.",
    tags: ["functional", "beginner", "classic"],
  },
  {
    id: "28",
    title: "Learning JavaScript Data Structures (2014)",
    author: "Loiane Groner",
    year: 2014,
    filename:
      "Learning JavaScript Data Structures and Algorithms Loiane Groner - 2014.pdf",
    category: "Data Structures & Algorithms",
    description:
      "Earlier edition of the popular data structures and algorithms book.",
    tags: ["data-structures", "algorithms", "classic"],
  },
];
