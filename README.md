# Signifly Scoreboard and Tournament Management System

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), designed to facilitate the management of table foosball competitions.

## Overview

This project offers an interactive scoreboard and tournament management system, integrating with Airtable for real-time data storage and updates. It features:

- Real-time scoreboard updates
- Tournament standings and leaderboards
- Team and match management interface
- Secure Airtable admin dashboard for result updates
- Responsive design for desktop and mobile devices

## Technology Stack

- **Frontend**: Next.js, React, SCSS
- **Backend**: Airtable
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher) or an alternative package manager (yarn, pnpm, bun)
- An Airtable account for backend data management

Before running the project, set up your environment variables:

```env
NEXT_PUBLIC_AIRTABLE_API_KEY=your_api_key
NEXT_PUBLIC_AIRTABLE_BASE_ID=your_base_id
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/danieldraganweb/signifly-interview-2024.git
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Run the development server:

bash
Copy code
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

Usage
Score Updates: Navigate to the Airtable admin dashboard to enter match results.
Team Management: Add or edit team details through the Airtable interface.
Viewing Standings: The leaderboard updates in real-time and can be viewed on the main page.
Contact
Daniel Dragan - danieldraganweb@gmail.com

Project Link: https://github.com/danieldraganweb/signifly-interview-2024