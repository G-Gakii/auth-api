# User Authentication with Node.js, Express,MongoDB and JWT

This project demonstrates a user authentication system built with Node.js, Express, MongoDB, and JWT for secure login and registration.

## Prerequisites

- Node.js
- npm
- MongoDB

# Live site url

[auth](https://auth-api-4k3s.onrender.com/api/user/welcome)

## Getting Started

### Installation

1.Clone the repository:
git clone git@github.com:G-Gakii/auth-api.git 2. Install dependencies:
npm install

3. Set up environment variables: Create a .env file in the root directory and add the following:
   PORT=3000
   MONGO_URI=your_mongo_database_uri

### Running the Server

1. Start the server:
   npm run dev

2. The server will run on http://localhost:3000.

### API Endpoints

#### User registration:

- URL: /api/user/register
- Method: POST
- Description: Registers a new user.

#### User Login

- URL: /api/user/login
- Method: POST
- Description: Logs in a user and returns a JWT token.

#### Get User Profile

- URL: /api/user/profile
- Method: GET
- Description: Retrieves user profile information. Requires JWT token

#### log Out

- URL: /api/user/logout
- Method: POST
- Description: log out user

### Middleware

- CORS: Allows cross-origin requests.
- body-parser: Parses incoming request bodies.
- JWT Verification: Middleware to verify JWT tokens and protect routes.

### Dependencies

- Express: Web framework for Node.js.
- Mongoose: MongoDB object modeling for Node.js.
- bcryptjs: Library to hash passwords.
- jsonwebtoken: Library to handle JSON Web Tokens (JWT).
- cors: Middleware to enable CORS.
- body-parser: Middleware to parse JSON bodies.
