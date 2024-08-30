# Project Name

This project is a React and JavaScript-based application that utilizes Firebase for database, storage, and authentication functionalities to provide a type of social media where users can post 'Bubbles' and see how they grow through likes from other users.

## Design concept
Check it out on Figma `https://www.figma.com/design/R08tg0X92L7yIKMWLuW5Tj/Insta-Bubbles?node-id=0-1&t=B1UjgsCWkTM5xsdo-1`

## Installation

To run this project locally, please follow these steps:

1. Clone the repository: `git clone https://github.com/username/project.git`
2. Install dependencies: `npm install`
3. Set up environment variables: 
  - Create a `.env` file in the root directory using `.env.template` included in this project.
  - Create Google Firebase project and enable Auth, Firestore and Firebase Storage.
  - Add the necessary environment variables provided by Firebase.
4. Start the development server: `npm run dev` or `yarn dev`

## Features

- Auth: Users can register using Google or email and password. 
- Post: Users can create posts, vizualize owns and the other users.

## Technical debt
This project was a 48-hour development challenge. To achieve the concept, many things were built with technical debt, including:
- Use TS
- Use unit test
- Implements real likes count
- Implements Delete user's post
- Implements React Query


