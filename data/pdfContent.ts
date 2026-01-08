/**
 * INTERVIEW PREPARATION CONTENT DATA
 * Total estimated length: ~2500 lines of data
 * Coverage: Frontend, Backend, Database, DevOps, System Design, Security.
 */

export interface PDFTopic {
  title: string;
  concepts: string[];
  questions: { q: string; a: string }[];
  codeSnippets?: { title: string; code: string }[];
  tips: string[];
}

export interface PDFContentData {
  [technology: string]: PDFTopic;
}

export const pdfContent: PDFContentData = {
  react: {
    title: "Senior React & Ecosystem Deep Dive",
    concepts: [
      "Fiber Architecture: The incremental rendering engine designed to increase responsiveness.",
      "Reconciliation Algorithm: How React diffs the tree in O(n) using keys and component types.",
      "Server Components (RSC): Zero-bundle-size components that run exclusively on the server.",
      "Hydration: The process of attaching event listeners to server-rendered HTML.",
      "Batching: How React 18+ groups state updates into a single re-render for performance.",
      "Transitions: Using useTransition to prioritize urgent updates over background ones.",
      "Suspense: Declarative loading states for data fetching and code splitting.",
      "Context API vs Composition: When to use providers vs passing components as props.",
      "Custom Hooks: Encapsulating complex logic (data fetching, observers, form state).",
      "Portals: Rendering children into DOM nodes outside the main component hierarchy.",
      "Error Boundaries: Catching JS errors in the UI tree to prevent full app crashes.",
      'The "Rules of Hooks": Why hooks must be called at the top level and in the same order.',
      "Memoization: useMemo, useCallback, and React.memo — when they help and when they hurt.",
      "Synthetic Events: Reacts cross-browser wrapper around native DOM events.",
      "Ref Forwarding: Accessing child DOM nodes from parent components using forwardRef.",
      "Strict Mode: Development-only tool for highlighting potential problems in an application.",
      "Concurrent Mode: Rendering multiple versions of the UI simultaneously in memory.",
      "Effect Life-cycle: Mounting, updating, and the crucial cleanup phase.",
      "Profiling: Using the React DevTools Profiler to identify commit-phase bottlenecks.",
      "HOCs vs Render Props: Historical patterns for code reuse before Hooks.",
    ],
    questions: [
      {
        q: "What is the difference between a Component and an Element in React?",
        a: "An Element is a plain object describing what you want to see on the screen. A Component is a function or class that optionally accepts input and returns a React element.",
      },
      {
        q: 'Explain the "Single Source of Truth" principle in React.',
        a: "It refers to maintaining state in a central location (like a parent or store) and passing it down, ensuring the UI is a pure reflection of that state.",
      },
      {
        q: "How does the useEffect cleanup function work?",
        a: "It runs before the component unmounts and before the effect runs again on the next render, preventing memory leaks and duplicate subscriptions.",
      },
      {
        q: 'What is "Prop Drilling" and what are the 5 ways to solve it?',
        a: "It is passing data through components that dont need it. Solutions: Component Composition, Context API, Redux/Zustand, React Query (server state), or passing the component as a prop.",
      },
      {
        q: "Why shouldn’t you use index as a key?",
        a: "If the list order changes, React will incorrectly map state to the wrong DOM elements, causing UI bugs and performance degradation.",
      },
      {
        q: "What is the purpose of useLayoutEffect?",
        a: "It fires synchronously after all DOM mutations but before the browser paints. Use it for reading DOM layout and performing synchronous re-renders to avoid visual flickering.",
      },
      {
        q: 'What is "Hydration Mismatch" and how do you fix it?',
        a: "It occurs when the server-rendered HTML differs from the first client-side render. Fix it by ensuring consistent data or using useEffect to delay client-only rendering.",
      },
      {
        q: "What are controlled vs uncontrolled components?",
        a: "Controlled components have their value managed by React state. Uncontrolled components use Refs to pull values from the DOM when needed.",
      },
      {
        q: "How does React 18 Automatic Batching work?",
        a: "Previously, React only batched updates in event handlers. Now, updates inside promises, setTimeouts, and native events are also batched automatically.",
      },
      {
        q: 'Explain the "stale closure" problem in useEffect.',
        a: 'When an effect captures a variable from a render, but that variable changes and the effect doesn’t re-run (missing dependency), the effect uses the "stale" old value.',
      },
    ],
    codeSnippets: [
      {
        title: "Custom Hook: useFetch with AbortController",
        code: `function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    
    fetch(url, { signal: controller.signal })
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, loading };
}`,
      },
      {
        title: "React.forwardRef with Imperative Handle",
        code: `const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    shake: () => { /* animation logic */ }
  }));
  return <input ref={inputRef} {...props} />;
});`,
      },
      {
        title: "High Performance List Memoization",
        code: `const ListItem = React.memo(({ item, onSelect }) => {
  return <div onClick={() => onSelect(item.id)}>{item.name}</div>;
}, (prev, next) => prev.item.id === next.item.id);`,
      },
    ],
    tips: [
      "Keep your state flat; deeply nested objects make updates difficult and error-prone.",
      "Always use a linter for hooks (eslint-plugin-react-hooks) to catch dependency issues.",
      'Lazy load components that are not needed for the initial "Above the Fold" view.',
      "Use fragments `<></>` to avoid adding unnecessary DOM nodes.",
      "Prefer functional components over class components for better minification and future-proofing.",
    ],
  },
  javascript: {
    title: "Advanced JavaScript (V8, ESNext & Internals)",
    concepts: [
      "V8 Engine: JIT (Just-In-Time) compilation, Ignition interpreter, and Turbofan compiler.",
      "Event Loop Phases: Microtasks (Promises) vs Macrotasks (setTimeout, I/O).",
      "Memory Management: Stack (primitives) vs Heap (objects) and Mark-and-Sweep GC.",
      'Execution Context: Global context, Function context, and the "this" binding.',
      "Lexical Scoping: How functions look up variables based on where they were defined.",
      "Closures: Encapsulation and the persistent scope of a function.",
      "Prototypal Inheritance: The __proto__ chain and Object.create().",
      'The "this" Keyword: Implicit, explicit (call/apply/bind), and arrow function rules.',
      "Asynchronous Patterns: Callbacks, Promises, async/await, and Generators.",
      "Strict Mode: Opting into a restricted variant of JS that fixes common silent errors.",
      "ES Modules (ESM) vs CommonJS (CJS): Static vs dynamic importing.",
      "Proxy & Reflect: Meta-programming and intercepting object operations.",
      "WeakMap & WeakSet: Garbage-collectible collections for memory-sensitive apps.",
      "Symbol: Creating unique, non-enumerable property keys.",
      "Iterators & Iterables: The protocol behind for...of and spread operators.",
      "Currying & Partial Application: Transform functions for functional programming.",
      "Bitwise Operators: Handling binary data and flag systems efficiently.",
      "Temporal Dead Zone: Why you cannot access let/const before declaration.",
      "Event Bubbling & Capture: How events propagate through the DOM tree.",
      "Web Workers: Offloading heavy computations to background threads.",
    ],
    questions: [
      {
        q: "Explain the difference between Microtasks and Macrotasks.",
        a: "Microtasks (Promise.then, queueMicrotask) run immediately after the current script and before the next macrotask (setTimeout, setInterval). The event loop clears the entire microtask queue before moving on.",
      },
      {
        q: 'What is a "Closure" and give a real-world use case?',
        a: "A closure is a function bundled with its lexical environment. Use case: Creating private variables or factory functions.",
      },
      {
        q: 'How does "Prototypal Inheritance" differ from "Classical Inheritance"?',
        a: "Classical inheritance involves classes inheriting from classes. Prototypal involves objects inheriting directly from other objects via the prototype link.",
      },
      {
        q: 'What is the "Temporal Dead Zone" (TDZ)?',
        a: "It is the behavior in JS where let and const variables are unreachable from the start of their block until the line they are declared.",
      },
      {
        q: 'What happens when you call "new" on a function?',
        a: '1. A new empty object is created. 2. The object is linked to the function’s prototype. 3. "this" is bound to the new object. 4. The object is returned (unless the function returns another object).',
      },
      {
        q: "Difference between .call(), .apply(), and .bind()?",
        a: "call() and apply() execute the function immediately (call uses comma-separated args, apply uses an array). bind() returns a new function with the context bound for later use.",
      },
      {
        q: 'What is "Tree Shaking"?',
        a: "A form of dead-code elimination used in modern bundlers to remove unused exports from the final bundle.",
      },
      {
        q: 'Explain "Event Delegation".',
        a: "Attaching a single event listener to a parent element to handle events for all current and future children using event bubbling.",
      },
      {
        q: "How do you check if an object is an Array?",
        a: 'Using Array.isArray(obj). typeof returns "object" for arrays, which is not helpful.',
      },
      {
        q: "What are the primitive types in JavaScript?",
        a: "string, number, boolean, undefined, null, symbol, and bigint.",
      },
    ],
    codeSnippets: [
      {
        title: "Deep Clone Utility (Recursive)",
        code: `function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const cloned = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) cloned[key] = deepClone(obj[key]);
  }
  return cloned;
}`,
      },
      {
        title: "Debounce vs Throttle",
        code: `const debounce = (fn, delay) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), delay);
  };
};

const throttle = (fn, limit) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
};`,
      },
      {
        title: "Promisifying a Callback",
        code: `const promisify = (fn) => (...args) => {
  return new Promise((resolve, reject) => {
    fn(...args, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};`,
      },
    ],
    tips: [
      "Use `const` by default. Use `let` only if you need to reassign a variable.",
      "Avoid using `eval()`—it opens security risks and ruins V8 optimizations.",
      "Be careful with floating-point math: `0.1 + 0.2 !== 0.3`. Use integers or libraries like Big.js.",
      "Always use strict equality `===` to avoid hidden type coercion bugs.",
      "Use the `structuredClone()` global for deep copying if browser support allows.",
    ],
  },
  typescript: {
    title: "TypeScript (Type Systems, Generics & DX)",
    concepts: [
      "Structural Typing: TS checks shapes of objects, not their explicit names (Duck Typing).",
      "Generics: Writing reusable code that works across multiple types while maintaining safety.",
      "Intersection vs Union: Combining types (&) vs choosing between types (|).",
      "Type Guards: using `typeof`, `instanceof`, and custom predicates to narrow types.",
      'Discriminated Unions: Using a literal "type" property to narrow complex objects.',
      "Utility Types: Partial, Pick, Omit, Record, Readonly, NonNullable.",
      "Mapped Types: Creating new types by iterating over keys of an existing type.",
      'Conditional Types: "T extends U ? X : Y" — logic within the type system.',
      'The "infer" Keyword: Extracting types from within other types in conditions.',
      "Template Literal Types: Manipulating strings at the type level (e.g., `get${Capitalize<string>}`).",
      "Unknown vs Any: Why unknown is the safer alternative to any.",
      "Never Type: Representing values that should never occur (exhaustive checks).",
      "Ambient Modules: Using .d.ts files for third-party libraries without types.",
      "Declaration Merging: How TS merges multiple interfaces with the same name.",
      "Decorator Support: Metadata-driven programming (common in Angular/NestJS).",
      "Satisfies Operator: Validating a type without widening its literal values.",
      "Branded Types: Creating unique types for primitives (e.g., Email vs string).",
      'Type Assertions (as): Telling the compiler "trust me, I know better".',
      "Const Assertions: Making an object completely read-only and literal.",
      "Module Resolution: How TS finds files based on tsconfig paths.",
    ],
    questions: [
      {
        q: "Difference between Interface and Type?",
        a: "Interfaces are better for object shapes and support merging. Types are better for unions, intersections, and complex aliases.",
      },
      {
        q: 'What are "Generics" and why use them?',
        a: 'They allow a component to work with a variety of types while maintaining type safety, rather than using "any".',
      },
      {
        q: 'Explain the "keyof" and "typeof" operators.',
        a: "keyof returns a union of an objects keys. typeof returns the type of a variable or property.",
      },
      {
        q: 'What is "Type Narrowing"?',
        a: 'The process of refining a wide type (like string | number) into a specific type using logic like `if (typeof val === "string")`.',
      },
      {
        q: 'What is a "Discriminated Union"?',
        a: 'A pattern where every type in a union has a common literal property (like "kind" or "type") used to safely distinguish between them.',
      },
      {
        q: "How do you make all properties of a type optional?",
        a: "Using the `Partial<T>` utility type.",
      },
      {
        q: 'What is "Abstract Class" in TS?',
        a: "A class that cannot be instantiated directly and serves as a base for other classes, often containing abstract methods.",
      },
      {
        q: 'Explain "Non-null assertion operator (!)".',
        a: "It tells TS that a variable is definitely NOT null or undefined, even if the compiler thinks otherwise. Use with caution.",
      },
      {
        q: 'What is the "satisfies" operator?',
        a: "It checks if a value matches a type but keeps the specific type of the value instead of widening it to the interface.",
      },
      {
        q: "How can you capture the return type of a function?",
        a: "Using the `ReturnType<typeof funcName>` utility.",
      },
    ],
    codeSnippets: [
      {
        title: "Advanced Generic Constraint",
        code: `function getProp<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: 'Alice' };
const name = getProp(user, 'name'); // Typed as string`,
      },
      {
        title: "Discriminated Union + Exhaustive Check",
        code: `type Action = 
  | { type: 'LOGIN', user: string }
  | { type: 'LOGOUT' };

function reducer(action: Action) {
  switch (action.type) {
    case 'LOGIN': return action.user;
    case 'LOGOUT': return null;
    default:
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
  }
}`,
      },
      {
        title: "Complex Mapped Type",
        code: `type Getter<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
};

interface Person { name: string; age: number; }
type PersonGetters = Getter<Person>; 
// { getName: () => string; getAge: () => number; }`,
      },
    ],
    tips: [
      "Set `strict: true` in your tsconfig.json—it is the most important setting.",
      "Avoid the `any` type at all costs; use `unknown` if you are unsure.",
      "Use `Record<string, T>` instead of the object type for better mapping.",
      "Leverage Type Inference—don’t annotate everything if TS can figure it out.",
      "Use the `Exclude<T, U>` utility to filter types out of a union.",
    ],
  },
  nodejs: {
    title: "Node.js (Backend, Performance & Architecture)",
    concepts: [
      "Event Loop Phases: Timers, Pending, Idle, Poll, Check, Close callbacks.",
      "Non-blocking I/O: How Node offloads work to the OS and continues execution.",
      "Libuv: The C library that provides the event loop and thread pool.",
      "Worker Threads: Running CPU-intensive tasks without blocking the main thread.",
      "Streams: Readable, Writable, Duplex, and Transform (Memory-efficient data handling).",
      "Buffers: Handling raw binary data (TCP streams, file system).",
      "Event Emitter: The core pattern for asynchronous event-driven architecture.",
      "Middleware Pattern: Layering logic in request/response cycles (Express/Fastify).",
      "Process Management: fork vs spawn vs exec.",
      "Clustering: Spawning multiple processes to utilize multi-core CPUs.",
      "Package Management: npm vs yarn vs pnpm (caching, lockfiles, symlinks).",
      "Security: Preventing SQL injection, ReDoS, and timing attacks.",
      "Garbage Collection in V8: Scavenge (young) vs Mark-Sweep (old) spaces.",
      "Microservices: Communicating via gRPC, RabbitMQ, or Kafka.",
      "Fastify vs Express: Why performance-oriented frameworks use schemas.",
      "REPL: Read-Eval-Print Loop for testing snippets.",
      'CJS vs ESM in Node: The "type: module" flag and file extensions.',
      "Error Handling: Operational errors vs Programmer errors.",
      "Memory Leaks: Detecting unclosed sockets, global variables, and closures.",
      "Dockerizing Node: Multi-stage builds and non-root users for security.",
    ],
    questions: [
      {
        q: "Is Node.js truly single-threaded?",
        a: "The JavaScript execution is single-threaded, but the Libuv library uses a thread pool (usually 4 threads) to handle heavy I/O operations like file system access or crypto.",
      },
      {
        q: 'When should you use "process.nextTick()"?',
        a: "When you need to execute a callback immediately after the current operation completes, but before the event loop continues to the next phase.",
      },
      {
        q: 'What is "Backpressure" in streams?',
        a: "When a readable stream provides data faster than the writable stream can handle, causing data to buffer in memory. It is managed by the `.pipe()` method or `drain` events.",
      },
      {
        q: 'Explain "Cluster" module.',
        a: "It allows you to create child processes (workers) that share the same server port, allowing Node to handle much more traffic by using all CPU cores.",
      },
      {
        q: 'Difference between "spawn" and "exec"?',
        a: "spawn returns a stream (better for large data), while exec buffers the entire output and returns it in a callback (better for small results).",
      },
      {
        q: "How do you handle unhandled promise rejections?",
        a: "By listening to the `unhandledRejection` event on the `process` object.",
      },
      {
        q: 'What are "Worker Threads" used for?',
        a: "For CPU-heavy tasks like image processing or complex math, which would otherwise freeze the single-threaded event loop.",
      },
      {
        q: "How does Node handle password hashing?",
        a: "Usually via the built-in `crypto` module (scrypt/pbkdf2) or libraries like `bcrypt`.",
      },
      {
        q: 'What is the purpose of "package-lock.json"?',
        a: 'To ensure that the exact same dependency tree is installed across all environments, preventing "it works on my machine" bugs.',
      },
      {
        q: 'Explain the "Reactor Pattern".',
        a: "The fundamental pattern where an event demultiplexer gathers requests and dispatches them to specific handlers (the reactor).",
      },
    ],
    codeSnippets: [
      {
        title: "Manual Stream Pipe with Backpressure",
        code: `function customPipe(readable, writable) {
  readable.on('data', (chunk) => {
    const ok = writable.write(chunk);
    if (!ok) {
      readable.pause();
      writable.once('drain', () => readable.resume());
    }
  });
  readable.on('end', () => writable.end());
}`,
      },
      {
        title: "Worker Thread Implementation",
        code: `// main.js
const { Worker } = require('worker_threads');
const worker = new Worker('./task.js');
worker.postMessage(data);
worker.on('message', result => console.log(result));

// task.js
const { parentPort } = require('worker_threads');
parentPort.on('message', (data) => {
  const result = heavyComputation(data);
  parentPort.postMessage(result);
});`,
      },
      {
        title: "Cluster Module Setup",
        code: `const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) cluster.fork();
} else {
  http.createServer((req, res) => res.end('Hello')).listen(8000);
}`,
      },
    ],
    tips: [
      "Avoid `fs.readFileSync` in a production server; it blocks the entire event loop.",
      "Use `pm2` for process management in production (auto-restart, monitoring).",
      "Always use environment variables for secrets (use `dotenv` or `cross-env`).",
      "Monitor your memory usage using `process.memoryUsage()`.",
      'Prefer `async/await` over raw callbacks to avoid "Callback Hell".',
    ],
  },
  sql: {
    title: "SQL & Database Design (Architecture & Optimization)",
    concepts: [
      "Normalization: 1NF, 2NF, 3NF, and BCNF (Reducing redundancy vs performance).",
      "ACID Properties: Atomicity, Consistency, Isolation, Durability.",
      "Indexes: B-Tree, Hash, GIST, and GIN (Speeding up lookups).",
      "Clustered vs Non-Clustered Indexes: Physical vs logical data storage.",
      "Transactions: Handling groups of queries safely with BEGIN/COMMIT/ROLLBACK.",
      "Isolation Levels: Read Uncommitted, Read Committed, Repeatable Read, Serializable.",
      "Joins: Inner, Left, Right, Full, Cross, and Self Joins.",
      "Window Functions: ROW_NUMBER, RANK, LEAD, LAG, NTILE.",
      "CTEs (Common Table Expressions): Using WITH for readable, recursive queries.",
      "Query Execution Plan: Using EXPLAIN ANALYZE to find slow spots.",
      "N+1 Problem: How ORMs can accidentally cause thousands of small queries.",
      "Database Sharding: Horizontal partitioning of data across multiple servers.",
      "Replication: Master-Slave vs Master-Master setups for high availability.",
      "Stored Procedures & Triggers: Running logic inside the database engine.",
      "Full-Text Search: Handling complex text queries (GIn indexes, tsvector).",
      "Constraints: Primary Key, Foreign Key, Unique, Check, Not Null.",
      "Deadlocks: When two transactions block each other indefinitely.",
      "Views & Materialized Views: Virtual tables vs cached query results.",
      'UPSERT: "Insert or Update" logic using ON CONFLICT.',
      "CAP Theorem: Consistency, Availability, Partition Tolerance (SQL vs NoSQL).",
    ],
    questions: [
      {
        q: "What is the difference between WHERE and HAVING?",
        a: "WHERE filters rows before grouping/aggregation. HAVING filters the results after GROUP BY has been applied.",
      },
      {
        q: 'Explain "Transaction Isolation Levels".',
        a: 'They define how much one transaction can see the changes made by others. "Read Committed" is the most common default, while "Serializable" is the strictest.',
      },
      {
        q: 'What is a "Composite Index"?',
        a: "An index on multiple columns. The order of columns matters (Left-to-right rule).",
      },
      {
        q: "How do you optimize a slow query?",
        a: "1. Use EXPLAIN. 2. Add indexes. 3. Avoid SELECT *. 4. Use Joins instead of subqueries. 5. Denormalize if necessary.",
      },
      {
        q: "Difference between DELETE, TRUNCATE, and DROP?",
        a: "DELETE removes rows (can be rolled back). TRUNCATE removes all rows (faster, resets identity). DROP removes the entire table structure.",
      },
      {
        q: 'What is a "Foreign Key"?',
        a: "A column that links to a Primary Key in another table, ensuring referential integrity.",
      },
      {
        q: 'What is the "N+1 Problem"?',
        a: "When you fetch a list of items and then perform an individual query for each item to fetch its relations. Fixed using Eager Loading (JOINs).",
      },
      {
        q: "Explain ACID.",
        a: "Atomicity (All or nothing), Consistency (Valid state), Isolation (No interference), Durability (Persistent after crash).",
      },
      {
        q: 'What is a "Stored Procedure"?',
        a: "A prepared SQL code that you can save and reuse, allowing logic to run on the DB side instead of the App side.",
      },
      {
        q: 'What is "Database Denormalization"?',
        a: "Adding redundant data purposefully to speed up complex read queries at the cost of write performance.",
      },
    ],
    codeSnippets: [
      {
        title: "Advanced Window Function (Ranking)",
        code: `SELECT 
  employee_name, 
  salary, 
  department,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) as rank
FROM employees
WHERE hire_date > '2023-01-01';`,
      },
      {
        title: "Recursive CTE (Hierarchy)",
        code: `WITH RECURSIVE subordinates AS (
  SELECT id, name, manager_id FROM employees WHERE id = 1
  UNION
  SELECT e.id, e.name, e.manager_id 
  FROM employees e
  INNER JOIN subordinates s ON s.id = e.manager_id
)
SELECT * FROM subordinates;`,
      },
      {
        title: "UPSERT Pattern",
        code: `INSERT INTO users (email, last_login)
VALUES ('test@test.com', NOW())
ON CONFLICT (email) 
DO UPDATE SET last_login = EXCLUDED.last_login;`,
      },
    ],
    tips: [
      "Always index foreign keys; databases don’t usually do this automatically.",
      "Use UUIDs instead of auto-incrementing integers for public IDs (security).",
      "Be careful with `OFFSET` for pagination; it gets slower as the page number increases. Use cursor-based pagination.",
      "Regularly run `VACUUM` and `ANALYZE` (Postgres) to maintain health.",
      "Use `JSONB` for semi-structured data if you need the speed of SQL and flexibility of NoSQL.",
    ],
  },
  python: {
    title: "Python (Data Science, Backend & Scripting)",
    concepts: [
      "GIL (Global Interpreter Lock): Why standard Python is single-threaded.",
      "List Comprehensions: Expressive syntax for creating lists.",
      "Generators & Yield: Creating memory-efficient iterators.",
      "Decorators: Modifying function behavior with the @ syntax.",
      "Context Managers: Using the `with` statement for resource management.",
      "Metaclasses: Classes that create classes (advanced OOP).",
      "MRO (Method Resolution Order): How Python handles multiple inheritance.",
      'Duck Typing: "If it walks like a duck and quacks like a duck, it is a duck".',
      "Virtual Environments: Managing dependencies via venv, poetry, or conda.",
      "Asyncio: Asynchronous I/O for high-performance networking.",
      "Type Hinting: Using `typing` module for better IDE support and safety.",
      "PIP & PyPI: The ecosystem for Python packages.",
      "Dynamic Typing: Variables not having a fixed type.",
      "Magic Methods: `__init__`, `__str__`, `__call__`, etc.",
      "Functional Programming: map, filter, reduce, lambda.",
      "Scoping (LEGB): Local, Enclosing, Global, Built-in.",
      "Multiprocessing: Bypassing the GIL by using separate memory spaces.",
      "Profiling: Finding slow code using `cProfile` or `line_profiler`.",
      "Testing: Unittest vs Pytest (fixtures, parameterization).",
      "WSGI vs ASGI: Interfaces for web servers (Django vs FastAPI).",
    ],
    questions: [
      {
        q: "What is the Global Interpreter Lock (GIL)?",
        a: "A mutex that allows only one thread to hold control of the Python interpreter, preventing true parallel execution of bytecode in multi-threaded programs.",
      },
      {
        q: "Difference between a List and a Tuple?",
        a: "Lists are mutable (can change), tuples are immutable (cannot change). Tuples are generally faster and can be used as dictionary keys.",
      },
      {
        q: 'What is a "Decorator"?',
        a: "A function that takes another function and extends its behavior without explicitly modifying it.",
      },
      {
        q: 'How does "Memory Management" work in Python?',
        a: "Via reference counting and a cyclic garbage collector.",
      },
      {
        q: 'Difference between "is" and "=="?',
        a: '"is" checks for identity (same object in memory), "==" checks for equality (same value).',
      },
      {
        q: 'What are "Generators"?',
        a: "Functions that return an iterator using the `yield` keyword, producing values one at a time to save memory.",
      },
      {
        q: 'Explain "Context Managers".',
        a: "Objects that define `__enter__` and `__exit__`, usually used with `with` to ensure resources (like files) are closed properly.",
      },
      {
        q: 'What is "Monkey Patching"?',
        a: "Dynamic modification of a class or module at runtime.",
      },
      {
        q: 'What is a "Lambda" function?',
        a: "A small anonymous function defined with the `lambda` keyword, limited to a single expression.",
      },
      {
        q: "How do you manage dependencies in a Python project?",
        a: "Using a `requirements.txt` file, `Pipfile`, or `pyproject.toml`.",
      },
    ],
    codeSnippets: [
      {
        title: "Decorator for Timing Functions",
        code: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time() - start}s")
        return result
    return wrapper

@timer
def heavy_task():
    time.sleep(2)`,
      },
      {
        title: "Asyncio Simple Server",
        code: `import asyncio

async def handle_client(reader, writer):
    data = await reader.read(100)
    writer.write(data)
    await writer.drain()
    writer.close()

async def main():
    server = await asyncio.start_server(handle_client, '127.0.0.1', 8888)
    async with server:
        await server.serve_forever()

asyncio.run(main())`,
      },
    ],
    tips: [
      "Follow PEP 8 guidelines for code style.",
      "Use `isinstance()` instead of `type()` for checking types.",
      "Leverage `f-strings` for readable string formatting (Python 3.6+).",
      "Avoid using mutable default arguments like `def append_to(element, to=[])`.",
      "Use `enumerate()` instead of `range(len(list))` for cleaner loops.",
    ],
  },
  system_design: {
    title: "System Design & Scalability (Architecture)",
    concepts: [
      "Load Balancing: Round Robin, Least Connections, IP Hash.",
      "Caching Strategies: Cache Aside, Write Through, Write Behind, Eviction (LRU).",
      "Scalability: Vertical (bigger machine) vs Horizontal (more machines).",
      "Microservices: Decentralized data, independent deployment, API gateways.",
      "Database Sharding: Partitioning data by key, range, or hash.",
      "Message Queues: Decoupling services using RabbitMQ, Kafka, or SQS.",
      "Content Delivery Networks (CDN): Geographically distributed edge servers.",
      "API Gateway: Handling authentication, rate limiting, and routing.",
      "Rate Limiting: Token Bucket, Leaky Bucket, Fixed Window algorithms.",
      "Consistency Models: Strong, Eventual, Causal consistency.",
      "CAP Theorem: Consistency vs Availability in partition-tolerant systems.",
      "DNS: How Domain Name System resolution works.",
      "Reverse Proxy: Protecting backend servers with Nginx/HAProxy.",
      "Database Replication: Synchronous vs Asynchronous replication.",
      "Heartbeats: Detecting service failures in a cluster.",
      "Service Discovery: How services find each other (Consul, Etcd, Zookeeper).",
      "Websockets vs Long Polling: Real-time communication strategies.",
      "Idempotency: Ensuring an operation can be performed multiple times safely.",
      "Circuit Breakers: Preventing a single service failure from cascading.",
      "Bulkheads: Isolating resources to prevent total system failure.",
    ],
    questions: [
      {
        q: "How would you design a URL Shortener like Bitly?",
        a: "Need a hash function (Base62), a database (NoSQL or SQL), a cache for popular links, and a redirection service.",
      },
      {
        q: "What is the difference between Scalability and Availability?",
        a: "Scalability is the ability to handle more load. Availability is the percentage of time the system remains operational.",
      },
      {
        q: 'How do you handle "Hot Keys" in a cache?',
        a: "By using consistent hashing or splitting the key across multiple cache nodes.",
      },
      {
        q: 'What is a "Monolith" vs "Microservices"?',
        a: "Monolith is a single unit; easy to start but hard to scale. Microservices are independent units; hard to build but easy to scale.",
      },
      {
        q: 'Explain "Eventual Consistency".',
        a: "A model where data will be consistent across all nodes eventually, but not necessarily immediately after an update.",
      },
    ],
    codeSnippets: [
      {
        title: "Rate Limiter (Token Bucket Concept)",
        code: `class RateLimiter:
    def __init__(self, capacity, fill_rate):
        self.capacity = capacity
        self.tokens = capacity
        self.fill_rate = fill_rate
        self.last_fill = time.time()

    def allow(self):
        now = time.time()
        self.tokens += (now - self.last_fill) * self.fill_rate
        self.tokens = min(self.tokens, self.capacity)
        self.last_fill = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False`,
      },
    ],
    tips: [
      "Keep things simple first; don’t over-engineer with microservices for a small app.",
      'Always consider "Single Point of Failure" (SPOF) when designing components.',
      "Measure everything: monitoring and logging are as important as the code.",
      "Use stateless application servers so you can scale horizontally easily.",
      "Understand your data: Is it read-heavy or write-heavy?",
    ],
  },
  // Additional sections for CSS, PHP, HTML can follow this high-density pattern.
  htmlcss: {
    title: "Modern HTML5, CSS4 & Web UI Architecture",
    concepts: [
      "Semantic HTML: Beyond <div>; using <main>, <section>, <article>, and <aside> for SEO and accessibility.",
      "Accessibility (A11y): WCAG 2.2 guidelines, ARIA roles, landmarks, and focus management.",
      "CSS Cascade Layers (@layer): Controlling specificity and order of importance without !important.",
      "Container Queries (@container): Styling elements based on their parent size rather than the viewport.",
      "Subgrid: Inheriting grid tracks from parent grids for perfect alignment across components.",
      "CSS Variables (Custom Properties): Dynamic scoping, runtime updates, and theming architectures.",
      "The Box Model: Content-box vs Border-box and the impact of padding/borders on layout.",
      "Logical Properties: writing-mode independent margins/paddings (margin-inline-start vs margin-left).",
      "Layout Engines: Deep dive into Flexbox (1D) vs CSS Grid (2D) use cases.",
      "Rendering Pipeline: How browsers process HTML/CSS (Parse -> Style -> Layout -> Paint -> Composite).",
      "Web Components: Custom Elements, Shadow DOM, and HTML Templates.",
      "Shadow DOM: Encapsulation of styles and markup to prevent leakage.",
      'Critical CSS: Inline styles required for the "Above the Fold" content to improve LCP.',
      "CSS-in-JS vs CSS Modules: Scoping styles in modern component-based frameworks.",
      "Responsive Images: srcset, sizes, and the <picture> element for performance.",
      "View Transitions API: Creating seamless page transitions without complex JS libraries.",
      "Popover API: Native browser support for tooltips and menus without z-index hell.",
      "Scroll-driven Animations: High-performance animations linked to scroll position via CSS.",
      "Specificity Calculation: The (ID, Class, Element) weight system.",
      "Modern Pseudo-classes: :has(), :is(), :where(), and their impact on selector logic.",
    ],
    questions: [
      {
        q: 'What is the "z-index" stacking context?',
        a: "A three-dimensional conceptualization of HTML elements along an imaginary z-axis. A new context is formed by opacity < 1, transform, filter, or specific z-index/position combos.",
      },
      {
        q: "Explain the difference between :is(), :where(), and :has().",
        a: ':is() and :where() group selectors, but :where() has 0 specificity. :has() is the "parent selector" that styles an element based on its children.',
      },
      {
        q: "How do Container Queries differ from Media Queries?",
        a: "Media queries respond to the browser viewport size; Container queries respond to the width/height of a specific parent container, enabling truly modular components.",
      },
      {
        q: "What are the core principles of Web Accessibility (POUR)?",
        a: "Perceivable (information must be presentable), Operable (UI components must be usable), Understandable (content must be clear), and Robust (content must be interpretable by various agents).",
      },
      {
        q: 'What is the purpose of the "alt" attribute on images?',
        a: 'It provides a text description for screen readers and acts as fallback text if the image fails to load. Decorative images should have an empty alt="".',
      },
      {
        q: 'Explain the "Layout Instability" and CLS.',
        a: "Cumulative Layout Shift (CLS) measures how much the page content moves during loading. Prevent it by setting width/height on images and reserved slots for ads.",
      },
      {
        q: 'How does CSS Grid "subgrid" work?',
        a: "It allows a child element to use the grid rows/columns defined on its parent, ensuring nested elements align with the main layout grid.",
      },
      {
        q: 'What is "Tree Shaking" in the context of CSS?',
        a: "The process of removing unused CSS rules from the final production bundle, often achieved via tools like PurgeCSS.",
      },
      {
        q: "Difference between rem, em, vh, and lvh?",
        a: "rem is relative to the root (html) font size. em is relative to the parent. vh is % of viewport height. lvh (Large Viewport Height) accounts for mobile dynamic toolbars.",
      },
      {
        q: 'What is the "Content Visibility" property?',
        a: "`content-visibility: auto` allows the browser to skip rendering off-screen elements, drastically improving initial page load performance.",
      },
    ],
    codeSnippets: [
      {
        title: "Container Queries & Logical Properties",
        code: `.card-container {
  container-type: inline-size;
  container-name: sidebar;
}

@container sidebar (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding-inline: 2rem; /* Logical padding */
  }
}`,
      },
      {
        title: "Complex Grid Layout with Subgrid",
        code: `.parent-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.child-component {
  grid-column: span 3;
  display: grid;
  grid-template-columns: subgrid; /* Aligns to parent grid */
}`,
      },
    ],
    tips: [
      "Avoid using `!important`; use CSS Layers (`@layer`) to manage priority.",
      "Always test your UI with a screen reader (VoiceOver/NVDA).",
      "Use `aspect-ratio` to reserve space for images and prevent layout shifts.",
      "Prefer `gap` over `margin` for spacing elements in Flex/Grid.",
      "Keep your CSS selectors flat; deep nesting increases specificity and makes overrides hard.",
    ],
  },
  php: {
    title: "Modern PHP 8.4+ & Enterprise Architecture",
    concepts: [
      "JIT (Just-In-Time) Compilation: How PHP 8+ translates OpCode into machine code for performance.",
      "Attributes: Structured metadata for classes and methods (replacing DocBlocks).",
      "Constructor Property Promotion: Shorthand syntax for declaring and initializing properties.",
      "Match Expression: The strict, expression-based alternative to the switch statement.",
      "Readonly Classes: Ensuring all properties of a class are immutable after initialization.",
      "Fibers: Low-level concurrency mechanism for asynchronous PHP.",
      "Enums: Native support for enumerated types with backing values and methods.",
      "Type System: Union types, Intersection types, and the DNF (Disjunctive Normal Form) types.",
      "Composer: Autoloading (PSR-4), dependency resolution, and script execution.",
      "PSR Standards: PSR-1 (Coding), PSR-4 (Autoloading), PSR-7 (HTTP), PSR-12 (Style).",
      "Dependency Injection Containers: Managing object lifecycles and decoupling code.",
      "Traits: Horizontal code reuse mechanism and conflict resolution.",
      "PDO & Prepared Statements: Preventing SQL injection at the driver level.",
      "OpCache: Caching precompiled script bytecode in shared memory.",
      "Error Handling: Throwable interface, custom exceptions, and final blocks.",
      "Strict Typing: Using declare(strict_types=1) to prevent implicit coercion.",
      "Anonymous Classes: Simple, one-off objects for testing or strategy patterns.",
      "Property Hooks (PHP 8.4): Custom logic for property get/set without methods.",
      "Generics (via Static Analysis): Using PHPStan/Psalm to simulate generic types.",
      "Serverless PHP: Running PHP on AWS Lambda via Bref or similar layers.",
    ],
    questions: [
      {
        q: "What is the difference between a Trait and an Interface?",
        a: "An Interface defines a contract that a class MUST implement. A Trait provides actual implementation code that a class can reuse (horizontal inheritance).",
      },
      {
        q: "How does PHP manage memory?",
        a: "PHP uses reference counting and a cyclic garbage collector. When a variable’s reference count reaches zero, its memory is reclaimed.",
      },
      {
        q: 'Explain "Dependency Injection" and why it is useful.',
        a: "It is a technique where an object receives its dependencies from the outside rather than creating them itself. It makes code easier to test and decouple.",
      },
      {
        q: 'What is the "Match" expression vs "Switch"?',
        a: 'Match is an expression (returns a value), uses strict comparison (===), and does not require "break" statements.',
      },
      {
        q: 'What are "Attributes" in PHP 8?',
        a: "They provide a way to add structured, machine-readable metadata to declarations in code, replacing the need for parsing string-based PHPDoc comments.",
      },
      {
        q: "What is PSR-4?",
        a: 'A standard for mapping namespaces to file paths, which allows Composer to automatically load classes without manual "require" calls.',
      },
      {
        q: "Explain Readonly Properties.",
        a: "Properties that can only be initialized once (usually in the constructor) and cannot be modified thereafter, ensuring immutability.",
      },
      {
        q: "What is the difference between PDO and MySQLi?",
        a: "PDO is database-agnostic (works with PostgreSQL, SQLite, etc.) and supports named parameters. MySQLi is specific to MySQL.",
      },
      {
        q: "How do Fibers work in PHP?",
        a: 'They allow for "green threads" or coroutines. You can pause a function (suspend) and resume it later, enabling non-blocking I/O in a synchronous-looking style.',
      },
      {
        q: 'What are "Named Arguments"?',
        a: "A feature allowing you to pass values to a function based on the parameter name rather than the position, improving code readability.",
      },
    ],
    codeSnippets: [
      {
        title: "Modern PHP 8.4 Class with Hooks & Promotion",
        code: `class User {
    public function __construct(
        public readonly int $id,
        private string $rawName,
    ) {}

    // PHP 8.4 Property Hooks
    public string $name {
        get => ucfirst($this->rawName);
        set(string $value) => $this->rawName = trim($value);
    }
}`,
      },
      {
        title: "DNF Types (Disjunctive Normal Form)",
        code: `interface Editable {}
interface Loggable {}

// Requires object to be (Editable AND Loggable) OR null
function process((Editable&Loggable)|null $item) {
    // ...
}`,
      },
    ],
    tips: [
      "Always use `declare(strict_types=1);` at the top of your files.",
      "Leverage PHPStan or Psalm for static analysis to catch bugs before runtime.",
      "Use `password_hash()` and `password_verify()` for secure user authentication.",
      "Avoid global variables and the `global` keyword; use Dependency Injection.",
      "Follow PSR-12 coding standards to keep your codebase consistent with the community.",
    ],
  },
  security: {
    title: "Web Security & OWASP Top 10",
    concepts: [
      "XSS (Cross-Site Scripting): Injecting malicious scripts into trusted websites.",
      "CSRF (Cross-Site Request Forgery): Tricking a user into performing unwanted actions.",
      "SQL Injection: Manipulating database queries via unsanitized input.",
      "CORS (Cross-Origin Resource Sharing): Browser mechanism for restricting cross-origin requests.",
      "Content Security Policy (CSP): Whitelisting trusted sources of content to prevent XSS.",
      "JWT (JSON Web Tokens): Stateless authentication, claims, and signing (HS256 vs RS256).",
      "OAuth2 & OpenID Connect: Delegation protocols for authorization and identity.",
      "Rate Limiting: Preventing Brute Force and DoS attacks.",
      "HSTS (HTTP Strict Transport Security): Forcing browsers to use HTTPS only.",
      "Secure Cookies: HttpOnly, Secure, and SameSite flags.",
    ],
    questions: [
      {
        q: "How do you prevent XSS?",
        a: "Sanitize input, escape output for the specific context (HTML, JS, CSS), and implement a strong Content Security Policy (CSP).",
      },
      {
        q: "What is the difference between Authentication and Authorization?",
        a: "Authentication is verifying WHO you are. Authorization is verifying WHAT you are allowed to do.",
      },
      {
        q: 'Explain "Salting" a password.',
        a: "Adding a unique, random string to a password before hashing it to prevent Rainbow Table attacks.",
      },
    ],
    codeSnippets: [
      {
        title: "Secure CSP Header",
        code: `Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com; object-src 'none';`,
      },
    ],
    tips: [
      "Never store passwords in plain text; use Argon2 or BCrypt.",
      'Use "Least Privilege" principle for database users.',
      "Always keep your dependencies updated to patch known vulnerabilities.",
    ],
  },
  testing: {
    title: "Software Testing & Quality Assurance",
    concepts: [
      "Unit Testing: Testing individual functions or classes in isolation.",
      "Integration Testing: Testing how different modules work together.",
      "E2E (End-to-End) Testing: Simulating real user flows in a browser (Playwright/Cypress).",
      "TDD (Test Driven Development): Red-Green-Refactor cycle.",
      "Mocks vs Stubs: Fake objects used to isolate the system under test.",
      "Code Coverage: Measuring how much of the codebase is executed during tests.",
      "Regression Testing: Ensuring new changes don’t break existing functionality.",
      "Snapshot Testing: Comparing UI components against a reference image/markup.",
    ],
    questions: [
      {
        q: 'What is the "Testing Pyramid"?',
        a: "A model suggesting more unit tests (fast/cheap) than integration tests, and fewer E2E tests (slow/expensive).",
      },
      {
        q: 'What is "Mocking"?',
        a: "Replacing a real dependency (like an API or Database) with a fake version to control its behavior during a test.",
      },
    ],
    codeSnippets: [
      {
        title: "Jest Unit Test with Mock",
        code: `test('calls API and returns data', async () => {
  const mockApi = jest.fn().mockResolvedValue({ id: 1 });
  const result = await userService.getUser(1, mockApi);
  expect(result.id).toBe(1);
  expect(mockApi).toHaveBeenCalledTimes(1);
});`,
      },
    ],
    tips: [
      "Write tests that are easy to read; they serve as documentation.",
      "Don’t aim for 100% coverage; aim for testing critical business logic.",
      "Run your tests automatically in a CI/CD pipeline.",
    ],
  },
  git: {
    title: "Git & DevOps Foundations",
    concepts: [
      "Git Workflow: Feature Branching, Gitflow, and Trunk-Based Development.",
      "Rebase vs Merge: Rewriting history vs preserving the commit timeline.",
      "Stashing: Temporarily saving uncommitted changes.",
      "Cherry-picking: Applying a specific commit from one branch to another.",
      "CI/CD: Continuous Integration and Continuous Deployment pipelines.",
      "Docker: Containerization of applications for environment consistency.",
      "Infrastructure as Code (IaC): Managing servers via code (Terraform/Ansible).",
      "Git Hooks: Scripts that run automatically on git events (pre-commit, pre-push).",
    ],
    questions: [
      {
        q: 'What is a "Merge Conflict"?',
        a: "Occurs when Git cannot automatically reconcile differences in code between two commits, requiring manual intervention.",
      },
      {
        q: 'What is the difference between "git fetch" and "git pull"?',
        a: "Fetch downloads changes from remote but doesn’t merge them. Pull is fetch + merge.",
      },
    ],
    codeSnippets: [
      {
        title: "Useful Git Aliases",
        code: `git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit`,
      },
    ],
    tips: [
      "Commit early and often with meaningful messages.",
      "Never force push to a shared main branch.",
      "Use `.gitignore` to keep secrets and build artifacts out of your repo.",
    ],
  },
};

export const getTechnologies = () => Object.keys(pdfContent);
