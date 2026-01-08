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
    title: 'React Interview Preparation',
    concepts: [
      'Virtual DOM: A lightweight representation of the real DOM that React uses to optimize updates.',
      'JSX: A syntax extension that allows writing HTML-like code in JavaScript.',
      'Components: Reusable, self-contained pieces of UI that can have their own state and lifecycle.',
      'Props: Read-only data passed from parent to child components.',
      'State: Mutable data that belongs to a component and triggers re-renders when updated.',
      'Hooks: Functions that let you use state and other React features in functional components.',
      'Context API: A way to share data across components without prop drilling.',
      'Reconciliation: The process React uses to update the DOM efficiently.',
    ],
    questions: [
      { q: 'What is the Virtual DOM?', a: 'A lightweight JavaScript representation of the actual DOM. React uses it to minimize expensive DOM operations by calculating the minimal set of changes needed.' },
      { q: 'Explain useState and useEffect hooks.', a: 'useState manages local state in functional components. useEffect handles side effects like data fetching, subscriptions, or DOM mutations.' },
      { q: 'What is the difference between controlled and uncontrolled components?', a: 'Controlled components have their state managed by React, while uncontrolled components store their state in the DOM.' },
      { q: 'How does React handle keys in lists?', a: 'Keys help React identify which items have changed, been added, or removed. They should be unique among siblings.' },
      { q: 'What is prop drilling and how to avoid it?', a: 'Prop drilling is passing props through many component levels. Use Context API, Redux, or state management libraries to avoid it.' },
    ],
    codeSnippets: [
      {
        title: 'Custom Hook Example',
        code: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}`,
      },
      {
        title: 'useEffect Cleanup',
        code: `useEffect(() => {
  const subscription = api.subscribe(data);
  
  return () => {
    subscription.unsubscribe();
  };
}, [dependency]);`,
      },
    ],
    tips: [
      'Always use keys when rendering lists to help React identify changes.',
      'Keep components small and focused on a single responsibility.',
      'Use useMemo and useCallback to optimize performance.',
      'Lift state up to the nearest common ancestor when needed.',
      'Use React DevTools to debug and profile your applications.',
    ],
  },
  javascript: {
    title: 'JavaScript Interview Preparation',
    concepts: [
      'Closures: Functions that remember their outer scope even after the outer function returns.',
      'Hoisting: JavaScript\'s behavior of moving declarations to the top of the scope.',
      'Event Loop: The mechanism that handles async callbacks in JavaScript.',
      'Prototypes: Objects from which other objects inherit properties.',
      'Promises: Objects representing the eventual completion of async operations.',
      'async/await: Syntactic sugar for working with Promises.',
      'Scope: The context in which variables are accessible.',
      'this keyword: Refers to the object that is executing the current function.',
    ],
    questions: [
      { q: 'What is a closure?', a: 'A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned.' },
      { q: 'Explain the event loop.', a: 'The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading operations to the system kernel when possible.' },
      { q: 'What is the difference between == and ===?', a: '== compares values with type coercion, === compares both value and type strictly.' },
      { q: 'What is hoisting?', a: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of the current scope during compilation.' },
      { q: 'Explain Promise.all vs Promise.race.', a: 'Promise.all waits for all promises to resolve, Promise.race resolves as soon as the first promise resolves or rejects.' },
    ],
    codeSnippets: [
      {
        title: 'Closure Example',
        code: `function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}`,
      },
      {
        title: 'Debounce Function',
        code: `function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}`,
      },
    ],
    tips: [
      'Understand the difference between var, let, and const.',
      'Know how "this" behaves in different contexts.',
      'Be comfortable with array methods: map, filter, reduce.',
      'Understand async programming patterns.',
      'Know the difference between shallow and deep copy.',
    ],
  },
  typescript: {
    title: 'TypeScript Interview Preparation',
    concepts: [
      'Type Annotations: Explicit type declarations for variables and functions.',
      'Interfaces: Contracts that define the structure of objects.',
      'Generics: Reusable components that work with multiple types.',
      'Union Types: Types that can be one of several types.',
      'Type Guards: Runtime checks that narrow types in conditionals.',
      'Utility Types: Built-in types for common transformations.',
      'Enums: Named constants for better code readability.',
      'Declaration Merging: Combining multiple declarations with the same name.',
    ],
    questions: [
      { q: 'What is the difference between interface and type?', a: 'Interfaces are extendable and support declaration merging. Types support unions and intersections and are more flexible for complex types.' },
      { q: 'What are generics?', a: 'Generics allow creating reusable components that can work with multiple types rather than a single one.' },
      { q: 'What is the unknown type?', a: 'unknown is a type-safe alternative to any. You must perform type checking before using a value of type unknown.' },
      { q: 'Explain conditional types.', a: 'Conditional types select one of two types based on a condition using the extends keyword: T extends U ? X : Y' },
      { q: 'What is the keyof operator?', a: 'keyof creates a union type of all property names (keys) of a given type.' },
    ],
    codeSnippets: [
      {
        title: 'Generic Function',
        code: `function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "John", age: 30 };
