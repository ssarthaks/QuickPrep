export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface QuizData {
  [field: string]: {
    [technology: string]: {
      [difficulty: string]: Question[];
    };
  };
}

export const fields = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "fullstack", label: "Full Stack Development" },
  { value: "database", label: "Database & Data Engineering" },
  { value: "aiml", label: "AI & Machine Learning" },
];

export const technologies: Record<string, { value: string; label: string }[]> =
  {
    frontend: [
      { value: "htmlcss", label: "HTML & CSS" },
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "react", label: "React" },
      { value: "nextjs", label: "Next.js" },
      { value: "vue", label: "Vue.js" },
      { value: "angular", label: "Angular" },
    ],
    backend: [
      { value: "nodejs", label: "Node.js" },
      { value: "php", label: "PHP" },
      { value: "sql", label: "SQL" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "python", label: "Python" },
    ],
    fullstack: [
      { value: "typescript", label: "TypeScript" },
      { value: "react", label: "React" },
      { value: "nodejs", label: "Node.js" },
      { value: "sql", label: "SQL" },
    ],
    database: [
      { value: "sql", label: "SQL & Relational Databases" },
      { value: "mongodb", label: "MongoDB" },
      { value: "postgresql", label: "PostgreSQL" },
      { value: "redis", label: "Redis" },
    ],
    aiml: [
      { value: "python_ml", label: "Python for ML" },
      { value: "machine_learning", label: "Machine Learning" },
      { value: "deep_learning", label: "Deep Learning" },
      { value: "nlp", label: "Natural Language Processing" },
    ],
  };

export const difficulties = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

