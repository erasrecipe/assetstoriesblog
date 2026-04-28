import { PromptPost } from './types';

export const chatgptPromptsForCoding: PromptPost = {
  slug: 'chatgpt-prompts-for-coding',
  title: 'ChatGPT Prompts for Coding: 50+ Best Developer Prompts (2026)',
  keyword: 'chatgpt prompts for coding',
  description: 'Accelerate your development workflow with 50+ elite ChatGPT prompts for coding. From debugging complex microservices to architecting scalable systems and writing unit tests. Copy and use instantly.',
  date: '2026-04-28',
  category: 'ChatGPT',
  content: `
    <p>Welcome to the 2026 definitive guide on <strong>ChatGPT prompts for coding</strong>. Software engineering has undergone a tectonic shift. We are no longer just "syntax writers"—we have evolved into "system architects" and "AI orchestrators." The key to 10x productivity in this new era lies in how you communicate with your AI coding partner.</p>
    
    <p>This collection features over 50 battle-tested prompts designed for full-stack developers, data scientists, and DevOps engineers. These prompts are optimized for the latest iteration of GPT-4o, Claude 3.5 Sonnet, and GitHub Copilot Extensions.</p>

    <ul>
      <li><strong>25+ Quick Copy Prompts</strong> for debugging, refactoring, and boilerplate generation.</li>
      <li><strong>20+ Advanced Coding Workflows</strong> for system design, security audits, and legacy code migration.</li>
      <li><strong>Expert Tips</strong> on managing "Context Windows" and preventing AI-generated technical debt.</li>
      <li><strong>FAQ Section</strong> addressing code privacy, licensing, and the future of the junior developer role.</li>
    </ul>

    <h2>The Rise of the "AI-Native" Developer</h2>
    <p>In 2026, the most successful developers aren't those who have memorized every API—they are the ones who know how to use <strong>ChatGPT prompts for coding</strong> to solve problems from first principles. AI has democratized complex domains like distributed systems and machine learning, but it has also increased the importance of "Code Review" as a primary skill.</p>
    
    <p>The prompts in this guide move beyond "write a function that..." and into the realm of "architect a solution that...". We focus on the *logic* and *structure* of software, rather than just the implementation details.</p>

    <h2>The Advanced Prompt Framework: S.C.O.P.E.</h2>
    <p>To get production-ready code from an LLM, use the <strong>S.C.O.P.E.</strong> method:</p>
    <ul>
      <li><strong>S - Stack:</strong> Define the language, framework, and library versions (e.g., "React 19, TypeScript 5.4, Tailwind CSS").</li>
      <li><strong>C - Constraints:</strong> Mention performance, security, or style requirements (e.g., "O(n) time complexity, no external dependencies").</li>
      <li><strong>O - Objective:</strong> Describe exactly what the code should do.</li>
      <li><strong>P - Pattern:</strong> Suggest a design pattern (e.g., "Use the Factory Pattern").</li>
      <li><strong>E - Examples:</strong> Provide a sample input and expected output.</li>
    </ul>

    <h2>Debugging and Refactoring: The AI Surgeon</h2>
    <p>One of the highest-value applications of <strong>ChatGPT prompts for coding</strong> is in the "cleanup" phase. AI is exceptionally good at spotting logic flaws that humans miss during long sessions. Use it to refactor "spaghetti code" into clean, modular functions, or to find that elusive race condition in your asynchronous logic. We provide prompts for specific debugging strategies like "Rubber Ducking" and "Binary Search Debugging."</p>

    <h2>Architecture and System Design: Thinking Big</h2>
    <p>Don't just use AI for snippets. Use it to design systems. In 2026, you can feed an LLM your business requirements and ask for a High-Level Design (HLD) document, including database schema suggestions, API endpoints, and infrastructure-as-code (Terraform) snippets. This allows you to prototype complex architectures in hours instead of days.</p>

    <h2>Testing and Documentation: The "Unsung Heroes"</h2>
    <p>Every developer hates writing tests and documentation, but in 2026, AI makes this effortless. Our prompts show you how to generate 100% test coverage using Vitest or Jest, and how to create interactive API documentation that stays in sync with your codebase. By automating these tasks, you ensure long-term maintainability without the manual slog.</p>

    <h2>The Ethics of AI Code: Privacy and Ownership</h2>
    <p>As we rely more on AI, we must be vigilant about code privacy. Never paste sensitive API keys or proprietary business logic into public LLMs. In 2026, most enterprises use private, local LLM instances (like Llama 3 on-prem). These prompts are compatible with both public and private models, ensuring you stay productive while maintaining security compliance.</p>
  `,
  shortPrompts: [
    { id: 'code-s-1', prompt: 'Refactor this function to be more concise and readable: [paste code]', description: 'Refactor for Readability' },
    { id: 'code-s-2', prompt: 'Find the bug in this asynchronous JavaScript code: [paste code]', description: 'Debug Async Logic' },
    { id: 'code-s-3', prompt: 'Write a TypeScript interface for the following JSON object: [paste JSON]', description: 'JSON to TypeScript Interface' },
    { id: 'code-s-4', prompt: 'Generate a unit test for this function using [Testing Framework]: [paste code]', description: 'Generate Unit Test' },
    { id: 'code-s-5', prompt: 'Explain what this complex regex does in plain English: [regex]', description: 'Explain Regex' },
    { id: 'code-s-6', prompt: 'Convert this Python script to Go, ensuring idiomatic performance: [paste script]', description: 'Language Conversion' },
    { id: 'code-s-7', prompt: 'Write a SQL query to [describe goal, e.g., find top 10 users by spend].', description: 'SQL Query Generator' },
    { id: 'code-s-8', prompt: 'Generate a Dockerfile for a [Language/Framework] application.', description: 'Dockerfile Generator' },
    { id: 'code-s-9', prompt: 'Explain this code snippet as if I am a junior developer: [paste code]', description: 'Code Explanation' },
    { id: 'code-s-10', prompt: 'Add JSDoc comments to all functions in this file: [paste code]', description: 'Add Documentation' },
    { id: 'code-s-11', prompt: 'Create a responsive CSS grid layout with 3 columns for [device type].', description: 'Responsive CSS Layout' },
    { id: 'code-s-12', prompt: 'Write a bash script to [describe task, e.g., automate backups].', description: 'Bash Automation Script' },
    { id: 'code-s-13', prompt: 'Optimize this SQL query for better performance: [paste query]', description: 'SQL Optimization' },
    { id: 'code-s-14', prompt: 'Generate a README.md file for a project called [Project Name] with [Features].', description: 'README Generator' },
    { id: 'code-s-15', prompt: 'What are the security vulnerabilities in this code snippet? [paste code]', description: 'Security Audit' },
    { id: 'code-s-16', prompt: 'Write a boilerplate Express.js server with a single GET route.', description: 'Boilerplate Server' },
    { id: 'code-s-17', prompt: 'Implement a "debounce" function in vanilla JavaScript.', description: 'Utility Function' },
    { id: 'code-s-18', prompt: 'Create a Git ignore file for a standard [Language] project.', description: '.gitignore Generator' },
    { id: 'code-s-19', prompt: 'Explain the difference between [Concept A] and [Concept B] in [Language].', description: 'Technical Comparison' },
    { id: 'code-s-20', prompt: 'Write a Terraform snippet to provision an S3 bucket on AWS.', description: 'IaC Snippet' },
    { id: 'code-s-21', prompt: 'Help me debug this "CORS" error: [paste error message]', description: 'Debug CORS Issues' },
    { id: 'code-s-22', prompt: 'Generate a list of 10 edge cases for testing a [Function Type].', description: 'Test Edge Cases' },
    { id: 'code-s-23', prompt: 'How do I center a div in 2026? Give me the most modern way.', description: 'Modern CSS Snippet' },
    { id: 'code-s-24', prompt: 'Write a Kubernetes manifest for a deployment with 3 replicas.', description: 'K8s Deployment' },
    { id: 'code-s-25', prompt: 'Create a Mermaid.js diagram for the following logic: [describe logic]', description: 'Diagram from Logic' },
    { id: 'code-s-26', prompt: 'Translate this pseudocode into working [Language]: [paste pseudocode]', description: 'Pseudocode to Code' }
  ],
  longPrompts: [
    {
      id: 'code-l-1',
      title: 'Legacy Code Migration Strategist',
      prompt: 'I have a legacy [Language/Framework] codebase that I need to migrate to [New Language/Framework]. 1. Analyze this snippet of legacy code [Paste Code]. 2. Identify the core business logic. 3. Rewrite it in the new stack using modern design patterns. 4. Provide a step-by-step migration plan for the rest of the module, highlighting potential breaking changes.',
      useCase: 'Modernization'
    },
    {
      id: 'code-l-2',
      title: 'Scalable Microservices Architect',
      prompt: 'I am designing a microservice for [Functionality]. 1. Suggest a technology stack (DB, Cache, Language). 2. Provide a High-Level Design (HLD) including a diagram description. 3. Define the API contracts (OpenAPI/Swagger). 4. Explain how this service will handle [Specific Challenge, e.g., eventual consistency or high traffic].',
      useCase: 'System Design'
    },
    {
      id: 'code-l-3',
      title: 'Full-Stack Feature Implementation',
      prompt: 'I need to implement a "[Feature Name]" feature. 1. Provide the database schema migration script. 2. Write the backend API route and controller. 3. Write the frontend component in [Framework] with Tailwind CSS styling. 4. Include error handling and loading states for both frontend and backend.',
      useCase: 'Feature Development'
    },
    {
      id: 'code-l-4',
      title: 'The "Expert Code Reviewer" Persona',
      prompt: 'Act as a Senior Principal Engineer at a top tech company. Review the following Pull Request: [Paste Code Changes]. Evaluate it based on: 1. Code quality and maintainability. 2. Performance bottlenecks. 3. Security vulnerabilities. 4. Adherence to DRY and SOLID principles. Provide constructive feedback as comments.',
      useCase: 'Code Review'
    },
    {
      id: 'code-l-5',
      title: 'Automated Test Suite Architect',
      prompt: 'I have a large project with almost no tests. 1. Suggest a testing strategy (Unit vs. Integration vs. E2E). 2. Provide the configuration for [Test Runner]. 3. Write a "Test Factory" or helper for common data setup. 4. Write 3 comprehensive tests for the most critical part of the app: [Paste Critical Code].',
      useCase: 'Quality Assurance'
    },
    {
      id: 'code-l-6',
      title: 'Database Schema & Query Expert',
      prompt: 'I am building a [Type of System]. 1. Propose an optimized PostgreSQL schema with relationships and indexes. 2. Write a complex query that involves [e.g., recursive CTEs or window functions]. 3. Explain how to scale this database to handle 10 million rows using partitioning or sharding.',
      useCase: 'Data Engineering'
    },
    {
      id: 'code-l-7',
      title: 'Cybersecurity "Red Team" Auditor',
      prompt: 'Analyze the following authentication flow for security flaws: [Describe Flow or Paste Code]. 1. Identify risks like SQL Injection, XSS, or CSRF. 2. Check for "Broken Access Control" issues. 3. Suggest modern remediation steps (e.g., using JWT with proper rotation). 4. Provide the secure version of the code.',
      useCase: 'Security'
    },
    {
      id: 'code-l-8',
      title: 'DevOps & CI/CD Pipeline Creator',
      prompt: 'Create a GitHub Actions (or GitLab CI) pipeline for a [Language] project. The pipeline should: 1. Run linting and tests on every PR. 2. Build a Docker image. 3. Push to [Registry]. 4. Deploy to [Cloud Provider] staging environment. 5. Include a "Manual Approval" step for production deployment.',
      useCase: 'DevOps'
    },
    {
      id: 'code-l-9',
      title: 'Algorithm & Data Structure Tutor',
      prompt: 'I am preparing for a technical interview. Explain the [Algorithm, e.g., A* Search or Red-Black Trees]. 1. Start with the intuition (why it works). 2. Provide the pseudocode. 3. Implement it in [Language]. 4. Analyze the Big O time and space complexity. 5. Give me a practice problem where this algorithm is the ideal solution.',
      useCase: 'Interview Prep'
    },
    {
      id: 'code-l-10',
      title: 'Cloud Cost Optimization Audit',
      prompt: 'I am looking at my AWS/Azure bill and it\'s too high. Here is a summary of my current infrastructure: [Describe Infra]. 1. Identify 3 areas where I can save money (e.g., rightsizing, spot instances). 2. Suggest a "Serverless" alternative for [Module]. 3. Provide the Terraform code to implement these changes.',
      useCase: 'Cloud Management'
    },
    {
      id: 'code-l-11',
      title: 'API First Design & Documentation',
      prompt: 'I want to build a public API for [Service]. 1. Write the OpenAPI 3.0 specification in YAML. 2. Design the "Rate Limiting" and "Authentication" strategy. 3. Create a "Getting Started" guide for external developers. 4. Suggest 3 ways to version the API without breaking existing clients.',
      useCase: 'API Design'
    },
    {
      id: 'code-l-12',
      title: 'The "Performance Profiler" Consultant',
      prompt: 'My [Language] application is slow. Here is the profiling output: [Paste Output or Describe]. 1. Identify the primary bottleneck (I/O, CPU, Memory). 2. Suggest 3 specific optimizations (e.g., memoization, worker threads). 3. Rewrite the slowest function for maximum speed. 4. Explain how to set up "Continuous Performance Monitoring."',
      useCase: 'Optimization'
    },
    {
      id: 'code-l-13',
      title: 'Machine Learning Model Deployment',
      prompt: 'I have a trained [Model Type] model. Help me deploy it as an API. 1. Write a FastAPI wrapper for inference. 2. Provide the requirements.txt and Dockerfile. 3. Explain how to handle "Model Versioning" and "Data Drift" monitoring in production.',
      useCase: 'MLOps'
    },
    {
      id: 'code-l-14',
      title: 'Frontend Performance & Core Web Vitals',
      prompt: 'My website is failing Core Web Vitals. 1. Analyze the following Lighthouse report: [Paste Report]. 2. Suggest fixes for LCP (Largest Contentful Paint). 3. Explain how to implement "Image Optimization" and "Code Splitting" in [Framework]. 4. Provide a script for pre-fetching critical assets.',
      useCase: 'Frontend Ops'
    },
    {
      id: 'code-l-15',
      title: 'Smart Contract Security Audit',
      prompt: 'Analyze this Solidity smart contract for vulnerabilities: [Paste Contract]. 1. Check for Reentrancy attacks. 2. Check for integer overflow/underflow. 3. Audit the access control modifiers. 4. Suggest gas optimizations to make the contract cheaper to deploy and use.',
      useCase: 'Web3/Blockchain'
    },
    {
      id: 'code-l-16',
      title: 'Mobile App "Offline-First" Strategy',
      prompt: 'I am building a mobile app in [Flutter/React Native]. I need it to work offline. 1. Suggest a local database (e.g., SQLite, Hive). 2. Design the synchronization logic with the backend. 3. Explain how to handle "Conflict Resolution" when data changes on both sides. 4. Provide a code snippet for the sync manager.',
      useCase: 'Mobile Dev'
    },
    {
      id: 'code-l-17',
      title: 'Technical Specification (Spec) Generator',
      prompt: 'I have an idea for a feature: [Describe Idea]. Act as a Technical Product Manager. 1. Write a formal Technical Specification document. 2. Define the "User Stories". 3. Outline the "Technical Requirements". 4. Create an "Implementation Timeline" broken down by sprints.',
      useCase: 'Planning'
    },
    {
      id: 'code-l-18',
      title: 'Graph Database Strategy (Neo4j)',
      prompt: 'I have highly connected data about [Topic]. 1. Design a Graph Schema (Nodes, Relationships, Properties). 2. Write a Cypher query to find [e.g., 2nd-degree connections]. 3. Explain why a Graph database is better than a Relational one for this specific use case.',
      useCase: 'Graph Data'
    },
    {
      id: 'code-l-19',
      title: 'Accessibility (A11y) Expert Audit',
      prompt: 'Review this HTML/React component for accessibility: [Paste Code]. 1. Check for proper ARIA labels. 2. Ensure keyboard navigability. 3. Audit the color contrast. 4. Suggest fixes to make it WCAG 2.1 Level AA compliant.',
      useCase: 'A11y'
    },
    {
      id: 'code-l-20',
      title: 'Bash/Python System Maintenance Suite',
      prompt: 'I need a suite of scripts for system maintenance on a Linux server. 1. A script to monitor disk usage and send an alert. 2. A script to rotate and compress logs. 3. A script to check for failed SSH login attempts. 4. Explain how to set these up as "Cron Jobs."',
      useCase: 'SysAdmin'
    }
  ],
  faqs: [
    { question: 'Is it safe to paste my code into ChatGPT?', answer: 'In 2026, for public models, the answer is "Only if it doesn\'t contain secrets." For enterprise users, most companies now provide private AI instances where data is not used for training. Always follow your company\'s AI security policy.' },
    { question: 'Will AI replace software engineers?', answer: 'AI is replacing "Coders" (people who only write syntax), but it is empowering "Engineers" (people who solve problems). The focus has shifted from *how* to write a loop to *why* we are building this system in the first place.' },
    { question: 'How do I avoid AI-generated bugs?', answer: 'Always treat AI code as a "Senior Developer\'s First Draft." You must review it, run tests against it, and understand every line before merging. The "Trust but Verify" approach is the only way to maintain a healthy codebase.' },
    { question: 'Which model is best for coding in 2026?', answer: 'Claude 3.5 Sonnet is widely considered the best for logic and large-scale refactoring. GPT-4o is the "All-Rounder" and excellent for Python/Data Science. Specialized models like "DeepSeek Coder" are also gaining popularity for their efficiency.' },
    { question: 'Can ChatGPT help with system design interviews?', answer: 'Yes! It is one of the best tools for practicing. Use the "Architect" prompts in this guide to build a mental framework for how to scale systems, handle bottlenecks, and choose the right database.' },
    { question: 'How do I stay relevant as a developer in the AI era?', answer: 'Focus on High-Level Design, Security, Soft Skills (Communication/Leadership), and Domain Expertise. Use AI to handle the mundane tasks so you can focus on the architectural decisions that matter.' }
  ],
  platformTips: [
    'Use the S.C.O.P.E. framework for all complex code requests.',
    'Ask the AI to "Think Step-by-Step" before writing any code to reduce logic errors.',
    'Upload your existing codebase (or relevant files) so the AI has context on your patterns.',
    'Use the "Explain this code" feature for legacy systems you don\'t understand.',
    'Ask for "3 different ways to implement this" to see the trade-offs between performance and readability.',
    'Set up custom instructions with your preferred linting and style rules.',
    'Always ask for unit tests to be generated alongside the feature code.',
    'Use AI to generate "Mock Data" for frontend development when the backend isn\'t ready.'
  ]
};
