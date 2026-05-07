export interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  duration: string;
  team: string;
  overview: string;
  features: string[];
  technical: string;
  challenges?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    icon: '🚀',
    title: 'Project Alpha',
    description: 'A modern web application built with React and Node.js featuring real-time updates and responsive design.',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2024',
    duration: '6 months',
    team: 'Team of 4',
    overview: 'Project Alpha is a comprehensive web application designed to streamline team collaboration and project management. Built with modern technologies, it provides real-time updates, intuitive interfaces, and powerful analytics.',
    features: [
      'Real-time collaboration with WebSocket integration',
      'Responsive design that works on all devices',
      'Advanced search and filtering capabilities',
      'User authentication and authorization',
      'Interactive dashboards with data visualization',
      'RESTful API for third-party integrations'
    ],
    technical: 'The application is built using a modern MERN stack (MongoDB, Express, React, Node.js). The frontend utilizes React hooks and context for state management, while the backend implements a microservices architecture for scalability.',
    challenges: 'One of the main challenges was implementing real-time updates efficiently across multiple users. We solved this by implementing WebSocket connections with Redis for message queuing and caching, which significantly improved performance and reduced server load.'
  },
  {
    id: '2',
    icon: '📱',
    title: 'Mobile App',
    description: 'Cross-platform mobile application with seamless user experience and offline capabilities.',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    year: '2024',
    duration: '4 months',
    team: 'Team of 3',
    overview: 'A cross-platform mobile application that delivers seamless user experience across iOS and Android. Features offline-first architecture and real-time data synchronization.',
    features: [
      'Cross-platform compatibility',
      'Offline functionality with data sync',
      'Push notifications',
      'Biometric authentication',
      'Native performance optimization',
      'Cloud storage integration'
    ],
    technical: 'Built with React Native and TypeScript for type safety. Firebase handles authentication, real-time database, and cloud functions. Implemented Redux for state management and AsyncStorage for offline capabilities.'
  },
  {
    id: '3',
    icon: '🎨',
    title: 'Design System',
    description: 'Comprehensive UI component library with documentation and accessibility features.',
    tags: ['React', 'Storybook', 'CSS'],
    year: '2023',
    duration: '8 months',
    team: 'Team of 5',
    overview: 'A comprehensive UI component library that ensures consistency across all products. Includes accessible components, documentation, and design tokens.',
    features: [
      '50+ reusable components',
      'WCAG 2.1 AA accessibility compliance',
      'Dark mode support',
      'Responsive design patterns',
      'Comprehensive documentation',
      'Theme customization'
    ],
    technical: 'Components built with React and styled-components. Storybook for development and documentation. Automated accessibility testing with axe-core. Published as an npm package for easy integration.'
  },
  {
    id: '4',
    icon: '🤖',
    title: 'AI Assistant',
    description: 'Intelligent chatbot powered by machine learning for customer support automation.',
    tags: ['Python', 'TensorFlow', 'NLP'],
    year: '2023',
    duration: '5 months',
    team: 'Team of 6',
    overview: 'An intelligent chatbot powered by machine learning that handles customer inquiries, provides recommendations, and automates support workflows.',
    features: [
      'Natural language understanding',
      'Context-aware responses',
      'Multi-language support',
      'Intent classification',
      'Sentiment analysis',
      'Integration with CRM systems'
    ],
    technical: 'Built with Python and TensorFlow for ML models. Uses BERT for natural language processing. FastAPI for the backend service. Deployed on Kubernetes for scalability.'
  },
  {
    id: '5',
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization platform with customizable widgets and reports.',
    tags: ['Vue.js', 'D3.js', 'PostgreSQL'],
    year: '2023',
    duration: '7 months',
    team: 'Team of 4',
    overview: 'A real-time data visualization platform that transforms complex data into actionable insights through interactive charts and customizable reports.',
    features: [
      'Real-time data streaming',
      'Interactive visualizations',
      'Custom widget builder',
      'Automated report generation',
      'Data export capabilities',
      'Multi-user collaboration'
    ],
    technical: 'Frontend built with Vue.js and D3.js for advanced visualizations. Backend uses Node.js with PostgreSQL for data storage. WebSocket connections for real-time updates.'
  },
  {
    id: '6',
    icon: '🔐',
    title: 'Auth Service',
    description: 'Secure authentication microservice with OAuth2 and JWT token management.',
    tags: ['Node.js', 'JWT', 'Redis'],
    year: '2024',
    duration: '3 months',
    team: 'Team of 2',
    overview: 'A secure authentication microservice that handles user management, OAuth2 flows, and JWT token management for distributed systems.',
    features: [
      'OAuth2 and OpenID Connect support',
      'Multi-factor authentication',
      'JWT token management',
      'Session management with Redis',
      'Rate limiting and security',
      'Audit logging'
    ],
    technical: 'Built with Node.js and Express. Uses Redis for session storage and rate limiting. PostgreSQL for user data. Implements bcrypt for password hashing and Passport.js for OAuth strategies.'
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
