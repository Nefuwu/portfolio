export const posts = [
  // 📌 Project Posts
  {
    id: 1,
    title: 'How I Built FalconBot',
    slug: 'how-i-built-falconbot',
    date: '2025-04-25',
    excerpt:
      'How I designed and implemented a student assistance chatbot using Python and Flask.',
    tech: 'Python, Flask, SQL, JavaScript',
    description:
      'FalconBot was my capstone chatbot project for student query automation.',
    reason:
      'To assist students in quickly retrieving information on school processes and requirements without manual inquiries.',
    process:
      'I built a Python-based Flask backend to handle incoming queries, integrated a rule-based response system, and built a frontend chatbot UI.',
    challenges:
      'Managing flexible user input, implementing context-aware replies, and handling edge cases in responses.',
    lessons:
      'Improved Python API structuring, learned about chatbot conversational flows, and secured form inputs.',
    content:
      'FalconBot was developed as a solution for student self-service queries. It uses a simple rule-based system with Flask endpoints and a web UI...',
  },

  {
    id: 2,
    title: 'Automating Document Data Extraction',
    slug: 'automating-document-data-extraction',
    date: '2025-05-03',
    excerpt:
      'How I built a document automation system using OCR and Python to extract structured data from PDFs.',
    tech: 'Python, Tesseract OCR, SQLite, Pandas',
    description:
      'This was a capstone system that reads invoices and forms, extracts data using OCR, and stores them in a structured database.',
    reason:
      'To reduce manual data entry workload and speed up processing of school-related forms and financial records.',
    process:
      'Integrated Tesseract OCR to scan documents, parsed results with regular expressions and Pandas, then saved records into SQLite.',
    challenges:
      'Handling OCR inaccuracies and formatting inconsistencies in scanned documents.',
    lessons:
      'Mastered OCR pre-processing techniques and improved Python data parsing skills.',
    content:
      'This project reads PDF documents, applies OCR to extract key data fields like names and dates, then inserts those into an SQLite database...',
  },

  // 📌 OJT Task Blogs
  {
    id: 3,
    title: 'Automating Slack Notifications in OJT',
    slug: 'automating-slack-notifications-ojt',
    date: '2025-05-09',
    excerpt:
      "How I integrated Slack's Web API to automate project update notifications for our team during OJT.",
    tech: 'Python, Slack Web API, Requests',
    description:
      'A practical task to automatically send Slack messages from our backend Python scripts.',
    reason:
      'To keep our team updated in real-time about system events and automation progress.',
    process:
      'Studied Slack Web API documentation, generated bot tokens, and wrote a Python script that posts formatted messages to a Slack channel.',
    challenges:
      'Managing API token permissions and handling request failures gracefully.',
    lessons:
      'Learned efficient API integration workflows and improved debugging for external services.',
    content:
      "This was an OJT task to automate Slack messages for internal status updates. I wrote a Python function using Requests to send POST requests to Slack's API with message payloads...",
  },

  {
    id: 4,
    title: 'Research on Paddle Notification Integration',
    slug: 'research-paddle-notification-integration',
    date: '2025-05-06',
    excerpt:
      'Investigating the best strategy for integrating Paddle subscription notifications into our backend — proposing a hybrid Webhook + API polling model.',
    tech: '', // removed, no tools used directly
    description:
      'A research-focused task during OJT to evaluate optimal methods for implementing Paddle payment event notifications in our backend.',
    reason:
      'To ensure reliable, timely, and redundant delivery of subscription event updates such as purchases, cancellations, and renewals.',
    process:
      'Analyzed Paddle Webhook documentation, tested simulated requests with local endpoints, and proposed a hybrid integration model combining real-time Webhook event triggers for critical subscription changes with periodic API polling for reconciling event logs and missed notifications. This ensures data consistency and covers Webhook delivery failures.',
    challenges:
      'Managing secure Webhook authentication, handling edge cases in event order, and designing a reliable fallback for missed Webhook calls through API log queries.',
    lessons:
      'Learned the limitations of Webhook-only systems in production, how to architect hybrid event-handling workflows, and how to balance real-time triggers with periodic consistency checks for payment-driven backend systems.',
    content:
      "This OJT research task involved evaluating Paddle's Webhook system for subscription event notifications. After testing Webhook payloads with local endpoints, I identified delivery reliability concerns in case of endpoint failures. To address this, I proposed a hybrid solution: using Webhooks for immediate event triggers like purchases or cancellations, while periodically querying Paddle's API event logs to detect any missed or delayed events, ensuring robust and consistent subscription status updates in our backend database.",
  },
];
