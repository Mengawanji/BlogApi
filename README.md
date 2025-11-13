
# BlOG API WITH COMMENTING SYSTEM

A secure and scalable **RESTful API** for a blogging platform built with Node.js, Express, and PostgreSQL, — featuring **authentication**, **middleware architecture**, **database integration**, **CRUD operations**, and **security best practices**.


---

## Features

### Authentication
- JWT-based authentication for user login and registration.
- Secure password hashing with **bcrypt**.
- Token validation middleware for protected routes.

### Middleware
- **Auth middleware** — Verifies and decodes JWT tokens.
- **Error handler** — Centralized error management.
- **Request validator** — Ensures clean and valid request data.
- **Logger middleware** — Tracks API requests during development.

### Database & Schema
- Fully designed **database schema** (e.g., `User`, `Post`, `Comment`).
- Environment-based configuration for flexible deployment.
- Supports **relational data** through one-to-many and many-to-many associations.
- Easy migration and seeding setup.

### CRUD Operations
- Complete **Create, Read, Update, Delete** endpoints for:
  - Users
  - Posts
  - Comments
- Consistent JSON responses and proper HTTP status codes.
- Protected routes for authorized users.

### Security Implementations
- Environment variables via `.env` for sensitive data.
- Input sanitization to prevent SQL injection & XSS.
- **Helmet.js** for HTTP header protection.
- **CORS configuration** to restrict cross-origin access.
- Rate limiting to mitigate brute-force attacks.

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Node.js, Express.js |
| **Database** | PostgreSQL |
| **Authentication** | JWT |
| **File Uploads** | Multer |
| **Validation** | express-validator |
| **Security** | Helmet, CORS, Rate Limiting |


---

## Live API

**Base URL:**  
[https://blogapi-lede.onrender.com/](https://blogapi-lede.onrender.com/)


---

##  Installation & Setup

### 2 Clone the Repository

```bash
git clone git@github.com:Mengawanji/BlogApi.git
cd BlogApi
```

### 2 Install Dependencies

```bash
npm install
```

### 3 Create Environment Variables

Create a `.env` file in the project root and configure the following:

```env
PORT=3000
DATABASE_URL=your_postgres_connection_url
JWT_SECRET=your_secret_key
```

### 4 Run the Development Server

```bash
npm run dev
```

---

## API Endpoints

### User Routes

| Method | Endpoint                | Description                     |
| ------ | ----------------------- | ------------------------------- |
| POST   | `/auth/register`        | Register a new user             |
| POST   | `/auth/login`           | Authenticate user and get token |
| GET    | `/auth/me`              | Get the user                    |
| GET    | `/auth/users`           | Get all users *(Admin only)*    |
| POST   | `/users/profile_upload` | Upload user profile             |

### Post Routes

| Method | Endpoint         | Description                         |
| ------ | ---------------- | ----------------------------------- |
| POST   | `/posts`         | Create a new post *(Authenticated)* |
| GET    | `/posts`         | Fetch all posts                     |
| GET    | `/posts/:id`     | Get a specific post                 |
| PUT    | `/posts/:id`     | Update a post *(Author only)*       |
| DELETE | `/posts/:id`     | Delete a post *(Author only)*       |

### Comment Routes

| Method | Endpoint                       | Description                               |
| ------ | ------------------------------ | ----------------------------------------- |
| POST   | `/comments/posts/:id/comments` | Add a comment to a post *(Authenticated)* |
| GET    | `/comments/posts/:id/comments` | Get comments for a post                   |
| DELETE | `/comments/:id`                | Delete a comment *(Author/Admin)*         |

---