export const quizData: QuizData = {
  frontend: {
    react: {
      beginner: [
        {
          id: "react-b-1",
          question: "What is JSX in React?",
          options: [
            "A database query language",
            "A syntax extension for JavaScript that allows HTML-like code",
            "A styling framework",
            "A testing library",
          ],
          correctAnswer: 1,
          explanation:
            "JSX is a syntax extension for JavaScript that allows you to write HTML-like markup inside a JavaScript file.",
        },
        {
          id: "react-b-2",
          question:
            "Which hook is used to manage state in a functional component?",
          options: ["useEffect", "useState", "useContext", "useReducer"],
          correctAnswer: 1,
          explanation:
            "useState is the primary hook for adding state to functional components. It returns a state value and a function to update it.",
        },
        {
          id: "react-b-3",
          question: "What is the virtual DOM in React?",
          options: [
            "A direct manipulation of the browser DOM",
            "A lightweight copy of the actual DOM kept in memory",
            "A CSS framework",
            "A database system",
          ],
          correctAnswer: 1,
          explanation:
            "The virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to optimize updates by comparing changes before applying them to the real DOM.",
        },
        {
          id: "react-b-4",
          question: "How do you pass data from parent to child component?",
          options: [
            "Using state",
            "Using props",
            "Using context",
            "Using refs",
          ],
          correctAnswer: 1,
          explanation:
            "Props (short for properties) are used to pass data from a parent component to a child component in React.",
        },
        {
          id: "react-b-5",
          question:
            "What method is used to render a React component to the DOM?",
          options: [
            "ReactDOM.render()",
            "React.render()",
            "Component.render()",
            "DOM.render()",
          ],
          correctAnswer: 0,
          explanation:
            "ReactDOM.render() (or createRoot in React 18+) is used to render a React element into a DOM container.",
        },
        {
          id: "react-b-6",
          question: "What is a React component?",
          options: [
            "A CSS class",
            "A reusable piece of UI",
            "A database table",
            "A server endpoint",
          ],
          correctAnswer: 1,
          explanation:
            "A React component is a reusable piece of UI that can have its own logic, styling, and state.",
        },
        {
          id: "react-b-7",
          question:
            "Which symbol is used to embed JavaScript expressions in JSX?",
          options: ["{{ }}", "[ ]", "{ }", "< >"],
          correctAnswer: 2,
          explanation:
            "Curly braces { } are used to embed JavaScript expressions within JSX.",
        },
        {
          id: "react-b-8",
          question: "What is the purpose of the key prop in lists?",
          options: [
            "To style list items",
            "To help React identify which items have changed",
            "To create animations",
            "To sort the list",
          ],
          correctAnswer: 1,
          explanation:
            "Keys help React identify which items have changed, been added, or removed, enabling efficient re-renders.",
        },
        {
          id: "react-b-9",
          question: "How do you create a functional component in React?",
          options: [
            "class MyComponent extends React.Component",
            "function MyComponent() { return <div /> }",
            "const MyComponent = new Component()",
            "React.createComponent()",
          ],
          correctAnswer: 1,
          explanation:
            "Functional components are JavaScript functions that return JSX. They are the modern way to create React components.",
        },
        {
          id: "react-b-10",
          question:
            "What package is required to use React in a web application?",
          options: ["react-native", "react-dom", "react-router", "react-redux"],
          correctAnswer: 1,
          explanation:
            "react-dom provides DOM-specific methods for web applications, including rendering React components to the DOM.",
        },
      ],
      intermediate: [
        {
          id: "react-i-1",
          question: "What is the purpose of useEffect hook?",
          options: [
            "To manage component state",
            "To perform side effects in function components",
            "To create new components",
            "To handle routing",
          ],
          correctAnswer: 1,
          explanation:
            "useEffect is used to perform side effects like data fetching, subscriptions, or DOM mutations in functional components.",
        },
        {
          id: "react-i-2",
          question: "What is the Context API used for?",
          options: [
            "Database management",
            "Passing data through component tree without prop drilling",
            "Routing between pages",
            "Animation handling",
          ],
          correctAnswer: 1,
          explanation:
            "Context provides a way to share values between components without explicitly passing props through every level.",
        },
        {
          id: "react-i-3",
          question:
            "What is the difference between controlled and uncontrolled components?",
          options: [
            "Controlled components are faster",
            "Controlled components have their state managed by React",
            "Uncontrolled components cannot have default values",
            "There is no difference",
          ],
          correctAnswer: 1,
          explanation:
            "In controlled components, form data is handled by React state. In uncontrolled components, data is handled by the DOM itself.",
        },
        {
          id: "react-i-4",
          question: "What does React.memo() do?",
          options: [
            "Creates a new component",
            "Memoizes a component to prevent unnecessary re-renders",
            "Stores data in memory",
            "Handles form submissions",
          ],
          correctAnswer: 1,
          explanation:
            "React.memo() is a higher-order component that memoizes the result, skipping re-renders if props haven't changed.",
        },
        {
          id: "react-i-5",
          question: "What is the purpose of useCallback hook?",
          options: [
            "To call APIs",
            "To memoize callback functions",
            "To create new components",
            "To handle errors",
          ],
          correctAnswer: 1,
          explanation:
            "useCallback returns a memoized version of a callback function, preventing unnecessary re-renders of child components.",
        },
        {
          id: "react-i-6",
          question: "How do you handle errors in React components?",
          options: [
            "Using try-catch only",
            "Using Error Boundaries",
            "Using console.log",
            "Errors cannot be handled in React",
          ],
          correctAnswer: 1,
          explanation:
            "Error Boundaries are React components that catch JavaScript errors in their child component tree and display fallback UI.",
        },
        {
          id: "react-i-7",
          question:
            "What is the correct way to update state based on previous state?",
          options: [
            "setState(state + 1)",
            "setState(prevState => prevState + 1)",
            "state = state + 1",
            "this.state++",
          ],
          correctAnswer: 1,
          explanation:
            "Using a function with the previous state ensures you're working with the most current state value, avoiding race conditions.",
        },
        {
          id: "react-i-8",
          question: "What is a custom hook in React?",
          options: [
            "A built-in React hook",
            "A function that uses other hooks and can be reused",
            "A CSS hook",
            "A database connection",
          ],
          correctAnswer: 1,
          explanation:
            'Custom hooks are functions starting with "use" that let you extract and share stateful logic between components.',
        },
        {
          id: "react-i-9",
          question: "What triggers a component re-render in React?",
          options: [
            "Only state changes",
            "State changes, prop changes, or parent re-renders",
            "Only prop changes",
            "Manual trigger only",
          ],
          correctAnswer: 1,
          explanation:
            "Components re-render when their state changes, when their props change, or when their parent component re-renders.",
        },
        {
          id: "react-i-10",
          question: "What is the purpose of useRef hook?",
          options: [
            "To manage component state",
            "To access DOM elements or persist values across renders",
            "To handle routing",
            "To create animations",
          ],
          correctAnswer: 1,
          explanation:
            "useRef returns a mutable ref object that persists across re-renders. It's commonly used for DOM access or storing mutable values.",
        },
      ],
      advanced: [
        {
          id: "react-a-1",
          question: "What is React Fiber?",
          options: [
            "A CSS framework for React",
            "The reimplementation of React's core algorithm",
            "A testing library",
            "A state management library",
          ],
          correctAnswer: 1,
          explanation:
            "React Fiber is the reimplementation of React's core algorithm, enabling incremental rendering and improved performance.",
        },
        {
          id: "react-a-2",
          question: "What is the purpose of useMemo hook?",
          options: [
            "To create new components",
            "To memoize expensive computations",
            "To handle form data",
            "To manage routing",
          ],
          correctAnswer: 1,
          explanation:
            "useMemo memoizes the result of an expensive computation, only recalculating when dependencies change.",
        },
        {
          id: "react-a-3",
          question: "What is Concurrent Mode in React?",
          options: [
            "A way to run multiple React apps",
            "A set of features for better handling of async operations",
            "A testing mode",
            "A debugging tool",
          ],
          correctAnswer: 1,
          explanation:
            "Concurrent Mode enables React to interrupt rendering work to handle higher-priority updates, improving responsiveness.",
        },
        {
          id: "react-a-4",
          question: "What is the Reconciliation process in React?",
          options: [
            "The process of styling components",
            "The algorithm React uses to diff one tree with another",
            "Database synchronization",
            "API integration",
          ],
          correctAnswer: 1,
          explanation:
            "Reconciliation is the algorithm React uses to determine what changes need to be made to the DOM by comparing virtual DOM trees.",
        },
        {
          id: "react-a-5",
          question: "What are React Portals used for?",
          options: [
            "To create links between pages",
            "To render children into a DOM node outside parent hierarchy",
            "To manage state",
            "To handle forms",
          ],
          correctAnswer: 1,
          explanation:
            "Portals provide a way to render children into a DOM node that exists outside the parent component's DOM hierarchy.",
        },
        {
          id: "react-a-6",
          question: "What is the purpose of React.lazy()?",
          options: [
            "To create slow animations",
            "To enable code-splitting and lazy loading of components",
            "To delay state updates",
            "To handle async API calls",
          ],
          correctAnswer: 1,
          explanation:
            "React.lazy() lets you define a component that is loaded dynamically, enabling code-splitting to reduce initial bundle size.",
        },
        {
          id: "react-a-7",
          question: "What is the useImperativeHandle hook used for?",
          options: [
            "To create imperative animations",
            "To customize the instance value exposed when using ref",
            "To handle form submissions",
            "To manage global state",
          ],
          correctAnswer: 1,
          explanation:
            "useImperativeHandle customizes the instance value that is exposed to parent components when using forwardRef.",
        },
        {
          id: "react-a-8",
          question: "What is Server-Side Rendering (SSR) in React?",
          options: [
            "Running JavaScript on the client",
            "Rendering React components on the server and sending HTML to client",
            "A database technique",
            "A styling approach",
          ],
          correctAnswer: 1,
          explanation:
            "SSR renders React components on the server, sending fully rendered HTML to the client for faster initial load and better SEO.",
        },
        {
          id: "react-a-9",
          question: "What is the purpose of useLayoutEffect?",
          options: [
            "To handle CSS layouts",
            "To run effects synchronously after DOM mutations",
            "To create grid layouts",
            "To manage responsive design",
          ],
          correctAnswer: 1,
          explanation:
            "useLayoutEffect fires synchronously after DOM mutations, before the browser paints, useful for DOM measurements.",
        },
        {
          id: "react-a-10",
          question: "What are Compound Components in React?",
          options: [
            "Components made of multiple files",
            "A pattern where components work together sharing implicit state",
            "Components with multiple states",
            "Components with compound CSS",
          ],
          correctAnswer: 1,
          explanation:
            "Compound Components is a pattern where multiple components work together to form a complete UI with shared implicit state.",
        },
      ],
    },
    nextjs: {
      beginner: [
        {
          id: "next-b-1",
          question: "What is Next.js primarily used for?",
          options: [
            "Mobile app development",
            "Server-side rendering React applications",
            "Database management",
            "CSS styling",
          ],
          correctAnswer: 1,
          explanation:
            "Next.js is a React framework that enables server-side rendering, static site generation, and other advanced features for building web applications.",
        },
        {
          id: "next-b-2",
          question:
            "Which directory contains page components in Next.js 13+ with App Router?",
          options: ["src/", "app/", "pages/", "components/"],
          correctAnswer: 1,
          explanation:
            "In Next.js 13+, the App Router uses the app/ directory for routing, replacing the older pages/ directory.",
        },
        {
          id: "next-b-3",
          question:
            "What is the purpose of getServerSideProps in Next.js Pages Router?",
          options: [
            "To style components",
            "To handle client-side routing",
            "To fetch data on each request at runtime",
            "To create static pages",
          ],
          correctAnswer: 2,
          explanation:
            "getServerSideProps (Pages Router) fetches data on the server for each request, enabling dynamic server-side rendering.",
        },
        {
          id: "next-b-4",
          question: "How do you create a dynamic route in Next.js?",
          options: [
            "Using query parameters only",
            "Using [param].js or [param]/page.js file naming",
            "Using router.push()",
            "It's not possible in Next.js",
          ],
          correctAnswer: 1,
          explanation:
            "Square brackets in file names like [id].js or [slug]/page.js create dynamic routes that can match URL parameters.",
        },
        {
          id: "next-b-5",
          question:
            "What is the default rendering method in Next.js 13 App Router?",
          options: [
            "Client-side rendering",
            "Static Site Generation",
            "Server Components (RSC)",
            "Incremental Static Regeneration",
          ],
          correctAnswer: 2,
          explanation:
            "In Next.js 13+ with App Router, all components are Server Components by default unless marked with 'use client'.",
        },
        {
          id: "next-b-6",
          question:
            "Which file is used for custom document structure in Next.js Pages Router?",
          options: ["_document.js", "_app.js", "index.js", "layout.js"],
          correctAnswer: 0,
          explanation:
            "_document.js allows customization of the HTML document structure, including <html> and <body> tags.",
        },
        {
          id: "next-b-7",
          question: "What is the purpose of next/image component?",
          options: [
            "To create image galleries",
            "Automatic image optimization and lazy loading",
            "To compress images manually",
            "To add image filters",
          ],
          correctAnswer: 1,
          explanation:
            "next/image provides automatic image optimization, lazy loading, responsive images, and prevents layout shift.",
        },
        {
          id: "next-b-8",
          question:
            "How do you enable client-side JavaScript in Next.js 13 App Router?",
          options: [
            "All components are client-side by default",
            "Add 'use client' directive at the top of the file",
            "Import from 'next/client'",
            "Use clientSideProps function",
          ],
          correctAnswer: 1,
          explanation:
            "Adding 'use client' at the top of a component file makes it a Client Component, enabling browser APIs and interactivity.",
        },
        {
          id: "next-b-9",
          question: "What is the purpose of next.config.js?",
          options: [
            "To define React component configuration",
            "To configure Next.js build and runtime settings",
            "To manage database connections",
            "To style components",
          ],
          correctAnswer: 1,
          explanation:
            "next.config.js is the configuration file for customizing Next.js behavior including webpack, environment variables, redirects, and more.",
        },
        {
          id: "next-b-10",
          question: "Which method allows static generation with data fetching?",
          options: [
            "getInitialProps",
            "getStaticProps",
            "getServerData",
            "fetchData",
          ],
          correctAnswer: 1,
          explanation:
            "getStaticProps fetches data at build time for static generation, creating pre-rendered pages.",
        },
      ],
      intermediate: [
        {
          id: "next-i-1",
          question: "What is Incremental Static Regeneration (ISR)?",
          options: [
            "A method to update static pages after build without full rebuild",
            "A CSS optimization technique",
            "A database replication strategy",
            "A client-side caching mechanism",
          ],
          correctAnswer: 0,
          explanation:
            "ISR allows updating static pages after deployment using the revalidate option, regenerating pages on-demand or at intervals.",
        },
        {
          id: "next-i-2",
          question: "How do you implement API routes in Next.js App Router?",
          options: [
            "Create files in pages/api/",
            "Create route.js files in app/api/ directory",
            "Use external API server only",
            "Define in next.config.js",
          ],
          correctAnswer: 1,
          explanation:
            "In App Router, API routes are created using route.js (or route.ts) files in the app directory with HTTP method handlers.",
        },
        {
          id: "next-i-3",
          question: "What is the purpose of middleware.js in Next.js?",
          options: [
            "To style components",
            "To run code before a request is completed (auth, redirects, headers)",
            "To fetch data from database",
            "To create React components",
          ],
          correctAnswer: 1,
          explanation:
            "Middleware runs before routes are rendered, enabling authentication, redirects, header modification, and A/B testing.",
        },
        {
          id: "next-i-4",
          question:
            "What is the difference between Server and Client Components?",
          options: [
            "No difference, just naming convention",
            "Server renders on server (no JS bundle), Client enables interactivity",
            "Server is faster, Client is slower",
            "Client runs on server, Server runs on client",
          ],
          correctAnswer: 1,
          explanation:
            "Server Components render on the server without JavaScript bundle. Client Components enable hooks, events, and browser APIs.",
        },
        {
          id: "next-i-5",
          question: "How do you implement parallel routes in Next.js 13?",
          options: [
            "Using @folder naming convention",
            "Using parallel.js files",
            "Importing multiple pages",
            "It's not supported",
          ],
          correctAnswer: 0,
          explanation:
            "Parallel routes use @folder naming (e.g., @analytics, @team) to render multiple pages in the same layout simultaneously.",
        },
        {
          id: "next-i-6",
          question: "What is the purpose of loading.js in App Router?",
          options: [
            "To load external scripts",
            "To create automatic loading UI with Suspense boundaries",
            "To lazy load components",
            "To preload images",
          ],
          correctAnswer: 1,
          explanation:
            "loading.js creates instant loading states using React Suspense, showing fallback UI while content loads.",
        },
        {
          id: "next-i-7",
          question: "How do you invalidate cache in Next.js App Router?",
          options: [
            "Delete .next folder",
            "Use revalidatePath() or revalidateTag() functions",
            "Restart server",
            "Clear browser cache",
          ],
          correctAnswer: 1,
          explanation:
            "revalidatePath() and revalidateTag() allow on-demand cache revalidation in Server Actions or Route Handlers.",
        },
        {
          id: "next-i-8",
          question: "What is the purpose of generateStaticParams?",
          options: [
            "To generate random parameters",
            "To define which dynamic routes to pre-render at build time",
            "To create URL query strings",
            "To validate form inputs",
          ],
          correctAnswer: 1,
          explanation:
            "generateStaticParams specifies dynamic route segments to pre-render at build time, replacing getStaticPaths.",
        },
        {
          id: "next-i-9",
          question: "How do you implement streaming in Next.js 13?",
          options: [
            "Using Suspense boundaries and async Server Components",
            "Using stream.js files",
            "Installing streaming package",
            "It requires external server",
          ],
          correctAnswer: 0,
          explanation:
            "Streaming uses React Suspense with async Server Components to progressively render and send content to the client.",
        },
        {
          id: "next-i-10",
          question: "What is the purpose of error.js in App Router?",
          options: [
            "To log errors to console",
            "To create error boundaries and handle errors in route segments",
            "To validate forms",
            "To debug code",
          ],
          correctAnswer: 1,
          explanation:
            "error.js automatically creates error boundaries for route segments, catching and displaying errors gracefully.",
        },
      ],
      advanced: [
        {
          id: "next-a-1",
          question: "How does React Server Components improve performance?",
          options: [
            "By reducing server load",
            "Zero-bundle size for server components, reduced client JavaScript",
            "By caching all requests",
            "By using CDN automatically",
          ],
          correctAnswer: 1,
          explanation:
            "RSC runs on server without sending code to client, reducing bundle size, improving initial load, and enabling direct database access.",
        },
        {
          id: "next-a-2",
          question:
            "What is the difference between static and dynamic rendering in App Router?",
          options: [
            "Static is faster, dynamic is slower",
            "Static renders at build time, dynamic renders per request",
            "No difference in App Router",
            "Static uses cache, dynamic doesn't",
          ],
          correctAnswer: 1,
          explanation:
            "Static rendering happens at build time and is cached. Dynamic rendering happens per request when using dynamic functions or uncached data.",
        },
        {
          id: "next-a-3",
          question: "How do you implement Server Actions in Next.js 13?",
          options: [
            "Create async functions with 'use server' directive",
            "Use serverAction.js files",
            "Install server-actions package",
            "Use getServerSideProps",
          ],
          correctAnswer: 0,
          explanation:
            "Server Actions are async functions marked with 'use server' that run on the server, enabling mutations without API routes.",
        },
        {
          id: "next-a-4",
          question: "What is the purpose of Route Handlers vs Server Actions?",
          options: [
            "They are identical",
            "Route Handlers for external APIs, Server Actions for form mutations",
            "Route Handlers are deprecated",
            "Server Actions are only for authentication",
          ],
          correctAnswer: 1,
          explanation:
            "Route Handlers (route.js) handle external API requests. Server Actions handle form submissions and mutations from Client Components.",
        },
        {
          id: "next-a-5",
          question: "How does Next.js handle automatic static optimization?",
          options: [
            "By manually configuring each page",
            "Automatically pre-renders pages without blocking data requirements",
            "By using CDN only",
            "It requires getStaticProps on every page",
          ],
          correctAnswer: 1,
          explanation:
            "Next.js automatically determines if a page can be statically generated and pre-renders it if no blocking data is required.",
        },
        {
          id: "next-a-6",
          question: "What is the purpose of Partial Prerendering (PPR)?",
          options: [
            "To render some pages at build time",
            "Combining static shell with dynamic content in single route",
            "To prerender images only",
            "To cache API responses",
          ],
          correctAnswer: 1,
          explanation:
            "PPR (experimental) renders static shell immediately while streaming dynamic content, combining benefits of static and dynamic rendering.",
        },
        {
          id: "next-a-7",
          question: "How do you implement route interception in Next.js?",
          options: [
            "Using (..) syntax in folder names",
            "Using intercept.js files",
            "Using middleware only",
            "It's not supported",
          ],
          correctAnswer: 0,
          explanation:
            "Route interception uses (.) (..) (...) syntax to intercept routes and display them in modals or overlays while maintaining URL.",
        },
        {
          id: "next-a-8",
          question: "What is the edge runtime in Next.js?",
          options: [
            "A CSS framework",
            "Lightweight runtime for executing code at edge locations globally",
            "A testing framework",
            "A database driver",
          ],
          correctAnswer: 1,
          explanation:
            "Edge runtime is a lightweight JavaScript runtime that runs closer to users globally, with limited Node.js APIs for better performance.",
        },
        {
          id: "next-a-9",
          question: "How do you optimize fonts in Next.js?",
          options: [
            "Using next/font for automatic font optimization and self-hosting",
            "By importing Google Fonts directly",
            "Using CDN links only",
            "Manual font file management",
          ],
          correctAnswer: 0,
          explanation:
            "next/font automatically optimizes fonts, eliminates external requests, self-hosts fonts, and prevents layout shift.",
        },
        {
          id: "next-a-10",
          question:
            "What is the purpose of fetch cache strategies in App Router?",
          options: [
            "To speed up development",
            "Control caching behavior with force-cache, no-store, revalidate options",
            "To cache images only",
            "To manage state",
          ],
          correctAnswer: 1,
          explanation:
            "Fetch cache options (force-cache, no-store, revalidate) control how and when data is cached and revalidated in Server Components.",
        },
      ],
    },
    javascript: {
      beginner: [
        {
          id: "js-b-1",
          question:
            "Which keyword is used to declare a variable that can be reassigned?",
          options: ["const", "let", "var", "Both let and var"],
          correctAnswer: 3,
          explanation:
            "Both let and var allow reassignment, though let has block scope while var has function scope.",
        },
        {
          id: "js-b-2",
          question: "What is the output of typeof null?",
          options: ["null", "undefined", "object", "string"],
          correctAnswer: 2,
          explanation:
            'This is a historical bug in JavaScript. typeof null returns "object" even though null is a primitive.',
        },
        {
          id: "js-b-3",
          question: "How do you create an array in JavaScript?",
          options: ["array()", "new Array[]", "[]", "Array{}"],
          correctAnswer: 2,
          explanation:
            "Square brackets [] are the literal syntax for creating arrays in JavaScript.",
        },
        {
          id: "js-b-4",
          question: "What does the === operator do?",
          options: [
            "Assigns a value",
            "Compares values only",
            "Compares both value and type",
            "Performs mathematical operation",
          ],
          correctAnswer: 2,
          explanation:
            "The strict equality operator (===) compares both value and type without type coercion.",
        },
        {
          id: "js-b-5",
          question: "Which method adds an element to the end of an array?",
          options: ["push()", "pop()", "shift()", "unshift()"],
          correctAnswer: 0,
          explanation:
            "push() adds one or more elements to the end of an array and returns the new length.",
        },
        {
          id: "js-b-6",
          question: "What is a function in JavaScript?",
          options: [
            "A type of variable",
            "A reusable block of code",
            "A data type",
            "An HTML element",
          ],
          correctAnswer: 1,
          explanation:
            "A function is a reusable block of code designed to perform a particular task.",
        },
        {
          id: "js-b-7",
          question: "How do you write a single-line comment in JavaScript?",
          options: [
            "<!-- comment -->",
            "// comment",
            "/* comment */",
            "# comment",
          ],
          correctAnswer: 1,
          explanation:
            "Single-line comments in JavaScript start with two forward slashes //.",
        },
        {
          id: "js-b-8",
          question: "What is the correct syntax for an if statement?",
          options: [
            "if x > 5 then",
            "if (x > 5) {}",
            "if x > 5 {}",
            "if [x > 5]",
          ],
          correctAnswer: 1,
          explanation:
            "The condition in an if statement must be enclosed in parentheses, followed by curly braces for the code block.",
        },
        {
          id: "js-b-9",
          question: "Which method is used to find the length of a string?",
          options: ["size()", "length", "count()", "len()"],
          correctAnswer: 1,
          explanation:
            "The length property returns the number of characters in a string.",
        },
        {
          id: "js-b-10",
          question: "What is NaN in JavaScript?",
          options: ["A string", "Not a Number", "Null value", "An array"],
          correctAnswer: 1,
          explanation:
            'NaN stands for "Not a Number" and represents a value that is not a legal number.',
        },
      ],
      intermediate: [
        {
          id: "js-i-1",
          question: "What is a closure in JavaScript?",
          options: [
            "A way to close a browser window",
            "A function with access to its outer scope",
            "A method to end loops",
            "A type of array",
          ],
          correctAnswer: 1,
          explanation:
            "A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned.",
        },
        {
          id: "js-i-2",
          question: "What is the difference between null and undefined?",
          options: [
            "They are the same",
            "null is assigned, undefined is default for unassigned variables",
            "undefined is assigned, null is default",
            "Both are errors",
          ],
          correctAnswer: 1,
          explanation:
            "undefined means a variable has been declared but not assigned. null is an intentional assignment indicating no value.",
        },
        {
          id: "js-i-3",
          question: "What is event bubbling?",
          options: [
            "A animation effect",
            "Events propagating from child to parent elements",
            "Creating multiple events",
            "A way to delete events",
          ],
          correctAnswer: 1,
          explanation:
            "Event bubbling is when an event on a child element propagates up through its ancestors in the DOM.",
        },
        {
          id: "js-i-4",
          question: "What does the spread operator (...) do?",
          options: [
            "Divides numbers",
            "Expands iterable elements",
            "Creates loops",
            "Defines variables",
          ],
          correctAnswer: 1,
          explanation:
            "The spread operator expands iterable elements like arrays or objects into individual elements.",
        },
        {
          id: "js-i-5",
          question: "What is a Promise in JavaScript?",
          options: [
            "A guarantee of code execution",
            "An object representing eventual completion of async operation",
            "A type of loop",
            "A variable declaration",
          ],
          correctAnswer: 1,
          explanation:
            "A Promise represents the eventual result of an asynchronous operation, either fulfilled or rejected.",
        },
        {
          id: "js-i-6",
          question: "What is the purpose of the map() method?",
          options: [
            "To create navigation maps",
            "To create a new array by transforming each element",
            "To find elements in an array",
            "To sort an array",
          ],
          correctAnswer: 1,
          explanation:
            "map() creates a new array by calling a function on every element of the original array.",
        },
        {
          id: "js-i-7",
          question: "What is hoisting in JavaScript?",
          options: [
            "Moving elements up in the DOM",
            "Moving declarations to the top of their scope",
            "A sorting algorithm",
            "A styling technique",
          ],
          correctAnswer: 1,
          explanation:
            "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.",
        },
        {
          id: "js-i-8",
          question: "What is the purpose of async/await?",
          options: [
            "To create loops",
            "To handle asynchronous code in a synchronous manner",
            "To define classes",
            "To style elements",
          ],
          correctAnswer: 1,
          explanation:
            "async/await provides a cleaner syntax for working with Promises, making async code look synchronous.",
        },
        {
          id: "js-i-9",
          question: "What is destructuring in JavaScript?",
          options: [
            "Deleting objects",
            "Extracting values from arrays or objects into variables",
            "Breaking code",
            "Creating errors",
          ],
          correctAnswer: 1,
          explanation:
            "Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.",
        },
        {
          id: "js-i-10",
          question: "What is the purpose of the filter() method?",
          options: [
            "To remove duplicates",
            "To create a new array with elements that pass a test",
            "To sort an array",
            "To join arrays",
          ],
          correctAnswer: 1,
          explanation:
            "filter() creates a new array with all elements that pass the test implemented by the provided function.",
        },
      ],
      advanced: [
        {
          id: "js-a-1",
          question: "What is the event loop in JavaScript?",
          options: [
            "A for loop for events",
            "The mechanism that handles async callbacks",
            "A type of event listener",
            "A debugging tool",
          ],
          correctAnswer: 1,
          explanation:
            "The event loop is the mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel.",
        },
        {
          id: "js-a-2",
          question: "What is the difference between call() and apply()?",
          options: [
            "No difference",
            "call() takes arguments individually, apply() takes an array",
            "They work with different data types",
            "apply() is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "Both invoke functions with a specified this value, but call() takes arguments individually while apply() takes an array.",
        },
        {
          id: "js-a-3",
          question: "What is a WeakMap in JavaScript?",
          options: [
            "A map with weak performance",
            "A collection where keys are weakly referenced",
            "A deprecated feature",
            "A map without values",
          ],
          correctAnswer: 1,
          explanation:
            "WeakMap holds weak references to keys, allowing garbage collection of entries when no other references exist.",
        },
        {
          id: "js-a-4",
          question: "What is the purpose of Symbol in JavaScript?",
          options: [
            "To create unique identifiers",
            "To define mathematical symbols",
            "To create icons",
            "To handle errors",
          ],
          correctAnswer: 0,
          explanation:
            "Symbol creates unique, immutable primitive values often used as object property keys to avoid name collisions.",
        },
        {
          id: "js-a-5",
          question: "What is the Temporal Dead Zone (TDZ)?",
          options: [
            "A time-related bug",
            "The period between entering scope and variable initialization",
            "A deprecated feature",
            "A memory leak issue",
          ],
          correctAnswer: 1,
          explanation:
            "TDZ is the period where a variable exists but cannot be accessed, between entering the scope and the declaration.",
        },
        {
          id: "js-a-6",
          question: "What is a Proxy in JavaScript?",
          options: [
            "A network configuration",
            "An object that intercepts operations on another object",
            "A design pattern",
            "A security feature",
          ],
          correctAnswer: 1,
          explanation:
            "Proxy allows you to create a wrapper for an object to intercept and customize fundamental operations like property lookup.",
        },
        {
          id: "js-a-7",
          question: "What is the purpose of generators in JavaScript?",
          options: [
            "To generate random numbers",
            "To create functions that can be paused and resumed",
            "To generate HTML",
            "To create components",
          ],
          correctAnswer: 1,
          explanation:
            "Generators are functions that can be paused and resumed, allowing for iterative algorithms with maintained state.",
        },
        {
          id: "js-a-8",
          question: "What is tree shaking?",
          options: [
            "A DOM manipulation technique",
            "Eliminating dead code during bundling",
            "A CSS animation",
            "A testing approach",
          ],
          correctAnswer: 1,
          explanation:
            "Tree shaking is a dead code elimination technique that removes unused exports from the final bundle.",
        },
        {
          id: "js-a-9",
          question: "What is the purpose of Object.freeze()?",
          options: [
            "To stop animations",
            "To make an object immutable",
            "To pause execution",
            "To cache objects",
          ],
          correctAnswer: 1,
          explanation:
            "Object.freeze() prevents new properties from being added and existing properties from being changed or removed.",
        },
        {
          id: "js-a-10",
          question: "What is memoization?",
          options: [
            "A memory leak",
            "Caching function results for repeated calls",
            "A debugging technique",
            "A way to store variables",
          ],
          correctAnswer: 1,
          explanation:
            "Memoization is an optimization technique that caches the results of expensive function calls to speed up repeated calls.",
        },
      ],
    },
    htmlcss: {
      beginner: [
        {
          id: "html-b-1",
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language",
          ],
          correctAnswer: 0,
          explanation:
            "HTML stands for Hyper Text Markup Language, the standard markup language for web pages.",
        },
        {
          id: "html-b-2",
          question: "Which CSS property is used to change the text color?",
          options: ["font-color", "text-color", "color", "foreground"],
          correctAnswer: 2,
          explanation:
            "The color property is used to set the color of text content.",
        },
        {
          id: "html-b-3",
          question: "What is the correct HTML element for the largest heading?",
          options: ["<heading>", "<h6>", "<h1>", "<head>"],
          correctAnswer: 2,
          explanation:
            "<h1> defines the largest heading, with <h6> being the smallest.",
        },
        {
          id: "html-b-4",
          question:
            "Which CSS property is most commonly used to control the space around elements?",
          options: ["padding", "margin", "gap", "border"],
          correctAnswer: 1,
          explanation:
            "margin controls the space outside an element's border. padding controls space inside the border, and gap controls spacing in flex/grid containers.",
        },
        {
          id: "html-b-5",
          question: "What is the correct HTML for creating a hyperlink?",
          options: [
            '<a href="url">link</a>',
            '<link href="url">',
            "<hyperlink>url</hyperlink>",
            "<url>link</url>",
          ],
          correctAnswer: 0,
          explanation:
            "The <a> (anchor) element with href attribute creates hyperlinks.",
        },
        {
          id: "html-b-6",
          question:
            "Which CSS property is used to change the background color?",
          options: [
            "bgcolor",
            "background-color",
            "color-background",
            "back-color",
          ],
          correctAnswer: 1,
          explanation:
            "background-color is the CSS property used to set the background color of an element.",
        },
        {
          id: "html-b-7",
          question:
            "What is the correct HTML element for inserting a line break?",
          options: ["<break>", "<lb>", "<br>", "<newline>"],
          correctAnswer: 2,
          explanation:
            "<br> is the HTML element for inserting a single line break.",
        },
        {
          id: "html-b-8",
          question:
            "Which HTML attribute specifies an alternate text for an image?",
          options: ["title", "alt", "src", "description"],
          correctAnswer: 1,
          explanation:
            "The alt attribute provides alternative text for an image if it cannot be displayed.",
        },
        {
          id: "html-b-9",
          question: "What is the default display property of a <div>?",
          options: ["inline", "block", "flex", "inline-block"],
          correctAnswer: 1,
          explanation:
            "<div> elements are block-level elements by default, taking up full width.",
        },
        {
          id: "html-b-10",
          question: "Which CSS property makes text bold?",
          options: [
            "font-style",
            "font-weight",
            "text-decoration",
            "font-bold",
          ],
          correctAnswer: 1,
          explanation:
            "font-weight is used to set how bold text should appear.",
        },
      ],
      intermediate: [
        {
          id: "html-i-1",
          question: "What is the CSS box model?",
          options: [
            "A 3D modeling technique",
            "Content, padding, border, and margin layout model",
            "A JavaScript framework",
            "A design pattern",
          ],
          correctAnswer: 1,
          explanation:
            "The CSS box model describes how elements are rendered with content, padding, border, and margin.",
        },
        {
          id: "html-i-2",
          question:
            "What is the difference between display: flex and display: grid?",
          options: [
            "No difference",
            "Flex is 1D, Grid is 2D layout system",
            "Grid is older than Flex",
            "Flex is only for mobile",
          ],
          correctAnswer: 1,
          explanation:
            "Flexbox is primarily for one-dimensional layouts, while Grid is for two-dimensional layouts.",
        },
        {
          id: "html-i-3",
          question: "What is CSS specificity?",
          options: [
            "How specific CSS code is",
            "The algorithm that determines which styles apply",
            "A CSS framework",
            "A performance metric",
          ],
          correctAnswer: 1,
          explanation:
            "Specificity is the algorithm browsers use to determine which CSS property values are most relevant to an element.",
        },
        {
          id: "html-i-4",
          question: "What are CSS pseudo-elements?",
          options: [
            "Fake elements",
            "Keywords to style specific parts of an element",
            "JavaScript-created elements",
            "Hidden elements",
          ],
          correctAnswer: 1,
          explanation:
            "Pseudo-elements like ::before and ::after allow styling of specific parts of an element.",
        },
        {
          id: "html-i-5",
          question: "What is the purpose of semantic HTML?",
          options: [
            "To make code prettier",
            "To give meaning and structure for accessibility and SEO",
            "To reduce file size",
            "To improve performance",
          ],
          correctAnswer: 1,
          explanation:
            "Semantic HTML uses elements that describe their meaning, improving accessibility and SEO.",
        },
        {
          id: "html-i-6",
          question: "What is a CSS media query used for?",
          options: [
            "To play media files",
            "To apply styles based on device characteristics",
            "To query databases",
            "To handle user input",
          ],
          correctAnswer: 1,
          explanation:
            "Media queries allow applying CSS rules based on device characteristics like screen width.",
        },
        {
          id: "html-i-7",
          question: "What is the purpose of position: relative?",
          options: [
            "To remove element from flow",
            "To position relative to its normal position",
            "To center elements",
            "To create overlays",
          ],
          correctAnswer: 1,
          explanation:
            "position: relative positions an element relative to its normal position without removing it from the document flow.",
        },
        {
          id: "html-i-8",
          question: "What is the difference between em and rem units?",
          options: [
            "No difference",
            "em is relative to parent, rem is relative to root",
            "rem is older",
            "em is only for fonts",
          ],
          correctAnswer: 1,
          explanation:
            "em units are relative to the parent element's font size, while rem is relative to the root element.",
        },
        {
          id: "html-i-9",
          question: "What is the z-index property used for?",
          options: [
            "Zoom level",
            "Stack order of positioned elements",
            "Z-axis rotation",
            "Element compression",
          ],
          correctAnswer: 1,
          explanation:
            "z-index specifies the stack order of positioned elements, determining which elements appear on top.",
        },
        {
          id: "html-i-10",
          question: "What is the purpose of the <meta viewport> tag?",
          options: [
            "To add metadata",
            "To control the viewport on mobile devices",
            "To set page title",
            "To link stylesheets",
          ],
          correctAnswer: 1,
          explanation:
            "The viewport meta tag controls how the page is displayed on mobile devices, enabling responsive design.",
        },
      ],
      advanced: [
        {
          id: "html-a-1",
          question: "What is CSS containment?",
          options: [
            "A way to contain floats",
            "A performance optimization isolating parts of the DOM",
            "A flexbox property",
            "A security feature",
          ],
          correctAnswer: 1,
          explanation:
            "CSS containment allows isolating parts of the page, improving rendering performance.",
        },
        {
          id: "html-a-2",
          question: "What are CSS custom properties (variables)?",
          options: [
            "Pre-defined CSS values",
            "User-defined values that can be reused throughout CSS",
            "JavaScript variables in CSS",
            "Deprecated features",
          ],
          correctAnswer: 1,
          explanation:
            "CSS custom properties (--var-name) allow defining reusable values that can be updated dynamically.",
        },
        {
          id: "html-a-3",
          question: "What is the purpose of will-change CSS property?",
          options: [
            "To detect changes",
            "To hint browsers about upcoming element changes",
            "To prevent changes",
            "To log changes",
          ],
          correctAnswer: 1,
          explanation:
            "will-change hints to browsers about expected changes, allowing optimization before they occur.",
        },
        {
          id: "html-a-4",
          question: "What is ARIA and why is it important?",
          options: [
            "A CSS framework",
            "Accessible Rich Internet Applications for assistive technologies",
            "A JavaScript library",
            "A testing framework",
          ],
          correctAnswer: 1,
          explanation:
            "ARIA provides attributes to make web content more accessible to people using assistive technologies.",
        },
        {
          id: "html-a-5",
          question: "What is the CSS cascade?",
          options: [
            "A waterfall effect",
            "The algorithm determining which styles apply when multiple rules match",
            "A layout method",
            "A animation type",
          ],
          correctAnswer: 1,
          explanation:
            "The cascade is the algorithm that defines how CSS rules are combined when they conflict.",
        },
        {
          id: "html-a-6",
          question: "What is Critical CSS?",
          options: [
            "Important CSS rules",
            "Above-the-fold CSS inlined for faster rendering",
            "Error handling in CSS",
            "CSS for critical applications",
          ],
          correctAnswer: 1,
          explanation:
            "Critical CSS is the minimum CSS needed to render above-the-fold content, inlined for faster initial paint.",
        },
        {
          id: "html-a-7",
          question: "What is the purpose of the :is() pseudo-class?",
          options: [
            "To check element types",
            "To simplify complex selectors by matching any of the provided selectors",
            "To validate CSS",
            "To check values",
          ],
          correctAnswer: 1,
          explanation:
            ":is() takes a selector list and matches any element that can be selected by one of the selectors.",
        },
        {
          id: "html-a-8",
          question:
            "What is the difference between @import and <link> for CSS?",
          options: [
            "No difference",
            "<link> is parallel, @import is blocking",
            "@import is faster",
            "@import is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "<link> loads CSS in parallel, while @import can block rendering and is loaded sequentially.",
        },
        {
          id: "html-a-9",
          question: "What is a stacking context in CSS?",
          options: [
            "A flexbox feature",
            "A three-dimensional conceptualization of HTML elements",
            "A way to stack images",
            "A CSS methodology",
          ],
          correctAnswer: 1,
          explanation:
            "A stacking context is a group of elements that are painted together and determines how z-index works.",
        },
        {
          id: "html-a-10",
          question: "What is the CSS Grid subgrid feature?",
          options: [
            "A smaller grid",
            "Allows nested grids to inherit parent grid tracks",
            "A grid inside another grid",
            "A mobile-only grid",
          ],
          correctAnswer: 1,
          explanation:
            "Subgrid allows a nested grid to use the track definition of its parent grid for consistent alignment.",
        },
      ],
    },
    typescript: {
      beginner: [
        {
          id: "ts-b-1",
          question: "What is TypeScript?",
          options: [
            "A new programming language",
            "A typed superset of JavaScript",
            "A JavaScript framework",
            "A database query language",
          ],
          correctAnswer: 1,
          explanation:
            "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
        },
        {
          id: "ts-b-2",
          question: "How do you define a variable with a specific type?",
          options: [
            "let x: number = 5",
            "let x = number(5)",
            "number let x = 5",
            "let x as number = 5",
          ],
          correctAnswer: 0,
          explanation:
            "Type annotations in TypeScript use a colon followed by the type after the variable name.",
        },
        {
          id: "ts-b-3",
          question: "What is an interface in TypeScript?",
          options: [
            "A UI component",
            "A contract defining the structure of an object",
            "A function type",
            "A class method",
          ],
          correctAnswer: 1,
          explanation:
            "An interface defines the shape of an object, specifying what properties and methods it must have.",
        },
        {
          id: "ts-b-4",
          question: "What is the any type in TypeScript?",
          options: [
            "A type for arrays",
            "A type that disables type checking",
            "A type for objects",
            "A type for functions",
          ],
          correctAnswer: 1,
          explanation:
            "The any type allows any value and effectively disables type checking for that variable.",
        },
        {
          id: "ts-b-5",
          question: "How do you make a property optional in an interface?",
          options: [
            "Using optional keyword",
            "Using ? after the property name",
            "Using [] brackets",
            "Using undefined type",
          ],
          correctAnswer: 1,
          explanation:
            "Adding ? after the property name makes it optional: { name?: string }",
        },
        {
          id: "ts-b-6",
          question: "What file extension is used for TypeScript files?",
          options: [".js", ".ts", ".typescript", ".tp"],
          correctAnswer: 1,
          explanation:
            "TypeScript files use the .ts extension, or .tsx for files containing JSX.",
        },
        {
          id: "ts-b-7",
          question: "What is type inference in TypeScript?",
          options: [
            "Manually defining types",
            "Automatic detection of types by the compiler",
            "Converting types",
            "Type validation",
          ],
          correctAnswer: 1,
          explanation:
            "Type inference allows TypeScript to automatically determine types based on assigned values.",
        },
        {
          id: "ts-b-8",
          question: "What is a union type?",
          options: [
            "A type that combines two objects",
            "A type that can be one of several types",
            "A type for arrays",
            "A type for unions",
          ],
          correctAnswer: 1,
          explanation:
            "Union types allow a variable to be one of several types, using the | operator: string | number.",
        },
        {
          id: "ts-b-9",
          question: "How do you define an array of numbers in TypeScript?",
          options: [
            "Array<number> or number[]",
            "numbers[]",
            "[number]",
            "array(number)",
          ],
          correctAnswer: 0,
          explanation:
            "Arrays can be typed using Array<number> generic syntax or number[] shorthand syntax.",
        },
        {
          id: "ts-b-10",
          question: "What command compiles TypeScript to JavaScript?",
          options: ["ts-compile", "typescript", "tsc", "npm build"],
          correctAnswer: 2,
          explanation:
            "The TypeScript compiler command is tsc, which compiles .ts files to .js files.",
        },
      ],
      intermediate: [
        {
          id: "ts-i-1",
          question: "What is the difference between type and interface?",
          options: [
            "No difference",
            "Interfaces are extendable, types use unions and intersections",
            "Types are for objects only",
            "Interfaces are deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "While both can describe object shapes, interfaces support declaration merging and are extendable, while types support unions and intersections.",
        },
        {
          id: "ts-i-2",
          question: "What are generics in TypeScript?",
          options: [
            "General purpose functions",
            "Reusable components that work with multiple types",
            "Default types",
            "Type shortcuts",
          ],
          correctAnswer: 1,
          explanation:
            "Generics allow creating reusable components that can work with a variety of types rather than a single one.",
        },
        {
          id: "ts-i-3",
          question: "What is a type guard?",
          options: [
            "A security feature",
            "A runtime check that narrows types in a scope",
            "A type validation tool",
            "A debugging feature",
          ],
          correctAnswer: 1,
          explanation:
            "Type guards are expressions that perform runtime checks to narrow down types within conditional blocks.",
        },
        {
          id: "ts-i-4",
          question: "What is the unknown type?",
          options: [
            "Same as any",
            "A type-safe alternative to any requiring type checking",
            "An error type",
            "A deprecated type",
          ],
          correctAnswer: 1,
          explanation:
            "unknown is like any but safer - you must perform type checking before using the value.",
        },
        {
          id: "ts-i-5",
          question: "What is the purpose of the readonly modifier?",
          options: [
            "To hide properties",
            "To prevent property reassignment after initialization",
            "To optimize performance",
            "To create constants",
          ],
          correctAnswer: 1,
          explanation:
            "readonly marks properties that cannot be changed after the object is created.",
        },
        {
          id: "ts-i-6",
          question: "What is an intersection type?",
          options: [
            "A type that is part of two types",
            "A type combining multiple types into one",
            "A type for coordinates",
            "A type for comparisons",
          ],
          correctAnswer: 1,
          explanation:
            "Intersection types combine multiple types using &, requiring all properties from each type.",
        },
        {
          id: "ts-i-7",
          question: "What is the never type used for?",
          options: [
            "Empty values",
            "Functions that never return or never possible states",
            "Null values",
            "Optional values",
          ],
          correctAnswer: 1,
          explanation:
            "never represents values that never occur, like functions that throw or have infinite loops.",
        },
        {
          id: "ts-i-8",
          question: "What is a tuple in TypeScript?",
          options: [
            "A special array",
            "A fixed-length array with known types at each position",
            "A key-value pair",
            "A type of object",
          ],
          correctAnswer: 1,
          explanation:
            "Tuples are arrays with a fixed number of elements whose types are known at each position.",
        },
        {
          id: "ts-i-9",
          question: "What is the keyof operator?",
          options: [
            "Gets all keys of an object",
            "Creates a union type of all property names of a type",
            "Validates keys",
            "Creates new keys",
          ],
          correctAnswer: 1,
          explanation:
            "keyof creates a union type of all property names (keys) of the given type.",
        },
        {
          id: "ts-i-10",
          question: "What are mapped types?",
          options: [
            "Types for maps",
            "Types created by transforming properties of existing types",
            "Location types",
            "Array transformation types",
          ],
          correctAnswer: 1,
          explanation:
            "Mapped types create new types by transforming each property of an existing type.",
        },
      ],
      advanced: [
        {
          id: "ts-a-1",
          question: "What are conditional types in TypeScript?",
          options: [
            "Types with if statements",
            "Types that select one of two types based on a condition",
            "Runtime type checks",
            "Boolean types",
          ],
          correctAnswer: 1,
          explanation:
            "Conditional types select one of two possible types based on a condition using extends keyword.",
        },
        {
          id: "ts-a-2",
          question: "What is the infer keyword used for?",
          options: [
            "Type inference",
            "Extracting types within conditional types",
            "Inferring function parameters",
            "Creating new types",
          ],
          correctAnswer: 1,
          explanation:
            "infer is used in conditional types to extract and create new type variables from other types.",
        },
        {
          id: "ts-a-3",
          question: "What is declaration merging?",
          options: [
            "Combining JavaScript files",
            "Compiler combining multiple declarations with same name",
            "Merging type definitions",
            "Combining modules",
          ],
          correctAnswer: 1,
          explanation:
            "Declaration merging is when the compiler merges two or more declarations with the same name into one.",
        },
        {
          id: "ts-a-4",
          question: "What is a discriminated union?",
          options: [
            "A union with special syntax",
            "A union type with a common property for type narrowing",
            "A type of error handling",
            "A deprecated feature",
          ],
          correctAnswer: 1,
          explanation:
            "Discriminated unions use a common property (discriminant) to narrow the type in conditionals.",
        },
        {
          id: "ts-a-5",
          question: "What is the purpose of the satisfies operator?",
          options: [
            "To check satisfaction of conditions",
            "To validate a value matches a type while preserving its inferred type",
            "To create constraints",
            "To satisfy interfaces",
          ],
          correctAnswer: 1,
          explanation:
            "satisfies validates that a value conforms to a type while keeping the narrowest inferred type.",
        },
        {
          id: "ts-a-6",
          question: "What are template literal types?",
          options: [
            "Types for template strings",
            "Types created from string literal combinations",
            "HTML template types",
            "Generic string types",
          ],
          correctAnswer: 1,
          explanation:
            "Template literal types create new string literal types by combining string literals.",
        },
        {
          id: "ts-a-7",
          question: "What is variance in TypeScript generics?",
          options: [
            "Type variation",
            "How subtype relationships work with generics",
            "Generic constraints",
            "Type differences",
          ],
          correctAnswer: 1,
          explanation:
            "Variance describes how subtype relationships of complex types relate to subtypes of their components.",
        },
        {
          id: "ts-a-8",
          question: "What is a type predicate?",
          options: [
            "A type condition",
            "A return type assertion that narrows types",
            "A type validation",
            "A predicate function",
          ],
          correctAnswer: 1,
          explanation:
            "Type predicates (param is Type) are special return types that narrow types in the calling scope.",
        },
        {
          id: "ts-a-9",
          question: "What is the purpose of the const assertion?",
          options: [
            "Creating constants",
            "Making literal types as narrow as possible",
            "Preventing mutations",
            "Constant folding",
          ],
          correctAnswer: 1,
          explanation:
            "as const makes types as narrow as possible, treating arrays as tuples and objects as readonly.",
        },
        {
          id: "ts-a-10",
          question: "What are utility types in TypeScript?",
          options: [
            "Helper functions",
            "Built-in types for common type transformations",
            "Debugging tools",
            "Performance types",
          ],
          correctAnswer: 1,
          explanation:
            "Utility types like Partial, Required, Pick, and Omit are built-in types for common transformations.",
        },
      ],
    },
    vue: {
      beginner: [
        {
          id: "vue-b-1",
          question: "What is Vue.js?",
          options: [
            "JS library",
            "Progressive JS framework",
            "CSS framework",
            "Testing library",
          ],
          correctAnswer: 1,
          explanation:
            "Vue.js is a progressive JavaScript framework for building UIs.",
        },
        {
          id: "vue-b-2",
          question: "Which directive binds attributes?",
          options: ["v-bind", "v-model", "v-if", "v-for"],
          correctAnswer: 0,
          explanation: "v-bind binds element attributes to Vue instance data.",
        },
        {
          id: "vue-b-3",
          question: "How to create a Vue instance?",
          options: [
            "new Vue()",
            "Vue.create()",
            "createVueApp()",
            "VueInstance()",
          ],
          correctAnswer: 0,
          explanation: "Use new Vue({}) to create a Vue instance.",
        },
        {
          id: "vue-b-4",
          question: "Which lifecycle hook runs when component is created?",
          options: ["mounted", "created", "beforeCreate", "beforeMount"],
          correctAnswer: 1,
          explanation: "created hook runs after the instance is created.",
        },
        {
          id: "vue-b-5",
          question: "What directive is for conditional rendering?",
          options: ["v-show", "v-if", "v-else", "All of these"],
          correctAnswer: 3,
          explanation: "v-if, v-else, v-show handle conditional rendering.",
        },
        {
          id: "vue-b-6",
          question: "How to loop through array in template?",
          options: ["v-loop", "v-for", "v-repeat", "v-array"],
          correctAnswer: 1,
          explanation: "v-for directive loops through arrays/objects.",
        },
        {
          id: "vue-b-7",
          question: "What is v-model for?",
          options: [
            "Two-way data binding",
            "Model creation",
            "Data modeling",
            "View model",
          ],
          correctAnswer: 0,
          explanation: "v-model creates two-way data bindings on form inputs.",
        },
        {
          id: "vue-b-8",
          question: "What are Vue components?",
          options: [
            "Reusable Vue instances",
            "HTML elements",
            "CSS modules",
            "JS functions",
          ],
          correctAnswer: 0,
          explanation: "Components are reusable Vue instances with a name.",
        },
        {
          id: "vue-b-9",
          question: "How to pass data to child component?",
          options: ["v-bind", "props", "v-model", "data-binding"],
          correctAnswer: 1,
          explanation:
            "Props are custom attributes for passing data to children.",
        },
        {
          id: "vue-b-10",
          question: "What does $emit do?",
          options: [
            "Emits light",
            "Triggers parent event",
            "Sends HTTP request",
            "Creates event",
          ],
          correctAnswer: 1,
          explanation: "$emit triggers an event on the parent instance.",
        },
      ],
      intermediate: [
        {
          id: "vue-i-1",
          question: "What is Vuex?",
          options: [
            "State management",
            "Routing library",
            "Testing framework",
            "HTTP client",
          ],
          correctAnswer: 0,
          explanation: "Vuex is state management pattern + library for Vue.",
        },
        {
          id: "vue-i-2",
          question: "Difference between v-if and v-show?",
          options: [
            "v-if removes element, v-show toggles display",
            "No difference",
            "v-if faster",
            "v-show deprecated",
          ],
          correctAnswer: 0,
          explanation:
            "v-if removes element from DOM, v-show uses CSS display.",
        },
        {
          id: "vue-i-3",
          question: "What are computed properties?",
          options: [
            "Cached reactive properties",
            "Math functions",
            "Read-only data",
            "Async functions",
          ],
          correctAnswer: 0,
          explanation:
            "Computed properties cache results based on dependencies.",
        },
        {
          id: "vue-i-4",
          question: "What is Vue Router?",
          options: [
            "Official router",
            "Navigation component",
            "URL manager",
            "Route builder",
          ],
          correctAnswer: 0,
          explanation: "Vue Router is the official router for Vue.js.",
        },
        {
          id: "vue-i-5",
          question: "What are mixins?",
          options: [
            "Reusable component logic",
            "Color mixers",
            "Animation utilities",
            "Data mixers",
          ],
          correctAnswer: 0,
          explanation:
            "Mixins distribute reusable functionality across components.",
        },
        {
          id: "vue-i-6",
          question: "What is Nuxt.js?",
          options: [
            "Vue framework",
            "SSR framework",
            "Meta-framework",
            "All of these",
          ],
          correctAnswer: 3,
          explanation:
            "Nuxt.js is a meta-framework for Vue with SSR, routing, etc.",
        },
        {
          id: "vue-i-7",
          question: "What are Vue slots?",
          options: [
            "Content distribution",
            "Placeholders",
            "Component outlets",
            "All of these",
          ],
          correctAnswer: 3,
          explanation: "Slots are content distribution outlets in components.",
        },
        {
          id: "vue-i-8",
          question: "What is Vue CLI?",
          options: [
            "Command line tool",
            "Project scaffolding",
            "Build tool",
            "All of these",
          ],
          correctAnswer: 3,
          explanation: "Vue CLI is a full system for Vue development.",
        },
        {
          id: "vue-i-9",
          question: "What are watchers in Vue?",
          options: [
            "React to data changes",
            "Watch files",
            "Event listeners",
            "Observers",
          ],
          correctAnswer: 0,
          explanation: "Watchers perform actions when data changes.",
        },
        {
          id: "vue-i-10",
          question: "What is provide/inject?",
          options: [
            "Pass data deeply",
            "Dependency injection",
            "Avoid prop drilling",
            "All of these",
          ],
          correctAnswer: 3,
          explanation:
            "provide/inject allows ancestor to provide data to descendants.",
        },
      ],
      advanced: [
        {
          id: "vue-a-1",
          question: "What is Composition API?",
          options: [
            "New API using setup()",
            "Music composition",
            "Animation API",
            "Database API",
          ],
          correctAnswer: 0,
          explanation:
            "Composition API provides function-based component logic.",
        },
        {
          id: "vue-a-2",
          question: "What are custom directives?",
          options: [
            "User-created v- directives",
            "Special instructions",
            "Directive templates",
            "Extended v-model",
          ],
          correctAnswer: 0,
          explanation:
            "Custom directives allow creating reusable v- directives.",
        },
        {
          id: "vue-a-3",
          question: "What is server-side rendering?",
          options: [
            "Render on server",
            "Better SEO/performance",
            "Initial load benefit",
            "All of these",
          ],
          correctAnswer: 3,
          explanation:
            "SSR renders Vue on server for better initial performance.",
        },
        {
          id: "vue-a-4",
          question: "What is Vue 3 reactivity system?",
          options: [
            "Proxy-based",
            "Better performance",
            "Fine-grained reactivity",
            "All of these",
          ],
          correctAnswer: 3,
          explanation: "Vue 3 uses Proxy for better reactivity tracking.",
        },
        {
          id: "vue-a-5",
          question: "What is Teleport in Vue 3?",
          options: [
            "Render content elsewhere",
            "DOM teleportation",
            "Move components",
            "Portal feature",
          ],
          correctAnswer: 0,
          explanation: "<Teleport> renders content in different part of DOM.",
        },
        {
          id: "vue-a-6",
          question: "What are render functions?",
          options: [
            "Programmatic rendering",
            "Alternative to templates",
            "JS functions returning VNodes",
            "All of these",
          ],
          correctAnswer: 3,
          explanation:
            "Render functions provide programmatic rendering alternative.",
        },
        {
          id: "vue-a-7",
          question: "What is Suspense in Vue 3?",
          options: [
            "Async component handling",
            "Loading states",
            "Fallback content",
            "All of these",
          ],
          correctAnswer: 3,
          explanation:
            "<Suspense> handles async dependencies in component tree.",
        },
        {
          id: "vue-a-8",
          question: "What is Vue 3 reactivity transform?",
          options: [
            "$ref sugar syntax",
            "Reactive variables",
            "Compiler macro",
            "All of these",
          ],
          correctAnswer: 3,
          explanation:
            "Reactivity transform provides syntactic sugar for refs.",
        },
        {
          id: "vue-a-9",
          question: "What are plugin in Vue?",
          options: [
            "Add global functionality",
            "Extend Vue",
            "Add methods/properties",
            "All of these",
          ],
          correctAnswer: 3,
          explanation: "Plugins add global-level functionality to Vue.",
        },
        {
          id: "vue-a-10",
          question: "What is Vite with Vue?",
          options: [
            "Build tool",
            "Dev server",
            "Fast hot reload",
            "All of these",
          ],
          correctAnswer: 3,
          explanation: "Vite is fast build tool and dev server for Vue.",
        },
      ],
    },
    angular: {
      beginner: [
        {
          id: "angular-b-1",
          question: "What is Angular?",
          options: [
            "JS library",
            "TypeScript framework",
            "CSS framework",
            "Testing tool",
          ],
          correctAnswer: 1,
          explanation: "Angular is a TypeScript-based web framework.",
        },
        {
          id: "angular-b-2",
          question: "Primary language for Angular?",
          options: ["JavaScript", "TypeScript", "Java", "Dart"],
          correctAnswer: 1,
          explanation: "Angular is built with and primarily uses TypeScript.",
        },
        {
          id: "angular-b-3",
          question: "What is a component?",
          options: [
            "Template + class + metadata",
            "HTML piece",
            "Service",
            "Module",
          ],
          correctAnswer: 0,
          explanation: "Component = template + class + metadata.",
        },
        {
          id: "angular-b-4",
          question: "Component decorator?",
          options: ["@Component", "@NgComponent", "@AngularComponent", "@View"],
          correctAnswer: 0,
          explanation: "@Component decorator defines Angular components.",
        },
        {
          id: "angular-b-5",
          question: "What is data binding?",
          options: [
            "Connect component/template",
            "Bind databases",
            "Connect services",
            "Link modules",
          ],
          correctAnswer: 0,
          explanation: "Data binding connects component data to template.",
        },
        {
          id: "angular-b-6",
          question: "What is interpolation?",
          options: ["{{ expression }}", "[property]", "(event)", "*ngFor"],
          correctAnswer: 0,
          explanation: "{{ }} displays component properties in template.",
        },
        {
          id: "angular-b-7",
          question: "What is *ngFor?",
          options: [
            "Loop directive",
            "Conditional",
            "Style binding",
            "Event binding",
          ],
          correctAnswer: 0,
          explanation: "*ngFor repeats element for each item in list.",
        },
        {
          id: "angular-b-8",
          question: "What is *ngIf?",
          options: ["Conditional display", "Loop", "Style", "Event"],
          correctAnswer: 0,
          explanation: "*ngIf conditionally includes/excludes element.",
        },
        {
          id: "angular-b-9",
          question: "What are Angular modules?",
          options: [
            "All of these",
            "Organize app",
            "Container for components",
            "@NgModule class",
          ],
          correctAnswer: 0,
          explanation: "Modules organize app and contain components.",
        },
        {
          id: "angular-b-10",
          question: "How to create service?",
          options: ["@Injectable()", "@Service", "@Provider", "@Factory"],
          correctAnswer: 0,
          explanation: "Services use @Injectable() decorator.",
        },
      ],
      intermediate: [
        {
          id: "angular-i-1",
          question: "What is dependency injection?",
          options: [
            "Provide dependencies",
            "Inject HTML",
            "Testing method",
            "Security feature",
          ],
          correctAnswer: 0,
          explanation: "DI provides dependencies rather than creating them.",
        },
        {
          id: "angular-i-2",
          question: "What are directives?",
          options: [
            "Add behavior to elements",
            "All of these",
            "Template instructions",
            "DOM manipulators",
          ],
          correctAnswer: 1,
          explanation: "Directives add behavior to elements in DOM.",
        },
        {
          id: "angular-i-3",
          question: "Difference: ngOnInit vs constructor?",
          options: [
            "constructor for DI, ngOnInit for init",
            "No difference",
            "constructor faster",
            "ngOnInit deprecated",
          ],
          correctAnswer: 0,
          explanation: "Constructor for DI, ngOnInit for initialization logic.",
        },
        {
          id: "angular-i-4",
          question: "What is routing?",
          options: [
            "Navigation between views",
            "URL management",
            "All of these",
            "Route configuration",
          ],
          correctAnswer: 2,
          explanation: "Routing enables navigation between components.",
        },
        {
          id: "angular-i-5",
          question: "What are pipes?",
          options: [
            "All of these",
            "Data transformers",
            "Template formatters",
            "Value converters",
          ],
          correctAnswer: 0,
          explanation: "Pipes transform data in templates.",
        },
        {
          id: "angular-i-6",
          question: "What is RxJS in Angular?",
          options: [
            "Reactive programming",
            "All of these",
            "Observables library",
            "Async handling",
          ],
          correctAnswer: 1,
          explanation: "RxJS provides reactive programming with observables.",
        },
        {
          id: "angular-i-7",
          question: "What are observables?",
          options: [
            "Data streams",
            "Async data source",
            "All of these",
            "Push-based",
          ],
          correctAnswer: 2,
          explanation: "Observables represent data streams over time.",
        },
        {
          id: "angular-i-8",
          question: "What is Angular CLI?",
          options: [
            "All of these",
            "Command line tool",
            "Project generator",
            "Build tool",
          ],
          correctAnswer: 0,
          explanation: "Angular CLI is tool for development workflow.",
        },
        {
          id: "angular-i-9",
          question: "What is lazy loading?",
          options: [
            "Load modules on demand",
            "All of these",
            "Performance optimization",
            "Reduce initial bundle",
          ],
          correctAnswer: 1,
          explanation: "Lazy loading loads modules only when needed.",
        },
        {
          id: "angular-i-10",
          question: "What is change detection?",
          options: [
            "Update view when data changes",
            "Angular mechanism",
            "All of these",
            "Zone.js based",
          ],
          correctAnswer: 2,
          explanation: "Change detection updates view when data changes.",
        },
      ],
      advanced: [
        {
          id: "angular-a-1",
          question: "What is Angular Ivy?",
          options: [
            "All of these",
            "Next-gen renderer",
            "Compiler improvements",
            "Smaller bundles",
          ],
          correctAnswer: 0,
          explanation: "Ivy is next-generation compilation/render pipeline.",
        },
        {
          id: "angular-a-2",
          question: "What is AOT compilation?",
          options: [
            "Ahead-of-Time",
            "All of these",
            "Build-time compilation",
            "Performance",
          ],
          correctAnswer: 1,
          explanation: "AOT compiles templates at build time.",
        },
        {
          id: "angular-a-3",
          question: "What are resolvers?",
          options: [
            "Pre-route data loading",
            "Route guards",
            "Data prefetching",
            "All of these",
          ],
          correctAnswer: 0,
          explanation: "Resolvers fetch data before activating route.",
        },
        {
          id: "angular-a-4",
          question: "What is Angular Universal?",
          options: [
            "Server-side rendering",
            "SSR framework",
            "All of these",
            "SEO optimization",
          ],
          correctAnswer: 2,
          explanation: "Universal enables SSR for Angular apps.",
        },
        {
          id: "angular-a-5",
          question: "What are schematics?",
          options: [
            "All of these",
            "Code generators",
            "Scaffolding tools",
            "CLI generators",
          ],
          correctAnswer: 0,
          explanation: "Schematics generate/modify code in Angular projects.",
        },
        {
          id: "angular-a-6",
          question: "What is Zone.js?",
          options: [
            "Execution context",
            "All of these",
            "Change detection trigger",
            "Monkey patches APIs",
          ],
          correctAnswer: 1,
          explanation:
            "Zone.js provides execution context for change detection.",
        },
        {
          id: "angular-a-7",
          question: "What are standalone components?",
          options: [
            "No module needed",
            "Angular 14+",
            "All of these",
            "Self-contained",
          ],
          correctAnswer: 2,
          explanation: "Standalone components don't require NgModule.",
        },
        {
          id: "angular-a-8",
          question: "What is signals in Angular?",
          options: [
            "All of these",
            "New reactivity system",
            "Fine-grained updates",
            "Angular 16+",
          ],
          correctAnswer: 0,
          explanation:
            "Signals provide fine-grained reactivity in Angular 16+.",
        },
        {
          id: "angular-a-9",
          question: "What is hydration in Angular?",
          options: [
            "SSR to CSR transition",
            "All of these",
            "Reuse server-rendered DOM",
            "Performance",
          ],
          correctAnswer: 1,
          explanation: "Hydration reuses server-rendered DOM on client.",
        },
        {
          id: "angular-a-10",
          question: "What is Nx with Angular?",
          options: [
            "Monorepo tool",
            "Build system",
            "All of these",
            "Code generation",
          ],
          correctAnswer: 2,
          explanation: "Nx is monorepo/build system for Angular projects.",
        },
      ],
    },
  },
  backend: {
    nodejs: {
      beginner: [
        {
          id: "node-b-1",
          question: "What is Node.js?",
          options: [
            "A web browser",
            "A JavaScript runtime built on Chrome's V8 engine",
            "A database system",
            "A frontend framework",
          ],
          correctAnswer: 1,
          explanation:
            "Node.js is a JavaScript runtime that allows running JavaScript on the server side.",
        },
        {
          id: "node-b-2",
          question: "What is npm?",
          options: [
            "Node Package Manager",
            "New Programming Module",
            "Node Process Manager",
            "Network Protocol Manager",
          ],
          correctAnswer: 0,
          explanation:
            "npm is the Node Package Manager, used to install, share, and manage JavaScript packages.",
        },
        {
          id: "node-b-3",
          question: "How do you import a module in Node.js?",
          options: [
            "import module",
            'require("module") or import',
            "include module",
            "load module",
          ],
          correctAnswer: 1,
          explanation:
            "Node.js supports both CommonJS require() and ES modules import syntax for importing modules.",
        },
        {
          id: "node-b-4",
          question: "What is the purpose of package.json?",
          options: [
            "To store JSON data",
            "To define project metadata and dependencies",
            "To configure the database",
            "To store user data",
          ],
          correctAnswer: 1,
          explanation:
            "package.json contains project metadata, dependencies, scripts, and configuration.",
        },
        {
          id: "node-b-5",
          question: "What is Express.js?",
          options: [
            "A database",
            "A minimal web framework for Node.js",
            "A testing library",
            "A deployment tool",
          ],
          correctAnswer: 1,
          explanation:
            "Express.js is a minimal and flexible Node.js web application framework for building APIs and web apps.",
        },
        {
          id: "node-b-6",
          question: "What is middleware in Express?",
          options: [
            "Database software",
            "Functions that have access to request and response objects",
            "Security software",
            "A type of database",
          ],
          correctAnswer: 1,
          explanation:
            "Middleware functions have access to the request, response, and next middleware function in the cycle.",
        },
        {
          id: "node-b-7",
          question: "How do you start a Node.js application?",
          options: ["node start", "node app.js", "start node", "run node"],
          correctAnswer: 1,
          explanation:
            "Use the node command followed by the entry file name to run a Node.js application.",
        },
        {
          id: "node-b-8",
          question: "What is the purpose of the fs module?",
          options: [
            "To handle forms",
            "To work with the file system",
            "To manage frameworks",
            "To handle functions",
          ],
          correctAnswer: 1,
          explanation:
            "The fs (file system) module provides an API for interacting with the file system.",
        },
        {
          id: "node-b-9",
          question: "What is a callback function in Node.js?",
          options: [
            "A function that calls itself",
            "A function passed as an argument to be executed later",
            "A function that returns data",
            "A recursive function",
          ],
          correctAnswer: 1,
          explanation:
            "Callbacks are functions passed to other functions to be called when an operation completes.",
        },
        {
          id: "node-b-10",
          question: "What is the default port for a Node.js HTTP server?",
          options: ["80", "8080", "3000", "There is no default"],
          correctAnswer: 3,
          explanation:
            "Node.js doesn't have a default port - developers choose the port when creating the server.",
        },
      ],
      intermediate: [
        {
          id: "node-i-1",
          question: "What is the Event Loop in Node.js?",
          options: [
            "A for loop for events",
            "The mechanism that handles asynchronous operations",
            "An event listener",
            "A debugging tool",
          ],
          correctAnswer: 1,
          explanation:
            "The Event Loop allows Node.js to perform non-blocking I/O operations despite being single-threaded.",
        },
        {
          id: "node-i-2",
          question:
            "What is the difference between process.nextTick() and setImmediate()?",
          options: [
            "No difference",
            "nextTick runs before I/O callbacks, setImmediate after",
            "setImmediate is deprecated",
            "nextTick is for errors only",
          ],
          correctAnswer: 1,
          explanation:
            "process.nextTick() runs before any I/O events, while setImmediate() runs after I/O events in the event loop.",
        },
        {
          id: "node-i-3",
          question: "What are streams in Node.js?",
          options: [
            "Video streaming API",
            "Objects for reading/writing data in chunks",
            "Database connections",
            "Network protocols",
          ],
          correctAnswer: 1,
          explanation:
            "Streams are objects that let you read data from a source or write data to a destination in chunks.",
        },
        {
          id: "node-i-4",
          question: "What is the purpose of the cluster module?",
          options: [
            "To group files",
            "To create child processes that share server ports",
            "To manage databases",
            "To organize code",
          ],
          correctAnswer: 1,
          explanation:
            "The cluster module allows creating child processes that share server ports for better performance.",
        },
        {
          id: "node-i-5",
          question: "What is a Buffer in Node.js?",
          options: [
            "A caching mechanism",
            "A class for handling binary data",
            "A memory manager",
            "A string type",
          ],
          correctAnswer: 1,
          explanation:
            "Buffer is a class that provides a way to work with binary data directly in Node.js.",
        },
        {
          id: "node-i-6",
          question: "What is the purpose of environment variables in Node.js?",
          options: [
            "To set programming language",
            "To store configuration outside the codebase",
            "To manage dependencies",
            "To set file paths",
          ],
          correctAnswer: 1,
          explanation:
            "Environment variables store configuration data separate from code, useful for different environments.",
        },
        {
          id: "node-i-7",
          question:
            "What is the difference between spawn and exec in child_process?",
          options: [
            "No difference",
            "spawn streams output, exec buffers the entire output",
            "exec is for Windows only",
            "spawn is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "spawn streams output in real-time, while exec buffers the output and returns it all at once.",
        },
        {
          id: "node-i-8",
          question: "What is the purpose of the path module?",
          options: [
            "To create URLs",
            "To work with file and directory paths",
            "To navigate websites",
            "To manage routes",
          ],
          correctAnswer: 1,
          explanation:
            "The path module provides utilities for working with file and directory paths across platforms.",
        },
        {
          id: "node-i-9",
          question: "What are Worker Threads used for?",
          options: [
            "Creating new processes",
            "Running JavaScript in parallel threads",
            "Managing web workers",
            "Handling HTTP requests",
          ],
          correctAnswer: 1,
          explanation:
            "Worker Threads enable running JavaScript in parallel threads for CPU-intensive operations.",
        },
        {
          id: "node-i-10",
          question: "What is the purpose of the crypto module?",
          options: [
            "Managing cryptocurrency",
            "Providing cryptographic functionality",
            "Encoding URLs",
            "Compressing data",
          ],
          correctAnswer: 1,
          explanation:
            "The crypto module provides cryptographic functionality including hashing, encryption, and signing.",
        },
      ],
      advanced: [
        {
          id: "node-a-1",
          question: "What is the V8 engine?",
          options: [
            "A car engine",
            "Google's JavaScript engine that powers Node.js",
            "A database engine",
            "A web server",
          ],
          correctAnswer: 1,
          explanation:
            "V8 is Google's open-source JavaScript engine written in C++ that compiles JavaScript to machine code.",
        },
        {
          id: "node-a-2",
          question: "What is libuv in Node.js?",
          options: [
            "A lighting library",
            "A library for async I/O and event loop",
            "A UV protection module",
            "A graphics library",
          ],
          correctAnswer: 1,
          explanation:
            "libuv is a C library that provides the event loop and asynchronous I/O in Node.js.",
        },
        {
          id: "node-a-3",
          question: "What is the purpose of N-API?",
          options: [
            "Network API",
            "ABI-stable API for building native addons",
            "Node API for browsers",
            "New API features",
          ],
          correctAnswer: 1,
          explanation:
            "N-API provides an ABI-stable layer for building native addons that work across Node.js versions.",
        },
        {
          id: "node-a-4",
          question: "What is the difference between fork and spawn?",
          options: [
            "No difference",
            "fork creates a new Node process with IPC, spawn runs any command",
            "fork is for Linux only",
            "spawn is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "fork() creates a new Node.js process with an IPC channel, while spawn() can run any command.",
        },
        {
          id: "node-a-5",
          question: "What is memory leak detection in Node.js?",
          options: [
            "Finding water leaks",
            "Identifying unreleased memory using heapdump and profilers",
            "Fixing syntax errors",
            "Debugging network issues",
          ],
          correctAnswer: 1,
          explanation:
            "Memory leak detection involves using tools like heapdump and V8 profiler to find unreleased memory.",
        },
        {
          id: "node-a-6",
          question: "What is the Event Emitter pattern?",
          options: [
            "A design for buttons",
            "A pattern for handling async events with listeners",
            "A logging system",
            "An error handler",
          ],
          correctAnswer: 1,
          explanation:
            "EventEmitter is a pattern for handling asynchronous events by registering listeners for named events.",
        },
        {
          id: "node-a-7",
          question: "What is the purpose of domain module (deprecated)?",
          options: [
            "Domain name handling",
            "Handling multiple async errors in a group",
            "URL parsing",
            "Network configuration",
          ],
          correctAnswer: 1,
          explanation:
            "The domain module grouped multiple async operations to handle errors together (now deprecated).",
        },
        {
          id: "node-a-8",
          question: "What is backpressure in streams?",
          options: [
            "Compression",
            "When write stream cannot handle data as fast as read stream",
            "Memory pressure",
            "Network congestion",
          ],
          correctAnswer: 1,
          explanation:
            "Backpressure occurs when data is written faster than it can be consumed, requiring flow control.",
        },
        {
          id: "node-a-9",
          question: "What is the purpose of async_hooks?",
          options: [
            "React hooks in Node",
            "Tracking async resources throughout their lifecycle",
            "Async function helpers",
            "Promise utilities",
          ],
          correctAnswer: 1,
          explanation:
            "async_hooks provides an API to track asynchronous resources and their lifecycle in Node.js.",
        },
        {
          id: "node-a-10",
          question: "What is the --inspect flag used for?",
          options: [
            "Code inspection",
            "Enabling the V8 inspector for debugging",
            "Security scanning",
            "Performance monitoring",
          ],
          correctAnswer: 1,
          explanation:
            "--inspect enables the V8 inspector, allowing debugging with Chrome DevTools or other debuggers.",
        },
      ],
    },
    sql: {
      beginner: [
        {
          id: "sql-b-1",
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Simple Query Language",
            "Standard Query Logic",
            "System Query Language",
          ],
          correctAnswer: 0,
          explanation:
            "SQL stands for Structured Query Language, used to manage and manipulate relational databases.",
        },
        {
          id: "sql-b-2",
          question:
            "Which SQL statement is used to extract data from a database?",
          options: ["GET", "EXTRACT", "SELECT", "PULL"],
          correctAnswer: 2,
          explanation:
            "SELECT is used to retrieve data from one or more tables in a database.",
        },
        {
          id: "sql-b-3",
          question: "Which SQL statement is used to update data in a database?",
          options: ["MODIFY", "UPDATE", "CHANGE", "SAVE"],
          correctAnswer: 1,
          explanation: "UPDATE is used to modify existing records in a table.",
        },
        {
          id: "sql-b-4",
          question:
            "Which SQL statement is used to delete data from a database?",
          options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
          correctAnswer: 1,
          explanation:
            "DELETE is used to remove rows from a table based on a condition.",
        },
        {
          id: "sql-b-5",
          question: "Which SQL statement is used to insert new data?",
          options: ["ADD", "INSERT INTO", "CREATE", "PUT"],
          correctAnswer: 1,
          explanation:
            "INSERT INTO is used to add new rows of data into a table.",
        },
        {
          id: "sql-b-6",
          question: "What is a primary key?",
          options: [
            "The first column in a table",
            "A unique identifier for each row",
            "The most important data",
            "A password for the database",
          ],
          correctAnswer: 1,
          explanation:
            "A primary key uniquely identifies each record in a table and cannot contain NULL values.",
        },
        {
          id: "sql-b-7",
          question:
            "Which clause is used to filter rows in a SELECT statement?",
          options: ["FILTER", "WHERE", "HAVING", "IF"],
          correctAnswer: 1,
          explanation:
            "The WHERE clause is used to filter records based on specified conditions.",
        },
        {
          id: "sql-b-8",
          question: "Which SQL keyword is used to sort the result set?",
          options: ["SORT BY", "ORDER BY", "ARRANGE BY", "SEQUENCE BY"],
          correctAnswer: 1,
          explanation:
            "ORDER BY is used to sort the result set in ascending or descending order.",
        },
        {
          id: "sql-b-9",
          question: "What does the asterisk (*) mean in a SELECT statement?",
          options: [
            "Multiplication",
            "All columns",
            "Required field",
            "Primary key",
          ],
          correctAnswer: 1,
          explanation:
            "The asterisk (*) is a wildcard that selects all columns from the specified table.",
        },
        {
          id: "sql-b-10",
          question: "Which SQL statement is used to create a new table?",
          options: ["NEW TABLE", "MAKE TABLE", "CREATE TABLE", "ADD TABLE"],
          correctAnswer: 2,
          explanation:
            "CREATE TABLE is used to create a new table in the database with specified columns.",
        },
      ],
      intermediate: [
        {
          id: "sql-i-1",
          question: "What is a JOIN in SQL?",
          options: [
            "Connecting to a database",
            "Combining rows from two or more tables based on related columns",
            "Merging databases",
            "Concatenating strings",
          ],
          correctAnswer: 1,
          explanation:
            "JOIN is used to combine rows from two or more tables based on a related column between them.",
        },
        {
          id: "sql-i-2",
          question: "What is the difference between INNER JOIN and LEFT JOIN?",
          options: [
            "No difference",
            "INNER JOIN returns matching rows, LEFT JOIN includes all left table rows",
            "LEFT JOIN is faster",
            "INNER JOIN is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "INNER JOIN returns only matching rows, while LEFT JOIN includes all rows from the left table.",
        },
        {
          id: "sql-i-3",
          question: "What is a foreign key?",
          options: [
            "A key from another country",
            "A column that references a primary key in another table",
            "An encrypted key",
            "A backup key",
          ],
          correctAnswer: 1,
          explanation:
            "A foreign key is a column that creates a link between two tables by referencing a primary key.",
        },
        {
          id: "sql-i-4",
          question: "What does GROUP BY do?",
          options: [
            "Groups columns together",
            "Groups rows sharing a property for aggregate functions",
            "Organizes tables",
            "Creates groups of databases",
          ],
          correctAnswer: 1,
          explanation:
            "GROUP BY groups rows with the same values, often used with aggregate functions like COUNT, SUM.",
        },
        {
          id: "sql-i-5",
          question: "What is the difference between WHERE and HAVING?",
          options: [
            "No difference",
            "WHERE filters rows before grouping, HAVING filters after",
            "HAVING is for JOINs",
            "WHERE is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "WHERE filters individual rows before grouping, HAVING filters groups after GROUP BY.",
        },
        {
          id: "sql-i-6",
          question: "What is a subquery?",
          options: [
            "A small query",
            "A query nested inside another query",
            "A query subtitle",
            "A backup query",
          ],
          correctAnswer: 1,
          explanation:
            "A subquery is a query nested within another query, used to return data for the main query.",
        },
        {
          id: "sql-i-7",
          question: "What does DISTINCT do?",
          options: [
            "Highlights data",
            "Returns only unique values",
            "Separates tables",
            "Marks important rows",
          ],
          correctAnswer: 1,
          explanation:
            "DISTINCT removes duplicate rows from the result set, returning only unique values.",
        },
        {
          id: "sql-i-8",
          question: "What is an index in SQL?",
          options: [
            "A table of contents",
            "A data structure that improves query performance",
            "Row numbers",
            "A backup system",
          ],
          correctAnswer: 1,
          explanation:
            "An index is a data structure that speeds up data retrieval at the cost of additional storage.",
        },
        {
          id: "sql-i-9",
          question: "What is normalization?",
          options: [
            "Making data normal",
            "Organizing database to reduce redundancy",
            "Standardizing queries",
            "Formatting output",
          ],
          correctAnswer: 1,
          explanation:
            "Normalization is organizing a database to reduce data redundancy and improve data integrity.",
        },
        {
          id: "sql-i-10",
          question: "What is a transaction in SQL?",
          options: [
            "A financial operation",
            "A sequence of operations performed as a single unit",
            "A data transfer",
            "A query log",
          ],
          correctAnswer: 1,
          explanation:
            "A transaction is a sequence of operations treated as a single unit, ensuring data integrity.",
        },
      ],
      advanced: [
        {
          id: "sql-a-1",
          question: "What are ACID properties?",
          options: [
            "Chemical properties of databases",
            "Atomicity, Consistency, Isolation, Durability",
            "Access, Control, Identity, Data",
            "Advanced SQL features",
          ],
          correctAnswer: 1,
          explanation:
            "ACID stands for Atomicity, Consistency, Isolation, and Durability - properties ensuring reliable transactions.",
        },
        {
          id: "sql-a-2",
          question: "What is a stored procedure?",
          options: [
            "Saved query history",
            "Precompiled SQL statements stored in the database",
            "A backup method",
            "Database documentation",
          ],
          correctAnswer: 1,
          explanation:
            "Stored procedures are precompiled SQL statements that can be executed repeatedly with different parameters.",
        },
        {
          id: "sql-a-3",
          question: "What is a trigger in SQL?",
          options: [
            "A button in the interface",
            "Automatic SQL code executed on specified events",
            "A type of constraint",
            "A debugging tool",
          ],
          correctAnswer: 1,
          explanation:
            "Triggers are automatic SQL statements executed when specified events occur (INSERT, UPDATE, DELETE).",
        },
        {
          id: "sql-a-4",
          question: "What is query optimization?",
          options: [
            "Making queries shorter",
            "Improving query execution efficiency",
            "Reducing query count",
            "Formatting queries",
          ],
          correctAnswer: 1,
          explanation:
            "Query optimization involves analyzing and improving query execution plans for better performance.",
        },
        {
          id: "sql-a-5",
          question: "What is a materialized view?",
          options: [
            "A physical view",
            "A precomputed query result stored as a table",
            "A 3D visualization",
            "A visible table",
          ],
          correctAnswer: 1,
          explanation:
            "Materialized views store query results physically, improving performance for complex queries.",
        },
        {
          id: "sql-a-6",
          question: "What is database sharding?",
          options: [
            "Breaking a database into pieces",
            "Distributing data across multiple databases",
            "Encrypting data",
            "Compressing data",
          ],
          correctAnswer: 1,
          explanation:
            "Sharding distributes data across multiple databases to improve performance and scalability.",
        },
        {
          id: "sql-a-7",
          question: "What is a window function?",
          options: [
            "A function for GUI windows",
            "A function performing calculations across related rows",
            "A visualization feature",
            "A sorting function",
          ],
          correctAnswer: 1,
          explanation:
            "Window functions perform calculations across a set of rows related to the current row.",
        },
        {
          id: "sql-a-8",
          question: "What is database deadlock?",
          options: [
            "A security feature",
            "When two transactions wait for each other indefinitely",
            "A backup state",
            "A connection limit",
          ],
          correctAnswer: 1,
          explanation:
            "Deadlock occurs when two or more transactions are waiting for each other to release locks.",
        },
        {
          id: "sql-a-9",
          question:
            "What is the difference between clustered and non-clustered index?",
          options: [
            "No difference",
            "Clustered determines physical data order, non-clustered creates separate structure",
            "Non-clustered is faster",
            "Clustered is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "Clustered index determines physical data order (one per table), non-clustered creates a separate pointer structure.",
        },
        {
          id: "sql-a-10",
          question: "What is a CTE (Common Table Expression)?",
          options: [
            "A common query error",
            "A temporary named result set within a query",
            "A table type",
            "A constraint type",
          ],
          correctAnswer: 1,
          explanation:
            "CTEs are temporary named result sets that exist within the scope of a single statement.",
        },
      ],
    },
    php: {
      beginner: [
        {
          id: "php-b-1",
          question: "What does PHP stand for?",
          options: [
            "Personal Home Page",
            "PHP: Hypertext Preprocessor",
            "Pre-Hypertext Processor",
            "Private Home Page",
          ],
          correctAnswer: 1,
          explanation:
            'PHP is a recursive acronym for "PHP: Hypertext Preprocessor".',
        },
        {
          id: "php-b-2",
          question: "What is the correct way to end a PHP statement?",
          options: [":", ".", ";", "&"],
          correctAnswer: 2,
          explanation:
            "PHP statements end with a semicolon (;), similar to C and JavaScript.",
        },
        {
          id: "php-b-3",
          question: "How do you start a PHP code block?",
          options: ["<php>", "<?php", "<script php>", "<%php"],
          correctAnswer: 1,
          explanation: "<?php is the standard opening tag for PHP code blocks.",
        },
        {
          id: "php-b-4",
          question: "How do you create a variable in PHP?",
          options: ["var myVar", "$myVar", "let myVar", "myVar"],
          correctAnswer: 1,
          explanation:
            "PHP variables start with a $ sign followed by the variable name.",
        },
        {
          id: "php-b-5",
          question: "Which function is used to output text in PHP?",
          options: ["print()", "echo", "write()", "Both echo and print"],
          correctAnswer: 3,
          explanation:
            "Both echo and print can output text, though echo is slightly faster and can take multiple arguments.",
        },
        {
          id: "php-b-6",
          question: "How do you concatenate strings in PHP?",
          options: ["+", "&", ".", "||"],
          correctAnswer: 2,
          explanation:
            "The dot (.) operator is used to concatenate strings in PHP.",
        },
        {
          id: "php-b-7",
          question:
            "Which superglobal is used to collect form data sent with GET?",
          options: ["$_POST", "$_GET", "$_REQUEST", "$_FORM"],
          correctAnswer: 1,
          explanation:
            "$_GET is a superglobal array containing data sent via URL query strings.",
        },
        {
          id: "php-b-8",
          question: "What is the correct way to create a comment in PHP?",
          options: [
            "<!-- comment -->",
            "// comment",
            "# comment",
            "Both // and #",
          ],
          correctAnswer: 3,
          explanation:
            "PHP supports both // and # for single-line comments, and /* */ for multi-line comments.",
        },
        {
          id: "php-b-9",
          question: "Which function returns the length of a string?",
          options: ["len()", "length()", "strlen()", "size()"],
          correctAnswer: 2,
          explanation: "strlen() returns the number of characters in a string.",
        },
        {
          id: "php-b-10",
          question: "How do you create an array in PHP?",
          options: ["array()", "[]", "new Array()", "Both array() and []"],
          correctAnswer: 3,
          explanation:
            "Arrays can be created using array() function or short syntax [] in PHP 5.4+.",
        },
      ],
      intermediate: [
        {
          id: "php-i-1",
          question: "What is the difference between include and require?",
          options: [
            "No difference",
            "require throws fatal error on failure, include only warning",
            "include is faster",
            "require is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "require throws a fatal error and stops script execution if the file is not found, while include only produces a warning.",
        },
        {
          id: "php-i-2",
          question: "What is a namespace in PHP?",
          options: [
            "A naming convention",
            "A way to encapsulate items to avoid name collisions",
            "A function type",
            "A class attribute",
          ],
          correctAnswer: 1,
          explanation:
            "Namespaces provide a way to group related classes, interfaces, and functions to avoid naming conflicts.",
        },
        {
          id: "php-i-3",
          question: "What is PDO in PHP?",
          options: [
            "PHP Data Object",
            "PHP Database Object - a database access layer",
            "Page Document Object",
            "PHP Development Option",
          ],
          correctAnswer: 1,
          explanation:
            "PDO (PHP Data Objects) is a database access layer providing a uniform method for accessing different databases.",
        },
        {
          id: "php-i-4",
          question: "What is the purpose of __construct() method?",
          options: [
            "To destroy objects",
            "To initialize object properties when created",
            "To build classes",
            "To construct arrays",
          ],
          correctAnswer: 1,
          explanation:
            "__construct() is the constructor method called automatically when a new object is instantiated.",
        },
        {
          id: "php-i-5",
          question: "What is the difference between == and === in PHP?",
          options: [
            "No difference",
            "== compares values, === compares value and type",
            "=== is for arrays only",
            "== is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "== compares values with type juggling, === compares both value and type strictly.",
        },
        {
          id: "php-i-6",
          question: "What is a trait in PHP?",
          options: [
            "A character attribute",
            "A mechanism for code reuse in single inheritance languages",
            "An interface type",
            "A function modifier",
          ],
          correctAnswer: 1,
          explanation:
            "Traits enable code reuse by allowing methods to be included in multiple classes.",
        },
        {
          id: "php-i-7",
          question: "What is the purpose of sessions in PHP?",
          options: [
            "To store permanent data",
            "To store temporary user data across multiple pages",
            "To manage database connections",
            "To handle file uploads",
          ],
          correctAnswer: 1,
          explanation:
            "Sessions store temporary data about users across multiple page requests.",
        },
        {
          id: "php-i-8",
          question: "What is autoloading in PHP?",
          options: [
            "Automatic file loading",
            "Automatically loading class files when needed",
            "Preloading all files",
            "Loading configuration",
          ],
          correctAnswer: 1,
          explanation:
            "Autoloading automatically loads class files when a class is first used, without require statements.",
        },
        {
          id: "php-i-9",
          question: "What is the null coalescing operator (??) in PHP?",
          options: [
            "A comparison operator",
            "Returns first operand if exists and not null, otherwise second",
            "A null check",
            "An assignment operator",
          ],
          correctAnswer: 1,
          explanation:
            "The ?? operator returns the first operand if it exists and is not null, otherwise returns the second.",
        },
        {
          id: "php-i-10",
          question: "What is Composer in PHP?",
          options: [
            "A music library",
            "A dependency manager for PHP",
            "A code formatter",
            "A testing tool",
          ],
          correctAnswer: 1,
          explanation:
            "Composer is a dependency manager that handles library installation and autoloading in PHP projects.",
        },
      ],
      advanced: [
        {
          id: "php-a-1",
          question:
            "What is the difference between abstract class and interface?",
          options: [
            "No difference",
            "Abstract classes can have implementations, interfaces only define contracts",
            "Interfaces are faster",
            "Abstract classes are deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "Abstract classes can have method implementations and properties, while interfaces only define method signatures.",
        },
        {
          id: "php-a-2",
          question: "What are generators in PHP?",
          options: [
            "Code generators",
            "Functions that use yield to return values lazily",
            "Random number creators",
            "Class builders",
          ],
          correctAnswer: 1,
          explanation:
            "Generators use yield to return values one at a time, saving memory for large datasets.",
        },
        {
          id: "php-a-3",
          question: "What is the purpose of type declarations in PHP 7+?",
          options: [
            "Documentation only",
            "Enforcing types for parameters and return values",
            "Performance optimization",
            "IDE support only",
          ],
          correctAnswer: 1,
          explanation:
            "Type declarations enforce types for function parameters and return values at runtime.",
        },
        {
          id: "php-a-4",
          question: "What is reflection in PHP?",
          options: [
            "Mirroring databases",
            "Ability to examine classes, methods, properties at runtime",
            "Code review",
            "Error handling",
          ],
          correctAnswer: 1,
          explanation:
            "Reflection allows examining and manipulating classes, methods, and properties at runtime.",
        },
        {
          id: "php-a-5",
          question: "What is the purpose of Opcache?",
          options: [
            "Caching database queries",
            "Caching compiled PHP bytecode",
            "Caching HTML output",
            "Caching session data",
          ],
          correctAnswer: 1,
          explanation:
            "Opcache stores precompiled PHP bytecode in memory, improving performance by avoiding recompilation.",
        },
        {
          id: "php-a-6",
          question: "What are attributes in PHP 8?",
          options: [
            "Class properties",
            "Native metadata added to declarations",
            "Function parameters",
            "Variable types",
          ],
          correctAnswer: 1,
          explanation:
            "Attributes are native PHP 8 features for adding structured metadata to code declarations.",
        },
        {
          id: "php-a-7",
          question: "What is the match expression in PHP 8?",
          options: [
            "Regex matching",
            "A more concise switch with strict comparison and expression return",
            "Pattern matching",
            "String matching",
          ],
          correctAnswer: 1,
          explanation:
            "match is a more concise alternative to switch with strict comparison and expression-based return values.",
        },
        {
          id: "php-a-8",
          question: "What are fibers in PHP 8.1?",
          options: [
            "String types",
            "Lightweight concurrency primitives",
            "Data structures",
            "Network connections",
          ],
          correctAnswer: 1,
          explanation:
            "Fibers are lightweight concurrency primitives that can be suspended and resumed, enabling async programming.",
        },
        {
          id: "php-a-9",
          question: "What is the purpose of the final keyword?",
          options: [
            "Ending execution",
            "Preventing class inheritance or method overriding",
            "Final variable value",
            "Last element access",
          ],
          correctAnswer: 1,
          explanation:
            "final prevents classes from being extended or methods from being overridden in child classes.",
        },
        {
          id: "php-a-10",
          question: "What are union types in PHP 8?",
          options: [
            "Merged types",
            "Allowing multiple types for a parameter or return value",
            "Type combinations",
            "Grouped types",
          ],
          correctAnswer: 1,
          explanation:
            "Union types allow declaring multiple possible types for parameters or return values using | syntax.",
        },
      ],
    },
    java: {
      beginner: [
        {
          id: "java-b-1",
          question: "What is Java?",
          options: ["Language + platform", "Coffee", "JS library", "Database"],
          correctAnswer: 0,
          explanation: "Java is both programming language and platform.",
        },
        {
          id: "java-b-2",
          question: "Main OOP principles?",
          options: [
            "All of these",
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
          ],
          correctAnswer: 0,
          explanation: "Java OOP: Encapsulation, Inheritance, Polymorphism.",
        },
        {
          id: "java-b-3",
          question: "What is JVM?",
          options: [
            "Java Virtual Machine",
            "Java Visual Machine",
            "Java Version Manager",
            "Java Variable Machine",
          ],
          correctAnswer: 0,
          explanation: "JVM = Java Virtual Machine.",
        },
        {
          id: "java-b-4",
          question: "JDK vs JRE?",
          options: [
            "JDK = JRE + tools",
            "JRE includes JDK",
            "Same thing",
            "JDK runtime only",
          ],
          correctAnswer: 0,
          explanation: "JDK includes JRE + development tools.",
        },
        {
          id: "java-b-5",
          question: "Entry point method?",
          options: ["main()", "start()", "init()", "run()"],
          correctAnswer: 0,
          explanation: "public static void main(String[] args) is entry point.",
        },
        {
          id: "java-b-6",
          question: "Primitive vs Reference types?",
          options: [
            "Primitive store values",
            "All of these",
            "Reference store addresses",
            "int vs Integer",
          ],
          correctAnswer: 1,
          explanation: "Primitives store values, references store addresses.",
        },
        {
          id: "java-b-7",
          question: "What is String?",
          options: [
            "Immutable class",
            "Character sequence",
            "All of these",
            "Object type",
          ],
          correctAnswer: 2,
          explanation: "String is immutable sequence of characters.",
        },
        {
          id: "java-b-8",
          question: "Access modifiers?",
          options: [
            "All of these",
            "public, private, protected",
            "Package-private",
            "Visibility control",
          ],
          correctAnswer: 0,
          explanation: "Access modifiers control class/member visibility.",
        },
        {
          id: "java-b-9",
          question: "What is an interface?",
          options: [
            "Contract",
            "All of these",
            "Method signatures",
            "Abstract type",
          ],
          correctAnswer: 1,
          explanation: "Interface defines contract without implementation.",
        },
        {
          id: "java-b-10",
          question: "What is exception handling?",
          options: [
            "try-catch-finally",
            "Error recovery",
            "All of these",
            "Throwable hierarchy",
          ],
          correctAnswer: 2,
          explanation: "Exceptions handle runtime errors gracefully.",
        },
      ],
      intermediate: [
        {
          id: "java-i-1",
          question: "What are collections?",
          options: [
            "All of these",
            "Data structures",
            "Lists, Sets, Maps",
            "Framework",
          ],
          correctAnswer: 0,
          explanation: "Collections Framework provides data structures.",
        },
        {
          id: "java-i-2",
          question: "ArrayList vs LinkedList?",
          options: [
            "Array vs node-based",
            "All of these",
            "Random access vs insert",
            "Memory differences",
          ],
          correctAnswer: 1,
          explanation: "ArrayList uses array, LinkedList uses nodes.",
        },
        {
          id: "java-i-3",
          question: "What are streams?",
          options: [
            "Sequence operations",
            "Functional-style",
            "All of these",
            "Java 8+ feature",
          ],
          correctAnswer: 2,
          explanation: "Streams enable functional-style operations.",
        },
        {
          id: "java-i-4",
          question: "What is multithreading?",
          options: [
            "All of these",
            "Concurrent execution",
            "Thread class",
            "Runnable interface",
          ],
          correctAnswer: 0,
          explanation: "Multithreading runs multiple threads concurrently.",
        },
        {
          id: "java-i-5",
          question: "What is Spring Framework?",
          options: [
            "Enterprise framework",
            "All of these",
            "Dependency injection",
            "Modular",
          ],
          correctAnswer: 1,
          explanation: "Spring is comprehensive Java framework.",
        },
        {
          id: "java-i-6",
          question: "What is Maven?",
          options: [
            "Build tool",
            "Dependency management",
            "All of these",
            "Project management",
          ],
          correctAnswer: 2,
          explanation: "Maven is build automation tool.",
        },
        {
          id: "java-i-7",
          question: "What is JPA?",
          options: [
            "All of these",
            "Java Persistence API",
            "ORM specification",
            "Database mapping",
          ],
          correctAnswer: 0,
          explanation: "JPA is ORM specification for Java.",
        },
        {
          id: "java-i-8",
          question: "What are annotations?",
          options: [
            "Metadata",
            "All of these",
            "@ symbols",
            "Compile-time info",
          ],
          correctAnswer: 1,
          explanation: "Annotations provide metadata about code.",
        },
        {
          id: "java-i-9",
          question: "What is dependency injection?",
          options: [
            "Provide dependencies",
            "Inversion of Control",
            "All of these",
            "Spring feature",
          ],
          correctAnswer: 2,
          explanation: "DI provides dependencies from external.",
        },
        {
          id: "java-i-10",
          question: "What is JUnit?",
          options: [
            "All of these",
            "Testing framework",
            "Unit testing",
            "@Test annotations",
          ],
          correctAnswer: 0,
          explanation: "JUnit is unit testing framework for Java.",
        },
      ],
      advanced: [
        {
          id: "java-a-1",
          question: "What is garbage collection?",
          options: [
            "Automatic memory",
            "All of these",
            "Heap management",
            "Mark and sweep",
          ],
          correctAnswer: 1,
          explanation: "GC automatically reclaims unused memory.",
        },
        {
          id: "java-a-2",
          question: "Java Memory Model?",
          options: [
            "Thread interaction",
            "Memory visibility",
            "All of these",
            "Happens-before",
          ],
          correctAnswer: 2,
          explanation: "JMM defines thread memory interactions.",
        },
        {
          id: "java-a-3",
          question: "What are Java modules?",
          options: ["All of these", "Java 9+", "Module system", "JPMS"],
          correctAnswer: 0,
          explanation: "Modules provide strong encapsulation.",
        },
        {
          id: "java-a-4",
          question: "What is reactive programming?",
          options: [
            "Async streams",
            "All of these",
            "Reactive Streams",
            "Project Reactor",
          ],
          correctAnswer: 1,
          explanation: "Reactive handles async data streams.",
        },
        {
          id: "java-a-5",
          question: "What are virtual threads?",
          options: [
            "Java 21+",
            "Lightweight threads",
            "All of these",
            "Project Loom",
          ],
          correctAnswer: 2,
          explanation: "Virtual threads are lightweight threads.",
        },
        {
          id: "java-a-6",
          question: "What is JIT compilation?",
          options: [
            "All of these",
            "Just-In-Time",
            "Runtime compilation",
            "Performance",
          ],
          correctAnswer: 0,
          explanation: "JIT compiles bytecode to native at runtime.",
        },
        {
          id: "java-a-7",
          question: "What are records?",
          options: [
            "Java 14+",
            "All of these",
            "Data classes",
            "Immutable data",
          ],
          correctAnswer: 1,
          explanation: "Records are immutable data carriers.",
        },
        {
          id: "java-a-8",
          question: "What is sealed classes?",
          options: [
            "Restricted inheritance",
            "Java 17+",
            "All of these",
            "Permitted subclasses",
          ],
          correctAnswer: 2,
          explanation: "Sealed classes restrict which can extend.",
        },
        {
          id: "java-a-9",
          question: "What is pattern matching?",
          options: [
            "All of these",
            "Java 16+",
            "instanceof patterns",
            "Switch expressions",
          ],
          correctAnswer: 0,
          explanation: "Pattern matching simplifies conditional logic.",
        },
        {
          id: "java-a-10",
          question: "What is GraalVM?",
          options: [
            "Polyglot VM",
            "All of these",
            "Ahead-of-Time",
            "Native image",
          ],
          correctAnswer: 1,
          explanation: "GraalVM is high-performance polyglot VM.",
        },
      ],
    },
    csharp: {
      beginner: [
        {
          id: "csharp-b-1",
          question: "What is C#?",
          options: [
            "All of these",
            "Microsoft language",
            ".NET language",
            "OOP language",
          ],
          correctAnswer: 0,
          explanation: "C# is Microsoft's OOP language for .NET.",
        },
        {
          id: "csharp-b-2",
          question: "What is .NET?",
          options: [
            "Development platform",
            "All of these",
            "Framework",
            "Runtime",
          ],
          correctAnswer: 1,
          explanation: ".NET is Microsoft's development platform.",
        },
        {
          id: "csharp-b-3",
          question: "C# vs Java?",
          options: [
            "Similar syntax",
            "Both OOP",
            "All of these",
            "Different ecosystems",
          ],
          correctAnswer: 2,
          explanation:
            "C# and Java have similar syntax but different ecosystems.",
        },
        {
          id: "csharp-b-4",
          question: "What is CLR?",
          options: [
            "All of these",
            "Common Language Runtime",
            ".NET runtime",
            "Manages execution",
          ],
          correctAnswer: 0,
          explanation: "CLR is .NET's execution engine.",
        },
        {
          id: "csharp-b-5",
          question: "Value vs Reference types?",
          options: [
            "Stack vs heap",
            "All of these",
            "struct vs class",
            "Performance differences",
          ],
          correctAnswer: 1,
          explanation: "Value types on stack, reference types on heap.",
        },
        {
          id: "csharp-b-6",
          question: "What is LINQ?",
          options: [
            "Language Integrated Query",
            "Query collections",
            "All of these",
            "SQL-like syntax",
          ],
          correctAnswer: 2,
          explanation: "LINQ provides query capabilities in C#.",
        },
        {
          id: "csharp-b-7",
          question: "What are properties?",
          options: [
            "All of these",
            "Getter/setter methods",
            "Encapsulation",
            "Auto-properties",
          ],
          correctAnswer: 0,
          explanation: "Properties encapsulate field access.",
        },
        {
          id: "csharp-b-8",
          question: "What is async/await?",
          options: [
            "Asynchronous programming",
            "All of these",
            "Non-blocking",
            "Task-based",
          ],
          correctAnswer: 1,
          explanation: "async/await simplifies async programming.",
        },
        {
          id: "csharp-b-9",
          question: "What is NuGet?",
          options: [
            "Package manager",
            "Dependency management",
            "All of these",
            ".NET packages",
          ],
          correctAnswer: 2,
          explanation: "NuGet is .NET package manager.",
        },
        {
          id: "csharp-b-10",
          question: "What is ASP.NET?",
          options: [
            "All of these",
            "Web framework",
            "Build web apps",
            "MVC, Web API",
          ],
          correctAnswer: 0,
          explanation: "ASP.NET is web framework for .NET.",
        },
      ],
      intermediate: [
        {
          id: "csharp-i-1",
          question: "What is Entity Framework?",
          options: [
            "ORM framework",
            "All of these",
            "Database access",
            "Code First",
          ],
          correctAnswer: 1,
          explanation: "EF is .NET ORM for database access.",
        },
        {
          id: "csharp-i-2",
          question: "What are delegates?",
          options: [
            "Type-safe pointers",
            "Function references",
            "All of these",
            "Foundation for events",
          ],
          correctAnswer: 2,
          explanation: "Delegates are type-safe method references.",
        },
        {
          id: "csharp-i-3",
          question: "What are events?",
          options: [
            "All of these",
            "Publisher-subscriber",
            "Delegates-based",
            "Notification system",
          ],
          correctAnswer: 0,
          explanation: "Events implement publisher-subscriber pattern.",
        },
        {
          id: "csharp-i-4",
          question: "What is dependency injection?",
          options: [
            "IoC pattern",
            "All of these",
            "Service lifetime",
            "Built-in in .NET",
          ],
          correctAnswer: 1,
          explanation: "DI is inversion of control pattern.",
        },
        {
          id: "csharp-i-5",
          question: "What are generics?",
          options: [
            "Type parameters",
            "Reusable code",
            "All of these",
            "List<T>, Dictionary<K,V>",
          ],
          correctAnswer: 2,
          explanation: "Generics enable type-safe reusable code.",
        },
        {
          id: "csharp-i-6",
          question: "What are attributes?",
          options: ["All of these", "Metadata", "[ ] notation", "Reflection"],
          correctAnswer: 0,
          explanation: "Attributes add metadata to code elements.",
        },
        {
          id: "csharp-i-7",
          question: "What is garbage collection?",
          options: [
            "Automatic memory",
            "All of these",
            "Managed heap",
            "Generation-based",
          ],
          correctAnswer: 1,
          explanation: "GC automatically manages memory in .NET.",
        },
        {
          id: "csharp-i-8",
          question: "What are extension methods?",
          options: [
            "Add methods to types",
            "static classes",
            "All of these",
            "this parameter",
          ],
          correctAnswer: 2,
          explanation: "Extension methods add functionality to existing types.",
        },
        {
          id: "csharp-i-9",
          question: "What is pattern matching?",
          options: [
            "All of these",
            "C# 7.0+",
            "is patterns",
            "switch expressions",
          ],
          correctAnswer: 0,
          explanation: "Pattern matching tests expressions for patterns.",
        },
        {
          id: "csharp-i-10",
          question: "What is .NET Core vs Framework?",
          options: [
            "Cross-platform",
            "All of these",
            "Open source",
            "Modern .NET",
          ],
          correctAnswer: 1,
          explanation: ".NET Core is cross-platform, open source successor.",
        },
      ],
      advanced: [
        {
          id: "csharp-a-1",
          question: "What are spans?",
          options: [
            "Memory slices",
            "ref struct",
            "All of these",
            "Performance",
          ],
          correctAnswer: 2,
          explanation: "Span<T> provides type-safe memory slices.",
        },
        {
          id: "csharp-a-2",
          question: "What is source generators?",
          options: [
            "All of these",
            "C# 9.0+",
            "Compile-time code",
            "Roslyn-based",
          ],
          correctAnswer: 0,
          explanation: "Source generators create code at compile time.",
        },
        {
          id: "csharp-a-3",
          question: "What are records?",
          options: [
            "C# 9.0+",
            "All of these",
            "Immutable data",
            "with expressions",
          ],
          correctAnswer: 1,
          explanation: "Records are immutable reference types.",
        },
        {
          id: "csharp-a-4",
          question: "What is minimal APIs?",
          options: [
            "ASP.NET Core",
            "Simplified startup",
            "All of these",
            "C# 10+",
          ],
          correctAnswer: 2,
          explanation: "Minimal APIs simplify ASP.NET Core setup.",
        },
        {
          id: "csharp-a-5",
          question: "What is global using?",
          options: ["All of these", "C# 10", "Global imports", "Reduce usings"],
          correctAnswer: 0,
          explanation: "global using imports namespace globally.",
        },
        {
          id: "csharp-a-6",
          question: "What is file-scoped namespaces?",
          options: ["C# 10", "All of these", "Simpler syntax", "No braces"],
          correctAnswer: 1,
          explanation: "file-scoped namespace applies to whole file.",
        },
        {
          id: "csharp-a-7",
          question: "What is required members?",
          options: [
            "C# 11",
            "Required properties",
            "All of these",
            "Init-only",
          ],
          correctAnswer: 2,
          explanation: "required modifier makes properties mandatory.",
        },
        {
          id: "csharp-a-8",
          question: "What is raw string literals?",
          options: [
            "All of these",
            "C# 11",
            "Multi-line strings",
            "No escaping",
          ],
          correctAnswer: 0,
          explanation: "Raw string literals simplify string handling.",
        },
        {
          id: "csharp-a-9",
          question: "What is Native AOT?",
          options: [
            "Ahead-of-Time",
            "All of these",
            "Native compilation",
            ".NET 7+",
          ],
          correctAnswer: 1,
          explanation: "Native AOT compiles to native code.",
        },
        {
          id: "csharp-a-10",
          question: "What is Blazor?",
          options: [
            "WebAssembly framework",
            "C# in browser",
            "SPA framework",
            "All of these",
          ],
          correctAnswer: 3,
          explanation: "Blazor runs C# in browser via WebAssembly.",
        },
      ],
    },
    python: {
      beginner: [
        {
          id: "py-b-1",
          question: "What is Python?",
          options: [
            "A type of snake",
            "A high-level, interpreted programming language",
            "A database system",
            "A web browser",
          ],
          correctAnswer: 1,
          explanation:
            "Python is a high-level, interpreted programming language known for its clear syntax and readability.",
        },
        {
          id: "py-b-2",
          question: "How do you define a variable in Python?",
          options: ["var x = 5", "let x = 5", "x = 5", "int x = 5"],
          correctAnswer: 2,
          explanation:
            "Python uses dynamic typing - simply assign a value to a variable name without declaring its type.",
        },
        {
          id: "py-b-3",
          question: "Which keyword is used to define a function in Python?",
          options: ["function", "def", "func", "define"],
          correctAnswer: 1,
          explanation: "The def keyword is used to define functions in Python.",
        },
        {
          id: "py-b-4",
          question: "What is a list in Python?",
          options: [
            "A text document",
            "An ordered, mutable collection of items",
            "A function type",
            "A class definition",
          ],
          correctAnswer: 1,
          explanation:
            "A list is an ordered, mutable collection that can contain items of different types.",
        },
        {
          id: "py-b-5",
          question: "How do you write a comment in Python?",
          options: [
            "// comment",
            "/* comment */",
            "# comment",
            "<!-- comment -->",
          ],
          correctAnswer: 2,
          explanation:
            "Single-line comments in Python start with the # symbol.",
        },
        {
          id: "py-b-6",
          question: "What is the output of print(2 ** 3)?",
          options: ["5", "6", "8", "9"],
          correctAnswer: 2,
          explanation:
            "The ** operator performs exponentiation. 2 ** 3 = 2³ = 8.",
        },
        {
          id: "py-b-7",
          question: "Which of these is a correct way to create a dictionary?",
          options: [
            "[key: value]",
            "{key: value}",
            "(key: value)",
            "<key: value>",
          ],
          correctAnswer: 1,
          explanation: "Dictionaries use curly braces with key: value pairs.",
        },
        {
          id: "py-b-8",
          question: "What does len() function do?",
          options: [
            "Converts to length",
            "Returns the number of items in an object",
            "Creates a new list",
            "Lengthens a string",
          ],
          correctAnswer: 1,
          explanation:
            "len() returns the number of items in a sequence or collection.",
        },
        {
          id: "py-b-9",
          question: "How do you import a module in Python?",
          options: [
            "include module",
            "require module",
            "import module",
            "using module",
          ],
          correctAnswer: 2,
          explanation:
            "The import statement is used to import modules in Python.",
        },
        {
          id: "py-b-10",
          question: "What is the difference between a tuple and a list?",
          options: [
            "No difference",
            "Tuples are immutable, lists are mutable",
            "Tuples are faster",
            "Lists can only contain strings",
          ],
          correctAnswer: 1,
          explanation:
            "Tuples are immutable (cannot be modified after creation), while lists are mutable.",
        },
      ],
      intermediate: [
        {
          id: "py-i-1",
          question: "What is a list comprehension?",
          options: [
            "Understanding lists",
            "A concise way to create lists using expressions",
            "A list method",
            "A type of loop",
          ],
          correctAnswer: 1,
          explanation:
            "List comprehensions provide a concise way to create lists using a single line of code.",
        },
        {
          id: "py-i-2",
          question: "What is the difference between args and kwargs?",
          options: [
            "No difference",
            "*args for positional arguments, **kwargs for keyword arguments",
            "*args is for arrays",
            "**kwargs is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "*args allows passing variable positional arguments, **kwargs allows variable keyword arguments.",
        },
        {
          id: "py-i-3",
          question: "What is a decorator in Python?",
          options: [
            "A design pattern",
            "A function that modifies another function's behavior",
            "A type of comment",
            "A class attribute",
          ],
          correctAnswer: 1,
          explanation:
            "Decorators are functions that wrap other functions to extend or modify their behavior.",
        },
        {
          id: "py-i-4",
          question: "What is a generator in Python?",
          options: [
            "A class constructor",
            "A function that yields values lazily",
            "A random number creator",
            "A file creator",
          ],
          correctAnswer: 1,
          explanation:
            "Generators use yield to produce values one at a time, saving memory for large sequences.",
        },
        {
          id: "py-i-5",
          question: "What is the purpose of __init__ method?",
          options: [
            "To destroy objects",
            "To initialize object attributes when created",
            "To define the class",
            "To import modules",
          ],
          correctAnswer: 1,
          explanation:
            "__init__ is the constructor method called when a new instance is created.",
        },
        {
          id: "py-i-6",
          question: "What is a lambda function?",
          options: [
            "A named function",
            "An anonymous single-expression function",
            "A class method",
            "A module function",
          ],
          correctAnswer: 1,
          explanation:
            "Lambda functions are small anonymous functions defined with the lambda keyword.",
        },
        {
          id: "py-i-7",
          question: "What is the purpose of the with statement?",
          options: [
            "Conditional logic",
            "Context management for resource handling",
            "Loop control",
            "Exception handling",
          ],
          correctAnswer: 1,
          explanation:
            "The with statement manages resources by ensuring proper acquisition and release (like file handles).",
        },
        {
          id: "py-i-8",
          question: "What is the difference between is and ==?",
          options: [
            "No difference",
            "is checks identity, == checks equality",
            "== is for strings only",
            "is is deprecated",
          ],
          correctAnswer: 1,
          explanation:
            "is checks if two references point to the same object, == checks if values are equal.",
        },
        {
          id: "py-i-9",
          question: "What is a virtual environment in Python?",
          options: [
            "A virtual machine",
            "An isolated Python environment with its own packages",
            "A testing environment",
            "A cloud service",
          ],
          correctAnswer: 1,
          explanation:
            "Virtual environments isolate project dependencies, preventing conflicts between projects.",
        },
        {
          id: "py-i-10",
          question: "What is exception handling in Python?",
          options: [
            "Logging errors",
            "Using try/except to handle runtime errors gracefully",
            "Preventing errors",
            "Debugging code",
          ],
          correctAnswer: 1,
          explanation:
            "Exception handling uses try/except blocks to catch and handle errors without crashing.",
        },
      ],
      advanced: [
        {
          id: "py-a-1",
          question: "What is the Global Interpreter Lock (GIL)?",
          options: [
            "A security feature",
            "A mutex preventing parallel thread execution in CPython",
            "A global variable",
            "An import lock",
          ],
          correctAnswer: 1,
          explanation:
            "The GIL is a mutex that prevents multiple threads from executing Python bytecode simultaneously.",
        },
        {
          id: "py-a-2",
          question: "What are metaclasses in Python?",
          options: [
            "Abstract classes",
            "Classes that define how classes behave",
            "Parent classes",
            "Built-in classes",
          ],
          correctAnswer: 1,
          explanation:
            "Metaclasses are classes whose instances are classes themselves, controlling class creation.",
        },
        {
          id: "py-a-3",
          question: "What is the purpose of __slots__?",
          options: [
            "Memory optimization",
            "Restricting attributes and reducing memory usage",
            "Creating time slots",
            "Slot machines",
          ],
          correctAnswer: 1,
          explanation:
            "__slots__ restricts instance attributes and reduces memory by not using __dict__.",
        },
        {
          id: "py-a-4",
          question: "What is a descriptor in Python?",
          options: [
            "Documentation string",
            "An object defining how attribute access is handled",
            "A type hint",
            "A class decorator",
          ],
          correctAnswer: 1,
          explanation:
            "Descriptors are objects that define __get__, __set__, or __delete__ to customize attribute access.",
        },
        {
          id: "py-a-5",
          question: "What is asyncio used for?",
          options: [
            "Async file operations",
            "Asynchronous I/O and concurrent programming",
            "Async testing",
            "Async logging",
          ],
          correctAnswer: 1,
          explanation:
            "asyncio provides infrastructure for writing single-threaded concurrent code using coroutines.",
        },
        {
          id: "py-a-6",
          question: "What is the purpose of __new__ method?",
          options: [
            "Creating new files",
            "Creating and returning new instances before __init__",
            "Defining new classes",
            "New variable creation",
          ],
          correctAnswer: 1,
          explanation:
            "__new__ is called before __init__ to create and return a new instance of the class.",
        },
        {
          id: "py-a-7",
          question: "What is monkey patching?",
          options: [
            "Bug fixing",
            "Dynamically modifying classes or modules at runtime",
            "Testing technique",
            "Error handling",
          ],
          correctAnswer: 1,
          explanation:
            "Monkey patching is dynamically modifying a class or module at runtime.",
        },
        {
          id: "py-a-8",
          question: "What is the Method Resolution Order (MRO)?",
          options: [
            "Method sorting",
            "The order in which base classes are searched for methods",
            "Method ranking",
            "Resolution algorithm",
          ],
          correctAnswer: 1,
          explanation:
            "MRO determines the order in which base classes are searched when looking for a method.",
        },
        {
          id: "py-a-9",
          question: "What are context managers?",
          options: [
            "Memory managers",
            "Objects implementing __enter__ and __exit__ for resource management",
            "Project managers",
            "Exception managers",
          ],
          correctAnswer: 1,
          explanation:
            "Context managers implement __enter__ and __exit__ methods for the with statement.",
        },
        {
          id: "py-a-10",
          question: "What is Cython?",
          options: [
            "A Python version",
            "A language for writing C extensions for Python",
            "A Python compiler",
            "A Python IDE",
          ],
          correctAnswer: 1,
          explanation:
            "Cython is a programming language for writing C extensions to Python for performance.",
        },
      ],
    },
  },
  fullstack: {
    react: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
    nodejs: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
    sql: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
    typescript: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
  },
  database: {
    sql: {
      beginner: [
        {
          id: "sql-b-1",
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Simple Question Language",
            "Standard Query Logic",
            "System Query Language",
          ],
          correctAnswer: 0,
          explanation:
            "SQL stands for Structured Query Language, used for managing and manipulating relational databases.",
        },
        {
          id: "sql-b-2",
          question:
            "Which SQL statement is used to extract data from a database?",
          options: ["GET", "SELECT", "EXTRACT", "FETCH"],
          correctAnswer: 1,
          explanation:
            "SELECT is the SQL statement used to query and retrieve data from database tables.",
        },
        {
          id: "sql-b-3",
          question: "What is a PRIMARY KEY in SQL?",
          options: [
            "A key that opens the database",
            "A unique identifier for each record in a table",
            "The first column in a table",
            "A type of index",
          ],
          correctAnswer: 1,
          explanation:
            "A PRIMARY KEY is a column (or set of columns) that uniquely identifies each row in a table.",
        },
        {
          id: "sql-b-4",
          question: "Which clause is used to filter records in SQL?",
          options: ["FILTER", "WHERE", "IF", "HAVING"],
          correctAnswer: 1,
          explanation:
            "The WHERE clause is used to filter records based on specified conditions.",
        },
        {
          id: "sql-b-5",
          question: "What does the JOIN operation do?",
          options: [
            "Combines columns from two or more tables",
            "Adds new rows to a table",
            "Deletes duplicate records",
            "Creates a new table",
          ],
          correctAnswer: 0,
          explanation:
            "JOIN is used to combine rows from two or more tables based on a related column between them.",
        },
        {
          id: "sql-b-6",
          question: "Which SQL command is used to add new records to a table?",
          options: ["ADD", "INSERT", "CREATE", "PUT"],
          correctAnswer: 1,
          explanation:
            "INSERT INTO is used to add new records (rows) to a table.",
        },
        {
          id: "sql-b-7",
          question: "What is the purpose of the ORDER BY clause?",
          options: [
            "To filter records",
            "To group records",
            "To sort the result set",
            "To join tables",
          ],
          correctAnswer: 2,
          explanation:
            "ORDER BY is used to sort the result set in ascending (ASC) or descending (DESC) order.",
        },
        {
          id: "sql-b-8",
          question: "Which SQL function returns the number of rows?",
          options: ["COUNT()", "SUM()", "NUMBER()", "ROWS()"],
          correctAnswer: 0,
          explanation:
            "COUNT() is an aggregate function that returns the number of rows that match a specified criterion.",
        },
        {
          id: "sql-b-9",
          question: "What does NULL represent in SQL?",
          options: [
            "Zero",
            "Empty string",
            "Missing or unknown value",
            "False",
          ],
          correctAnswer: 2,
          explanation:
            "NULL represents missing or unknown data in SQL. It is not the same as zero or an empty string.",
        },
        {
          id: "sql-b-10",
          question: "Which statement is used to modify existing records?",
          options: ["MODIFY", "UPDATE", "CHANGE", "ALTER"],
          correctAnswer: 1,
          explanation: "UPDATE is used to modify existing records in a table.",
        },
      ],
      intermediate: [
        {
          id: "sql-i-1",
          question: "What is the difference between INNER JOIN and LEFT JOIN?",
          options: [
            "No difference",
            "INNER returns matching rows, LEFT returns all left table rows plus matches",
            "LEFT is faster than INNER",
            "INNER joins more tables than LEFT",
          ],
          correctAnswer: 1,
          explanation:
            "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right table.",
        },
        {
          id: "sql-i-2",
          question: "What is a database index?",
          options: [
            "The first table in a database",
            "A data structure that improves query speed",
            "A type of constraint",
            "A backup of the database",
          ],
          correctAnswer: 1,
          explanation:
            "An index is a data structure that improves the speed of data retrieval operations at the cost of additional storage and slower writes.",
        },
        {
          id: "sql-i-3",
          question: "What is database normalization?",
          options: [
            "Making all column names lowercase",
            "Organizing data to reduce redundancy",
            "Backing up the database",
            "Encrypting sensitive data",
          ],
          correctAnswer: 1,
          explanation:
            "Normalization is the process of organizing data to minimize redundancy and dependency by dividing large tables into smaller ones.",
        },
        {
          id: "sql-i-4",
          question: "What is a FOREIGN KEY?",
          options: [
            "A key from another database",
            "A column that references the PRIMARY KEY of another table",
            "An encrypted key",
            "A backup key",
          ],
          correctAnswer: 1,
          explanation:
            "A FOREIGN KEY is a field that links to the PRIMARY KEY of another table, establishing relationships between tables.",
        },
        {
          id: "sql-i-5",
          question: "What does the GROUP BY clause do?",
          options: [
            "Sorts records",
            "Filters records",
            "Groups rows with same values into summary rows",
            "Joins multiple tables",
          ],
          correctAnswer: 2,
          explanation:
            "GROUP BY groups rows that have the same values in specified columns, often used with aggregate functions.",
        },
        {
          id: "sql-i-6",
          question: "What is a subquery?",
          options: [
            "A query that runs slowly",
            "A query nested inside another query",
            "The first query in a script",
            "A query without results",
          ],
          correctAnswer: 1,
          explanation:
            "A subquery is a query nested within another SQL query, used to provide data for the outer query.",
        },
        {
          id: "sql-i-7",
          question: "What is the difference between DELETE and TRUNCATE?",
          options: [
            "No difference",
            "DELETE removes specific rows with WHERE, TRUNCATE removes all rows faster",
            "TRUNCATE is slower than DELETE",
            "DELETE is a DDL command, TRUNCATE is DML",
          ],
          correctAnswer: 1,
          explanation:
            "DELETE removes rows conditionally and logs each deletion. TRUNCATE removes all rows quickly without logging individual deletions.",
        },
        {
          id: "sql-i-8",
          question: "What is a transaction in SQL?",
          options: [
            "A database backup",
            "A sequence of operations performed as a single unit of work",
            "A type of query",
            "A database connection",
          ],
          correctAnswer: 1,
          explanation:
            "A transaction is a sequence of operations that are executed as a single logical unit. It follows ACID properties.",
        },
        {
          id: "sql-i-9",
          question: "What does ACID stand for in databases?",
          options: [
            "Automatic, Continuous, Instant, Durable",
            "Atomicity, Consistency, Isolation, Durability",
            "Advanced, Consistent, Indexed, Distributed",
            "Atomic, Cached, Isolated, Dynamic",
          ],
          correctAnswer: 1,
          explanation:
            "ACID represents Atomicity, Consistency, Isolation, and Durability - key properties that guarantee reliable database transactions.",
        },
        {
          id: "sql-i-10",
          question: "What is a stored procedure?",
          options: [
            "A backup of stored data",
            "A precompiled set of SQL statements stored in the database",
            "A temporary table",
            "An index on a table",
          ],
          correctAnswer: 1,
          explanation:
            "A stored procedure is a prepared SQL code that you can save and reuse, improving performance and security.",
        },
      ],
      advanced: [
        {
          id: "sql-a-1",
          question: "What is a database deadlock?",
          options: [
            "When the database stops responding",
            "When two transactions wait for each other to release locks",
            "When a query takes too long",
            "When the database runs out of memory",
          ],
          correctAnswer: 1,
          explanation:
            "A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency.",
        },
        {
          id: "sql-a-2",
          question: "What is database sharding?",
          options: [
            "Backing up the database",
            "Horizontal partitioning of data across multiple databases",
            "Encrypting database files",
            "Creating database indexes",
          ],
          correctAnswer: 1,
          explanation:
            "Sharding is a database architecture pattern where data is horizontally partitioned across multiple databases for scalability.",
        },
        {
          id: "sql-a-3",
          question:
            "What is the difference between clustered and non-clustered indexes?",
          options: [
            "No difference",
            "Clustered determines physical order, non-clustered does not",
            "Clustered is faster",
            "Non-clustered uses more space",
          ],
          correctAnswer: 1,
          explanation:
            "A clustered index determines the physical order of data in a table. A non-clustered index creates a separate structure pointing to data.",
        },
        {
          id: "sql-a-4",
          question: "What is query optimization?",
          options: [
            "Making queries shorter",
            "Improving query performance through execution plan analysis",
            "Running queries in parallel",
            "Caching query results",
          ],
          correctAnswer: 1,
          explanation:
            "Query optimization involves analyzing and improving query execution plans to reduce resource usage and improve performance.",
        },
        {
          id: "sql-a-5",
          question: "What is a materialized view?",
          options: [
            "A regular view",
            "A physical copy of query results stored for faster access",
            "A temporary table",
            "An indexed column",
          ],
          correctAnswer: 1,
          explanation:
            "A materialized view stores the query results physically, unlike regular views which execute the query each time.",
        },
        {
          id: "sql-a-6",
          question: "What is the CAP theorem?",
          options: [
            "A SQL optimization technique",
            "Consistency, Availability, Partition tolerance trade-off in distributed systems",
            "A database backup strategy",
            "A query execution plan",
          ],
          correctAnswer: 1,
          explanation:
            "CAP theorem states that a distributed system can only guarantee two of three: Consistency, Availability, and Partition tolerance.",
        },
        {
          id: "sql-a-7",
          question: "What is a write-ahead log (WAL)?",
          options: [
            "A log of future queries",
            "A logging mechanism where changes are written to log before being applied",
            "A user activity log",
            "An error log",
          ],
          correctAnswer: 1,
          explanation:
            "WAL ensures durability by writing all modifications to a log before applying them to the database, enabling recovery after crashes.",
        },
        {
          id: "sql-a-8",
          question: "What is eventual consistency?",
          options: [
            "Data is always consistent",
            "Data becomes consistent given enough time without new updates",
            "Data is never consistent",
            "Data consistency is guaranteed immediately",
          ],
          correctAnswer: 1,
          explanation:
            "Eventual consistency is a consistency model where updates will propagate through the system and eventually all replicas will be consistent.",
        },
        {
          id: "sql-a-9",
          question: "What is a covering index?",
          options: [
            "The first index on a table",
            "An index that contains all columns needed for a query",
            "An index that covers the entire table",
            "A backup index",
          ],
          correctAnswer: 1,
          explanation:
            "A covering index includes all columns referenced in a query, allowing the database to satisfy the query without accessing the table.",
        },
        {
          id: "sql-a-10",
          question: "What is MVCC (Multi-Version Concurrency Control)?",
          options: [
            "Multiple database versions",
            "A concurrency control method that maintains multiple versions of data",
            "A backup strategy",
            "A replication technique",
          ],
          correctAnswer: 1,
          explanation:
            "MVCC allows multiple transactions to access the same data concurrently by maintaining multiple versions, reducing lock contention.",
        },
      ],
    },
    mongodb: {
      beginner: [
        {
          id: "mongo-b-1",
          question: "What type of database is MongoDB?",
          options: [
            "Relational",
            "NoSQL Document Database",
            "Graph Database",
            "Key-Value Store",
          ],
          correctAnswer: 1,
          explanation:
            "MongoDB is a NoSQL document-oriented database that stores data in flexible, JSON-like documents.",
        },
        {
          id: "mongo-b-2",
          question: "What format does MongoDB use to store data?",
          options: ["XML", "JSON", "BSON", "CSV"],
          correctAnswer: 2,
          explanation:
            "MongoDB stores data in BSON (Binary JSON) format, which extends JSON with additional data types.",
        },
        {
          id: "mongo-b-3",
          question: "What is a collection in MongoDB?",
          options: [
            "A group of databases",
            "A group of documents",
            "A group of fields",
            "A group of indexes",
          ],
          correctAnswer: 1,
          explanation:
            "A collection in MongoDB is equivalent to a table in relational databases and contains a group of documents.",
        },
        {
          id: "mongo-b-4",
          question: "What is a document in MongoDB?",
          options: [
            "A text file",
            "A row in a table",
            "A record stored as a BSON object",
            "A database schema",
          ],
          correctAnswer: 2,
          explanation:
            "A document is the basic unit of data in MongoDB, similar to a row in relational databases, stored as BSON.",
        },
        {
          id: "mongo-b-5",
          question: "Which method is used to insert a document in MongoDB?",
          options: ["add()", "insertOne()", "create()", "put()"],
          correctAnswer: 1,
          explanation:
            "insertOne() is used to insert a single document into a collection in MongoDB.",
        },
        {
          id: "mongo-b-6",
          question: "How do you query all documents in a collection?",
          options: [
            "db.collection.getAll()",
            "db.collection.find()",
            "db.collection.select()",
            "db.collection.query()",
          ],
          correctAnswer: 1,
          explanation:
            "find() method is used to query documents in a collection. find() without parameters returns all documents.",
        },
        {
          id: "mongo-b-7",
          question: "What is the _id field in MongoDB?",
          options: [
            "A user-defined field",
            "An automatic unique identifier for each document",
            "The first field in a document",
            "A timestamp field",
          ],
          correctAnswer: 1,
          explanation:
            "_id is a unique identifier automatically assigned to each document if not provided by the user.",
        },
        {
          id: "mongo-b-8",
          question:
            "Which operator is used for equality comparison in MongoDB queries?",
          options: ["==", "$eq", "===", "EQUALS"],
          correctAnswer: 1,
          explanation:
            "$eq operator is used for equality comparison in MongoDB queries, though it can also be implied.",
        },
        {
          id: "mongo-b-9",
          question: "What does the updateOne() method do?",
          options: [
            "Updates all documents",
            "Updates the first document that matches the query",
            "Updates one field",
            "Updates one collection",
          ],
          correctAnswer: 1,
          explanation:
            "updateOne() updates the first document that matches the specified filter criteria.",
        },
        {
          id: "mongo-b-10",
          question: "How do you delete a document in MongoDB?",
          options: ["remove()", "deleteOne()", "drop()", "erase()"],
          correctAnswer: 1,
          explanation:
            "deleteOne() removes a single document that matches the specified filter criteria.",
        },
      ],
      intermediate: [
        {
          id: "mongo-i-1",
          question: "What is an index in MongoDB?",
          options: [
            "A document counter",
            "A data structure that improves query performance",
            "A collection backup",
            "A database version",
          ],
          correctAnswer: 1,
          explanation:
            "Indexes in MongoDB are data structures that store a small portion of data in an easy-to-traverse form to improve query performance.",
        },
        {
          id: "mongo-i-2",
          question: "What is aggregation in MongoDB?",
          options: [
            "Adding documents",
            "Processing data records to return computed results",
            "Creating indexes",
            "Backing up data",
          ],
          correctAnswer: 1,
          explanation:
            "Aggregation operations process data records and return computed results like grouping, filtering, and transforming data.",
        },
        {
          id: "mongo-i-3",
          question: "What is a replica set in MongoDB?",
          options: [
            "A duplicate collection",
            "A group of MongoDB instances that maintain the same data",
            "A set of indexes",
            "A backup strategy",
          ],
          correctAnswer: 1,
          explanation:
            "A replica set is a group of MongoDB instances that maintain the same data set, providing redundancy and high availability.",
        },
        {
          id: "mongo-i-4",
          question: "What is sharding in MongoDB?",
          options: [
            "Data encryption",
            "Horizontal partitioning of data across multiple servers",
            "Creating indexes",
            "Data compression",
          ],
          correctAnswer: 1,
          explanation:
            "Sharding distributes data across multiple machines to handle large data sets and high throughput operations.",
        },
        {
          id: "mongo-i-5",
          question: "What is the purpose of the $match stage in aggregation?",
          options: [
            "To join collections",
            "To filter documents",
            "To sort documents",
            "To group documents",
          ],
          correctAnswer: 1,
          explanation:
            "$match filters documents to pass only those that match specified conditions to the next pipeline stage.",
        },
        {
          id: "mongo-i-6",
          question: "What is a covered query?",
          options: [
            "A query that uses all indexes",
            "A query that can be satisfied entirely using an index",
            "A query that covers all documents",
            "An encrypted query",
          ],
          correctAnswer: 1,
          explanation:
            "A covered query is one where all fields in the query are part of an index, so MongoDB can return results directly from the index.",
        },
        {
          id: "mongo-i-7",
          question: "What is the difference between find() and findOne()?",
          options: [
            "No difference",
            "find() returns a cursor, findOne() returns a single document",
            "findOne() is faster",
            "find() requires an index",
          ],
          correctAnswer: 1,
          explanation:
            "find() returns a cursor to iterate over multiple documents, while findOne() returns the first matching document directly.",
        },
        {
          id: "mongo-i-8",
          question: "What is the $lookup stage used for?",
          options: [
            "Searching documents",
            "Performing left outer join between collections",
            "Creating indexes",
            "Sorting documents",
          ],
          correctAnswer: 1,
          explanation:
            "$lookup performs a left outer join to another collection in the same database to filter in documents for processing.",
        },
        {
          id: "mongo-i-9",
          question: "What is write concern in MongoDB?",
          options: [
            "Data encryption level",
            "Level of acknowledgment requested from MongoDB for write operations",
            "Query performance",
            "Index type",
          ],
          correctAnswer: 1,
          explanation:
            "Write concern describes the level of acknowledgment requested from MongoDB for write operations to a standalone or replica set.",
        },
        {
          id: "mongo-i-10",
          question: "What is the purpose of the explain() method?",
          options: [
            "To document queries",
            "To provide information about query execution",
            "To translate queries",
            "To optimize indexes",
          ],
          correctAnswer: 1,
          explanation:
            "explain() provides information about how MongoDB executes a query, useful for performance optimization.",
        },
      ],
      advanced: [],
    },
    postgresql: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
    redis: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
  },
  aiml: {
    python_ml: {
      beginner: [
        {
          id: "pyml-b-1",
          question:
            "Which Python library is most commonly used for machine learning?",
          options: ["NumPy", "scikit-learn", "Pandas", "Matplotlib"],
          correctAnswer: 1,
          explanation:
            "scikit-learn is the most widely used library for machine learning in Python, providing simple and efficient tools for data analysis.",
        },
        {
          id: "pyml-b-2",
          question: "What is NumPy primarily used for?",
          options: [
            "Web development",
            "Numerical computations with arrays",
            "Database management",
            "GUI development",
          ],
          correctAnswer: 1,
          explanation:
            "NumPy is used for efficient numerical computations with multi-dimensional arrays and mathematical functions.",
        },
        {
          id: "pyml-b-3",
          question: "What is Pandas primarily used for?",
          options: [
            "Machine learning algorithms",
            "Data manipulation and analysis",
            "Creating visualizations",
            "Deep learning",
          ],
          correctAnswer: 1,
          explanation:
            "Pandas provides data structures and data analysis tools for handling and analyzing structured data.",
        },
        {
          id: "pyml-b-4",
          question: "What is a DataFrame in Pandas?",
          options: [
            "A type of neural network",
            "A 2-dimensional labeled data structure",
            "An image format",
            "A database table",
          ],
          correctAnswer: 1,
          explanation:
            "A DataFrame is a 2-dimensional labeled data structure with columns of potentially different types, like a spreadsheet or SQL table.",
        },
        {
          id: "pyml-b-5",
          question: "Which library is used for data visualization in Python?",
          options: ["TensorFlow", "Matplotlib", "Keras", "SciPy"],
          correctAnswer: 1,
          explanation:
            "Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.",
        },
        {
          id: "pyml-b-6",
          question: "What is the purpose of train_test_split in scikit-learn?",
          options: [
            "To train a model",
            "To split data into training and testing sets",
            "To test model accuracy",
            "To split features and labels",
          ],
          correctAnswer: 1,
          explanation:
            "train_test_split divides a dataset into separate training and testing sets to evaluate model performance on unseen data.",
        },
        {
          id: "pyml-b-7",
          question: "What is a feature in machine learning?",
          options: [
            "The output variable",
            "An input variable used to make predictions",
            "A model parameter",
            "A hyperparameter",
          ],
          correctAnswer: 1,
          explanation:
            "A feature is an individual measurable property or characteristic of a phenomenon being observed, used as input to a model.",
        },
        {
          id: "pyml-b-8",
          question: "What does fit() method do in scikit-learn?",
          options: [
            "Tests the model",
            "Trains the model on data",
            "Evaluates model performance",
            "Saves the model",
          ],
          correctAnswer: 1,
          explanation:
            "The fit() method trains the machine learning model using the provided training data.",
        },
        {
          id: "pyml-b-9",
          question: "What is the predict() method used for?",
          options: [
            "Training a model",
            "Making predictions on new data",
            "Evaluating accuracy",
            "Preprocessing data",
          ],
          correctAnswer: 1,
          explanation:
            "predict() makes predictions on new or test data using a trained model.",
        },
        {
          id: "pyml-b-10",
          question: "What is Jupyter Notebook?",
          options: [
            "A Python library",
            "An interactive coding environment",
            "A machine learning algorithm",
            "A database system",
          ],
          correctAnswer: 1,
          explanation:
            "Jupyter Notebook is an open-source web application for creating and sharing documents with live code, equations, visualizations, and text.",
        },
      ],
      intermediate: [],
      advanced: [],
    },
    machine_learning: {
      beginner: [
        {
          id: "ml-b-1",
          question: "What is supervised learning?",
          options: [
            "Learning without labels",
            "Learning from labeled training data",
            "Learning through trial and error",
            "Unsupervised clustering",
          ],
          correctAnswer: 1,
          explanation:
            "Supervised learning uses labeled training data where the model learns from input-output pairs to make predictions on new data.",
        },
        {
          id: "ml-b-2",
          question: "What is unsupervised learning?",
          options: [
            "Learning with labeled data",
            "Learning from unlabeled data to find patterns",
            "Reinforcement learning",
            "Transfer learning",
          ],
          correctAnswer: 1,
          explanation:
            "Unsupervised learning finds patterns in unlabeled data without predefined outputs, such as clustering or dimensionality reduction.",
        },
        {
          id: "ml-b-3",
          question: "What is a classification problem?",
          options: [
            "Predicting continuous values",
            "Predicting discrete categories or labels",
            "Finding clusters",
            "Reducing dimensions",
          ],
          correctAnswer: 1,
          explanation:
            "Classification is a supervised learning task where the model predicts discrete categories or labels for given inputs.",
        },
        {
          id: "ml-b-4",
          question: "What is a regression problem?",
          options: [
            "Predicting categories",
            "Predicting continuous numerical values",
            "Clustering data",
            "Classifying images",
          ],
          correctAnswer: 1,
          explanation:
            "Regression is predicting continuous numerical values, such as predicting house prices or temperature.",
        },
        {
          id: "ml-b-5",
          question: "What is overfitting?",
          options: [
            "Model performs well on all data",
            "Model performs well on training data but poorly on new data",
            "Model is too simple",
            "Model has too few features",
          ],
          correctAnswer: 1,
          explanation:
            "Overfitting occurs when a model learns training data too well, including noise, resulting in poor generalization to new data.",
        },
        {
          id: "ml-b-6",
          question: "What is underfitting?",
          options: [
            "Model is too complex",
            "Model is too simple to capture underlying patterns",
            "Model has perfect accuracy",
            "Model overfits the data",
          ],
          correctAnswer: 1,
          explanation:
            "Underfitting occurs when a model is too simple to capture the underlying patterns in the data, performing poorly on both training and test data.",
        },
        {
          id: "ml-b-7",
          question: "What is a training set?",
          options: [
            "Data used to evaluate the model",
            "Data used to train the model",
            "Data used for final testing",
            "Unlabeled data",
          ],
          correctAnswer: 1,
          explanation:
            "The training set is the portion of data used to train the machine learning model by learning patterns from it.",
        },
        {
          id: "ml-b-8",
          question: "What is a test set?",
          options: [
            "Data used to train the model",
            "Data used to evaluate model performance",
            "Data used for validation",
            "Augmented data",
          ],
          correctAnswer: 1,
          explanation:
            "The test set is unseen data used to evaluate the final model's performance and generalization ability.",
        },
        {
          id: "ml-b-9",
          question: "What is accuracy in machine learning?",
          options: [
            "Number of features",
            "Ratio of correct predictions to total predictions",
            "Training time",
            "Model complexity",
          ],
          correctAnswer: 1,
          explanation:
            "Accuracy is the ratio of correct predictions to the total number of predictions made, measuring overall performance.",
        },
        {
          id: "ml-b-10",
          question: "What is a hyperparameter?",
          options: [
            "A parameter learned during training",
            "A parameter set before training that controls the learning process",
            "The output of a model",
            "An input feature",
          ],
          correctAnswer: 1,
          explanation:
            "Hyperparameters are configuration settings set before training that control the learning process, like learning rate or tree depth.",
        },
      ],
      intermediate: [
        {
          id: "ml-i-1",
          question: "What is cross-validation?",
          options: [
            "Testing on a single dataset",
            "A technique to assess model performance by splitting data into multiple folds",
            "Validating hyperparameters",
            "Comparing multiple models",
          ],
          correctAnswer: 1,
          explanation:
            "Cross-validation splits data into k folds, training on k-1 folds and validating on the remaining fold, repeated k times for robust evaluation.",
        },
        {
          id: "ml-i-2",
          question: "What is feature engineering?",
          options: [
            "Building model architecture",
            "Creating new features or transforming existing ones to improve model performance",
            "Selecting the best algorithm",
            "Tuning hyperparameters",
          ],
          correctAnswer: 1,
          explanation:
            "Feature engineering involves creating, transforming, or selecting features to improve model performance and capture important patterns.",
        },
        {
          id: "ml-i-3",
          question: "What is regularization?",
          options: [
            "Making data regular",
            "A technique to prevent overfitting by adding a penalty term",
            "Normalizing features",
            "Cleaning data",
          ],
          correctAnswer: 1,
          explanation:
            "Regularization adds a penalty term to the loss function to prevent overfitting by discouraging complex models (L1, L2 regularization).",
        },
        {
          id: "ml-i-4",
          question: "What is the confusion matrix?",
          options: [
            "A matrix of model weights",
            "A table showing true positives, false positives, true negatives, false negatives",
            "Input data matrix",
            "Feature correlation matrix",
          ],
          correctAnswer: 1,
          explanation:
            "A confusion matrix visualizes classification performance by showing true positives, false positives, true negatives, and false negatives.",
        },
        {
          id: "ml-i-5",
          question: "What is precision in classification?",
          options: [
            "Total correct predictions",
            "Ratio of true positives to all positive predictions",
            "Ratio of true positives to actual positives",
            "Average accuracy",
          ],
          correctAnswer: 1,
          explanation:
            "Precision is the ratio of true positives to all positive predictions (TP / (TP + FP)), measuring prediction accuracy for positive class.",
        },
        {
          id: "ml-i-6",
          question: "What is recall (sensitivity)?",
          options: [
            "Ratio of correct predictions",
            "Ratio of true positives to all actual positives",
            "Ratio of true negatives",
            "Average score",
          ],
          correctAnswer: 1,
          explanation:
            "Recall is the ratio of true positives to all actual positives (TP / (TP + FN)), measuring how many actual positives were identified.",
        },
        {
          id: "ml-i-7",
          question: "What is the F1 score?",
          options: [
            "Average of all metrics",
            "Harmonic mean of precision and recall",
            "Sum of accuracy and loss",
            "Maximum accuracy achieved",
          ],
          correctAnswer: 1,
          explanation:
            "F1 score is the harmonic mean of precision and recall (2 * (precision * recall) / (precision + recall)), balancing both metrics.",
        },
        {
          id: "ml-i-8",
          question: "What is gradient descent?",
          options: [
            "A classification algorithm",
            "An optimization algorithm to minimize loss by updating parameters",
            "A data preprocessing technique",
            "A feature selection method",
          ],
          correctAnswer: 1,
          explanation:
            "Gradient descent is an optimization algorithm that iteratively adjusts model parameters to minimize the loss function.",
        },
        {
          id: "ml-i-9",
          question: "What is a decision tree?",
          options: [
            "A neural network",
            "A tree-like model that makes decisions based on feature values",
            "A linear model",
            "A clustering algorithm",
          ],
          correctAnswer: 1,
          explanation:
            "A decision tree is a model that makes predictions by learning decision rules from features, creating a tree structure of decisions.",
        },
        {
          id: "ml-i-10",
          question: "What is ensemble learning?",
          options: [
            "Training one powerful model",
            "Combining multiple models to improve performance",
            "Using all features",
            "Training on all data",
          ],
          correctAnswer: 1,
          explanation:
            "Ensemble learning combines multiple models (like random forests or boosting) to achieve better performance than individual models.",
        },
      ],
      advanced: [
        {
          id: "ml-a-1",
          question: "What is the bias-variance tradeoff?",
          options: [
            "Tradeoff between speed and accuracy",
            "Tradeoff between underfitting and overfitting",
            "Tradeoff between precision and recall",
            "Tradeoff between training and testing",
          ],
          correctAnswer: 1,
          explanation:
            "Bias-variance tradeoff describes the balance between model simplicity (bias) and model complexity (variance) to minimize total error.",
        },
        {
          id: "ml-a-2",
          question: "What is transfer learning?",
          options: [
            "Moving data between systems",
            "Using knowledge from one task to improve learning on another task",
            "Transferring models to production",
            "Converting model formats",
          ],
          correctAnswer: 1,
          explanation:
            "Transfer learning leverages knowledge learned from one task (often pre-trained models) to improve performance on a related task.",
        },
        {
          id: "ml-a-3",
          question: "What is dimensionality reduction?",
          options: [
            "Reducing model size",
            "Reducing the number of features while preserving information",
            "Reducing training time",
            "Reducing overfitting",
          ],
          correctAnswer: 1,
          explanation:
            "Dimensionality reduction techniques like PCA reduce the number of features while retaining most important information.",
        },
        {
          id: "ml-a-4",
          question: "What is k-means clustering?",
          options: [
            "A supervised learning algorithm",
            "An unsupervised algorithm that groups data into k clusters",
            "A classification algorithm",
            "A dimensionality reduction technique",
          ],
          correctAnswer: 1,
          explanation:
            "k-means is an unsupervised learning algorithm that partitions data into k clusters based on feature similarity.",
        },
        {
          id: "ml-a-5",
          question: "What is Principal Component Analysis (PCA)?",
          options: [
            "A classification method",
            "A technique to reduce dimensionality by finding principal components",
            "A clustering algorithm",
            "A regularization technique",
          ],
          correctAnswer: 1,
          explanation:
            "PCA reduces dimensionality by transforming data to a new coordinate system where the greatest variances lie on principal components.",
        },
        {
          id: "ml-a-6",
          question: "What is the ROC curve?",
          options: [
            "A learning curve",
            "A curve showing tradeoff between true positive and false positive rates",
            "A loss curve",
            "An accuracy curve",
          ],
          correctAnswer: 1,
          explanation:
            "ROC (Receiver Operating Characteristic) curve plots true positive rate vs false positive rate at various threshold settings.",
        },
        {
          id: "ml-a-7",
          question: "What is AUC in ROC-AUC?",
          options: [
            "Average Under Curve",
            "Area Under the ROC Curve",
            "Accuracy Under Conditions",
            "Automated Universal Classification",
          ],
          correctAnswer: 1,
          explanation:
            "AUC (Area Under the ROC Curve) measures the model's ability to distinguish between classes; higher values indicate better performance.",
        },
        {
          id: "ml-a-8",
          question: "What is bagging in ensemble learning?",
          options: [
            "Removing outliers",
            "Training multiple models on bootstrap samples and averaging predictions",
            "Selecting best features",
            "Sequential model training",
          ],
          correctAnswer: 1,
          explanation:
            "Bagging (Bootstrap Aggregating) trains multiple models on different bootstrap samples and combines their predictions to reduce variance.",
        },
        {
          id: "ml-a-9",
          question: "What is boosting?",
          options: [
            "Increasing training data",
            "Sequential ensemble method where models correct predecessors' errors",
            "Increasing model size",
            "Accelerating training",
          ],
          correctAnswer: 1,
          explanation:
            "Boosting sequentially trains models where each model focuses on correcting errors made by previous models, reducing bias.",
        },
        {
          id: "ml-a-10",
          question: "What is the curse of dimensionality?",
          options: [
            "Too many model parameters",
            "Problems that arise when working with high-dimensional data",
            "Slow training time",
            "Memory limitations",
          ],
          correctAnswer: 1,
          explanation:
            "The curse of dimensionality refers to phenomena where data becomes sparse in high-dimensional spaces, making learning difficult.",
        },
      ],
    },
    deep_learning: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
    nlp: {
      beginner: [],
      intermediate: [],
      advanced: [],
    },
  },
};

// Copy frontend and backend questions to fullstack
quizData.fullstack.react = quizData.frontend.react;
quizData.fullstack.nodejs = quizData.backend.nodejs;
quizData.fullstack.sql = quizData.backend.sql;
quizData.fullstack.typescript = quizData.frontend.typescript;

// Reference SQL questions in database category
quizData.database.sql = quizData.backend.sql;

// Shuffle options while maintaining the correct answer
const shuffleOptions = (question: Question): Question => {
  const { options, correctAnswer } = question;

  // Create array of indices
  const indices = options.map((_, idx) => idx);

  // Shuffle indices using Fisher-Yates algorithm
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Remap options and find new correct answer index
  const shuffledOptions = indices.map((idx) => options[idx]);
  const newCorrectAnswer = indices.indexOf(correctAnswer);

  return {
    ...question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer,
  };
};

export const getQuestions = (
  field: string,
  technology: string,
  difficulty: string,
  count: number = 10
): Question[] => {
  const questions = quizData[field]?.[technology]?.[difficulty] || [];

  // Shuffle questions
  const shuffled = [...questions].sort(() => Math.random() - 0.5);

  // Shuffle options for each question
  const withShuffledOptions = shuffled.map((q) => shuffleOptions(q));

  return withShuffledOptions.slice(0, count);
};
