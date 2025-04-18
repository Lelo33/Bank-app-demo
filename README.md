# Bank-app-demo
"A modern banking application demo showcasing full-stack development skills"
# Modern Banking Application Demo
A responsive, full-stack banking application demo built to showcase front-end and back-end development skills.
## Features
- **Dashboard Overview**: Account summaries, recent transactions, and spending analytics
- **Transaction History**: Detailed view of all account transactions
- **Fund Transfers**: Transfer funds between accounts with confirmation
- **Account Management**: View and manage multiple account types
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
## Technology Stack
- **Frontend**: React, TypeScript, TailwindCSS, shadcn/ui
- **Backend**: Node.js, Express
- **State Management**: TanStack React Query
- **Data Visualization**: Chart.js
- **Authentication**: Mock login system
## Screenshots
### Dashboard
![Dashboard View](screenshots/dashboard.png)
### Accounts
![Accounts View](screenshots/accounts.png)
### Transfer Funds
![Transfer View](screenshots/transfer.png)
## Project Structure
├── client/ # Frontend React application
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── hooks/ # Custom React hooks
│ │ ├── lib/ # Utility functions
│ │ ├── pages/ # Application pages
├── server/ # Backend Express server
│ ├── routes.ts # API routes
│ ├── storage.ts # Data storage implementation
├── shared/ # Shared code between frontend and backend
│ ├── schema.ts # Data models and validation schemas

## Implementation Details
This project demonstrates:
- Modern React development practices with TypeScript
- Component-based architecture with proper separation of concerns
- Data fetching and state management using React Query
- Form handling with validation using React Hook Form and Zod
- Responsive UI design using TailwindCSS
- Server-side API implementation with Express
- Clean project organization and code structure
*Note: This is a portfolio demonstration application and does not connect to actual banking services.*
