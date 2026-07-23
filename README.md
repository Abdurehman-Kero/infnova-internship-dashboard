# INFNOVA Internship Applicant Management Dashboard

A responsive applicant management dashboard built as part of the INFNOVA Technologies Frontend Internship practical challenge.

The application allows administrators to securely log in, view internship applicants, search and filter applicants, view applicant details, update application status, and monitor overall application statistics through a clean and responsive dashboard interface.

---

## Live Demo

> Add deployed application URL here

Example:

```
https://your-deployed-url.vercel.app
```

---

## Repository

> Add GitHub repository URL here

Example:

```
https://github.com/your-username/infnova-internship-dashboard
```

---

# Features

## Authentication

- Admin login using provided API credentials
- Secure bearer token authentication
- Protected dashboard routes
- Logout functionality
- Automatic handling of unauthorized requests

---

## Dashboard Overview

- View application summary statistics
- Display total applicants
- Display applicants grouped by status:
  - Pending
  - Shortlisted
  - Accepted
  - Rejected

- Responsive statistics cards
- Loading and error states

---

## Applicant Management

Administrators can:

- View paginated applicants
- Search applicants
- Filter applicants by status
- Sort applicants by application date
- Open detailed applicant information
- Update applicant application status

---

## Applicant Details

The details page provides:

- Applicant personal information
- Application information
- Current application status
- Status update functionality
- Success and error feedback

---

## Responsive Design

The dashboard was built with a mobile-first approach.

Supported layouts:

- Desktop screens
- Tablets
- Mobile devices

The interface automatically adapts by:

- Converting tables into mobile-friendly cards
- Responsive sidebar navigation
- Flexible dashboard cards
- Mobile optimized navigation

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite

## Styling

- Tailwind CSS

## Routing

- React Router DOM

## API Communication

- Axios

## State Management

- React Context API
- Custom React Hooks

## UI Utilities

- Lucide React Icons

---

# Project Structure

```
src
│
├── api
│   └── axios.ts
│
├── components
│   ├── auth
│   │   └── LoginForm.tsx
│   │
│   ├── applicants
│   │   └── ApplicantTable.tsx
│   │
│   ├── common
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   │
│   └── dashboard
│       ├── Navbar.tsx
│       ├── Sidebar.tsx
│       └── StatsCard.tsx
│
├── contexts
│   └── AuthContext.tsx
│
├── hooks
│   └── useAuth.ts
│
├── layouts
│   └── DashboardLayout.tsx
│
├── pages
│   ├── Login
│   │   └── LoginPage.tsx
│   │
│   ├── Dashboard
│   │   └── DashboardPage.tsx
│   │
│   ├── Applicants
│   │   └── ApplicantsPage.tsx
│   │
│   └── ApplicantDetails
│       └── ApplicantDetailsPage.tsx
│
├── routes
│   ├── AppRouter.tsx
│   └── components
│       └── ProtectedRoute.tsx
│
├── services
│   ├── auth.service.ts
│   ├── applicant.service.ts
│   └── dashboard.service.ts
│
├── types
│   ├── auth.types.ts
│   ├── applicant.types.ts
│   └── dashboard.types.ts
│
└── utils
    └── authStorage.ts
```

---

# Application Architecture

The application follows a layered frontend architecture.

```
User
 |
 |
React Components
 |
 |
Pages
 |
 |
Services Layer
 |
 |
Axios API Client
 |
 |
INFNOVA Backend API
```

### Components

Reusable UI elements such as:

- Buttons
- Cards
- Tables
- Navigation components

are separated from business logic.

---

### Pages

Each page represents a major application feature:

- Login
- Dashboard
- Applicants
- Applicant Details

---

### Services

API communication is handled through dedicated service files.

Example:

```
auth.service.ts
applicant.service.ts
dashboard.service.ts
```

This keeps API logic separated from UI components.

---

### Authentication Flow

1. Administrator enters login credentials.
2. Frontend sends credentials to authentication endpoint.
3. API returns an access token.
4. Token is stored locally.
5. Axios automatically attaches the token to protected requests.
6. Protected routes become available.

---

# Installation and Setup

## Prerequisites

Make sure you have installed:

- Node.js (v18 or later)
- npm

Check versions:

```bash
node -v

npm -v
```

---

## Clone Repository

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd infnova-internship-dashboard
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Configuration

Create a `.env` file in the project root:

```
VITE_API_BASE_URL=https://infnova-intern.vercel.app/api
```

---

## Start Development Server

Run:

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

# Build for Production

To create a production build:

```bash
npm run build
```

The project should successfully compile without TypeScript or build errors.

---

# API Integration

The application communicates with the INFNOVA API:

```
https://infnova-intern.vercel.app/api
```

Protected requests require:

```
Authorization: Bearer <access_token>
```

Axios interceptors are used to:

- Attach authentication tokens automatically
- Handle unauthorized responses

---

# Login Credentials

For testing:

```
Email:
admin@infnova.tech

Password:
InternChallenge2026!
```

---

# Design Decisions

## Why React + TypeScript?

React provides a flexible component-based architecture, while TypeScript improves maintainability by catching type errors during development.

---

## Why Context API?

The application only requires lightweight global state management for authentication.

Using Context API avoids unnecessary complexity while keeping authentication state accessible across protected routes and components.

---

## Why Axios?

Axios provides:

- Request interceptors
- Response interceptors
- Cleaner API handling
- Better error management

which makes it suitable for authenticated applications.

---

## Why Tailwind CSS?

Tailwind allows fast development of responsive interfaces while keeping styling close to components.

It also provides consistent responsive utilities for mobile-first development.

---

# Assumptions

During development, the following assumptions were made:

- The backend API handles validation and business rules.
- The frontend is responsible for presenting data and managing user interactions.
- Authentication tokens are valid for the configured expiration period.
- Applicant status values are limited to the statuses provided by the API.

---

# Future Improvements

With additional development time, I would improve the project by adding:

## Better User Experience

- Advanced loading skeletons
- Toast notification system
- Better empty state illustrations
- Confirmation modal before status changes

---

## Performance

- Data caching using React Query
- Optimized API requests
- Lazy loading routes

---

## Security

- Improved token storage strategy
- Refresh token handling
- Additional permission-based access control

---

## Testing

Add:

- Unit tests
- Component tests
- API mocking tests

using tools like:

- Vitest
- React Testing Library

---

# Developer

Abdurehman Kero

Frontend Developer

GitHub:
```
https://github.com/Abdurehman-Kero
```

LinkedIn:
```
https://www.linkedin.com/in/abdukr/
```

Portfolio:
```
https://abdurehman.com/
```

---

# Final Notes

This project was developed as part of the INFNOVA Technologies Frontend Internship practical challenge.

The main focus was building a clean, maintainable, and responsive frontend application while following real-world React development practices.