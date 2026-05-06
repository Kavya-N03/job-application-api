# Job Portal API

A RESTful backend application built using Node.js, Express, and MongoDB.
This API allows users to register, authenticate, manage companies and jobs, and apply to jobs with resume uploads.

---

## Features

* JWT-based authentication and authorization
* Company management (CRUD)
* Job management (CRUD)
* Job application system
* Resume upload using Multer
* Request validation using Joi
* Protected routes using middleware
* Centralized error handling
* MVC architecture

---

## Tech Stack

* Backend: Node.js, Express.js
* Database: MongoDB (Mongoose)
* Authentication: JSON Web Tokens (JWT)
* Validation: Joi
* File Upload: Multer

---

## Project Structure

project-root/
├── config
├── controllers/
├── docs
├── models/
├── routes/
├── middleware/
├── uploads/
├── utils/
├── validators/
└── server.js

````

---

## Installation

```bash
git clone 
cd 
npm install
````

---

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGODB_URL=your_mongodb_connection_string
SECRET_ACCESS=your_secret_key
```

---

## Run the Server

```bash
npm run dev
```

---

## Authentication

Protected routes require a token in the header:

```
Authorization: Bearer <token>
```

---

## API Endpoints

### Auth

* POST /api/register
* POST /api/login

### Company

* GET /api/companies
* POST /api/companies
* GET /api/companies/:id
* PUT /api/companies/:id
* DELETE /api/companies/:id

### Jobs

#### Company-based (Nested Routes)

* GET /api/companies/:companyId/jobs
* POST /api/companies/:companyId/jobs

#### General Routes

* GET /api/jobs
* GET /api/jobs/:id
* PUT /api/jobs/:id
* DELETE /api/jobs/:id

### Applications

* POST /api/jobs/:jobId/apply

---

## File Upload

* Resume uploads handled using Multer
* Files stored in `/uploads`
