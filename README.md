
BlOG API WITH COMMENTING SYSTEM

A RESTful API for a blogging platform built with Node.js, Express, and PostgreSQL, featuring user authentication, blog post management, and a commenting system.

FEATURES
//  User Authentication: JWT-based registration and login system

//  Blog Management: Full CRUD operations for blog posts

//  Comment System: Comment creation and deletion with post associations

//  File Upload: Profile picture upload functionality

//  Search: Full-text search across post titles and content

//  Pagination: Support for limit/offset pagination on list endpoints

//  Rate Limiting: Protection against API abuse

//  Input Validation: Comprehensive validation for all endpoints

//  Error Handling: Consistent JSON error responses

//  Security: Parameterized queries to prevent SQL injection



TECH STACK

Backend: Node.js, Express.js


CLONE REPOSITORY
git clone git@github.com:Mengawanji/BlogApi.git


The app will be running at:

URL https://blogapi-lede.onrender.com/


API ENDPOINTS

Authentication Endpoints
========    ========    ===========

POST /auth/register => Register new user

POST /auth/login => User login

GET /auth/me  => See your profile



User Endpoints
========    ========    ===========

POST /users/profile_upload => Upload profile picture


Post Endpoints
========    ========    ===========

GET /posts/  => Get all post
GET /posts/:id  => Get a specific post
POST /posts/  => Create a new post
PUT /posts/:id  => Update a post
DELETE /posts/:id  => Delete a post
GET /posts/1/comments  =>  Get post with comments

Comment Endpoints
========    ========    ===========
GET /comments/posts/1/comments  => Get comments for a post
POST /comments/posts/1/comments  => Create a comment
DELETE /comments/1  => Delete a comment







