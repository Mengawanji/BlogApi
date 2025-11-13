
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

## 🧰 Tech Stack

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
👉 [https://blogapi-lede.onrender.com/](https://blogapi-lede.onrender.com/)


---


## Installation & Setup

### 1 Clone the Repository
```bash
git clone git@github.com:Mengawanji/BlogApi.git
cd BlogApi