const name = getProperty(person, "name"); // string`,
      },
      {
        title: 'Utility Types',
        code: `interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
type UserPreview = Pick<User, 'id' | 'name'>;
type UserWithoutEmail = Omit<User, 'email'>;`,
      },
    ],
    tips: [
      'Use strict mode for better type safety.',
      'Prefer interfaces for object types, types for unions.',
      'Use utility types to avoid repetition.',
      'Leverage type inference when possible.',
      'Use discriminated unions for type narrowing.',
    ],
  },
  nodejs: {
    title: 'Node.js Interview Preparation',
    concepts: [
      'Event Loop: The mechanism that handles async operations in Node.js.',
      'Non-blocking I/O: Async operations that don\'t block the main thread.',
      'Modules: Code organization using require/import.',
      'Streams: Handling data in chunks for efficiency.',
      'Cluster Module: Creating child processes for better performance.',
      'Buffer: Handling binary data in Node.js.',
      'Event Emitters: Pattern for handling async events.',
      'Middleware: Functions that process requests in web frameworks.',
    ],
    questions: [
      { q: 'What is the Event Loop?', a: 'The event loop allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded.' },
      { q: 'Explain streams in Node.js.', a: 'Streams are objects that let you read or write data in chunks, useful for handling large amounts of data efficiently.' },
      { q: 'What is the difference between process.nextTick() and setImmediate()?', a: 'process.nextTick() runs before any I/O events, setImmediate() runs after I/O events in the event loop.' },
      { q: 'How does Node.js handle concurrency?', a: 'Node.js uses a single-threaded event loop with non-blocking I/O. For CPU-intensive tasks, use Worker Threads or Cluster module.' },
      { q: 'What is middleware in Express?', a: 'Middleware functions have access to request, response, and next function. They can execute code, modify request/response, and end the cycle.' },
    ],
    codeSnippets: [
      {
        title: 'Event Emitter Pattern',
        code: `const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (data) => {
  console.log('Event received:', data);
});

myEmitter.emit('event', { message: 'Hello!' });`,
      },
      {
        title: 'Stream Pipeline',
        code: `const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('output.gz'),
  (err) => {
    if (err) console.error('Pipeline failed', err);
    else console.log('Pipeline succeeded');
  }
);`,
      },
    ],
    tips: [
      'Understand the event loop phases.',
      'Use async/await for cleaner async code.',
      'Handle errors properly in async operations.',
      'Use streams for large data processing.',
      'Consider using PM2 for production deployments.',
    ],
  },
  sql: {
    title: 'SQL Interview Preparation',
    concepts: [
      'JOINS: Combining rows from multiple tables based on related columns.',
      'Indexes: Data structures that improve query performance.',
      'Normalization: Organizing data to reduce redundancy.',
      'Transactions: Groups of operations executed as a single unit.',
      'ACID Properties: Atomicity, Consistency, Isolation, Durability.',
      'Subqueries: Queries nested inside other queries.',
      'Views: Virtual tables based on query results.',
      'Stored Procedures: Precompiled SQL statements.',
    ],
    questions: [
      { q: 'What is the difference between INNER JOIN and LEFT JOIN?', a: 'INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right.' },
      { q: 'Explain database normalization.', a: 'Normalization organizes data to reduce redundancy and improve data integrity through normal forms (1NF, 2NF, 3NF, etc.).' },
      { q: 'What are ACID properties?', a: 'Atomicity (all or nothing), Consistency (valid state), Isolation (concurrent transactions don\'t interfere), Durability (committed changes persist).' },
      { q: 'What is the difference between WHERE and HAVING?', a: 'WHERE filters individual rows before grouping, HAVING filters groups after GROUP BY.' },
      { q: 'What is an index and when to use it?', a: 'An index speeds up data retrieval. Use on frequently queried columns, but avoid over-indexing as it slows writes.' },
    ],
    codeSnippets: [
      {
        title: 'Common JOIN Example',
        code: `SELECT 
  u.name,
  COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY order_count DESC;`,
      },
      {
        title: 'Window Function',
        code: `SELECT 
  name,
  salary,
  department,
  RANK() OVER (
    PARTITION BY department 
    ORDER BY salary DESC
  ) as salary_rank
FROM employees;`,
      },
    ],
    tips: [
      'Know the difference between different JOIN types.',
      'Understand when to use indexes.',
      'Be comfortable with aggregate functions.',
      'Know how to optimize slow queries.',
      'Understand transaction isolation levels.',
    ],
  },
  htmlcss: {
    title: 'HTML & CSS Interview Preparation',
    concepts: [
      'Box Model: Content, padding, border, and margin layout.',
      'Flexbox: One-dimensional layout system.',
      'CSS Grid: Two-dimensional layout system.',
      'Semantic HTML: Using meaningful elements for structure.',
      'Specificity: Algorithm determining which CSS rules apply.',
      'Responsive Design: Adapting layouts to different screen sizes.',
      'CSS Variables: Custom properties for reusable values.',
      'BEM: Block Element Modifier naming convention.',
    ],
    questions: [
      { q: 'Explain the CSS Box Model.', a: 'The box model consists of content, padding (space around content), border, and margin (space outside border).' },
      { q: 'What is the difference between Flexbox and Grid?', a: 'Flexbox is for one-dimensional layouts (row or column), Grid is for two-dimensional layouts (rows and columns).' },
      { q: 'What is CSS specificity?', a: 'Specificity determines which CSS rule applies: inline styles > IDs > classes > elements. Higher specificity wins.' },
      { q: 'What are semantic HTML elements?', a: 'Elements that describe their meaning: <header>, <nav>, <main>, <article>, <section>, <footer>. They improve accessibility and SEO.' },
      { q: 'How do you make a website responsive?', a: 'Use viewport meta tag, relative units, media queries, flexible layouts (Flexbox/Grid), and responsive images.' },
    ],
    codeSnippets: [
      {
        title: 'Flexbox Centering',
        code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
      },
      {
        title: 'CSS Grid Layout',
        code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}`,
      },
    ],
    tips: [
      'Use semantic HTML for better accessibility.',
      'Master Flexbox and Grid layouts.',
      'Use CSS variables for maintainable styles.',
      'Understand the cascade and specificity.',
      'Always consider mobile-first design.',
    ],
  },
  php: {
    title: 'PHP Interview Preparation',
    concepts: [
      'Variables: Start with $, dynamically typed.',
      'OOP: Classes, objects, inheritance, interfaces.',
      'Superglobals: $_GET, $_POST, $_SESSION, etc.',
      'PDO: Database access layer.',
      'Composer: Dependency manager.',
      'Namespaces: Organize code and avoid name collisions.',
      'Traits: Code reuse mechanism.',
      'Sessions: Storing user data across requests.',
    ],
    questions: [
      { q: 'What is the difference between include and require?', a: 'require throws a fatal error if the file is not found, include only produces a warning and continues execution.' },
      { q: 'Explain the difference between == and ===.', a: '== compares values with type juggling, === compares both value and type strictly.' },
      { q: 'What is PDO?', a: 'PHP Data Objects is a database access layer providing a uniform method for accessing different databases securely.' },
      { q: 'What are traits in PHP?', a: 'Traits are a mechanism for code reuse in single inheritance languages, allowing you to include methods in multiple classes.' },
      { q: 'How do sessions work in PHP?', a: 'Sessions store data on the server with a unique ID stored in a cookie. Use session_start() to begin a session.' },
    ],
    codeSnippets: [
      {
        title: 'PDO Prepared Statement',
        code: `$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);`,
      },
      {
        title: 'Trait Example',
        code: `trait Loggable {
    public function log($message) {
        echo date('Y-m-d H:i:s') . ": " . $message;
    }
}

class User {
    use Loggable;
}`,
      },
    ],
    tips: [
      'Always use prepared statements to prevent SQL injection.',
      'Use type declarations in PHP 7+.',
      'Leverage Composer for dependency management.',
      'Understand the differences between PHP versions.',
      'Use namespaces to organize your code.',
    ],
  },
  python: {
    title: 'Python Interview Preparation',
    concepts: [
      'Dynamic Typing: Variables don\'t have fixed types.',
      'Indentation: Defines code blocks.',
      'List Comprehensions: Concise way to create lists.',
      'Decorators: Functions that modify other functions.',
      'Generators: Functions that yield values lazily.',
      'Context Managers: Resource management with "with".',
      'GIL: Global Interpreter Lock affecting threading.',
      'Virtual Environments: Isolated package installations.',
    ],
    questions: [
      { q: 'What is the difference between list and tuple?', a: 'Lists are mutable (can be modified), tuples are immutable (cannot be modified after creation).' },
      { q: 'What are decorators?', a: 'Decorators are functions that modify other functions, wrapped using @decorator syntax above the function.' },
      { q: 'Explain the GIL.', a: 'The Global Interpreter Lock prevents multiple threads from executing Python bytecode simultaneously in CPython.' },
      { q: 'What is the difference between is and ==?', a: '"is" checks identity (same object in memory), "==" checks equality (same value).' },
      { q: 'What are generators?', a: 'Generators use yield to produce values lazily one at a time, saving memory compared to creating full lists.' },
    ],
    codeSnippets: [
      {
        title: 'Decorator Example',
        code: `def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Took {time.time() - start:.2f}s")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)`,
      },
      {
        title: 'Generator Example',
        code: `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

for num in fibonacci(10):
    print(num)`,
      },
    ],
    tips: [
      'Use list comprehensions for cleaner code.',
      'Understand the difference between shallow and deep copy.',
      'Know when to use generators for memory efficiency.',
      'Be comfortable with context managers.',
      'Understand async programming with asyncio.',
    ],
  },
};

export const getTechnologies = () => Object.keys(pdfContent);
