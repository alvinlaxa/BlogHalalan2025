# MERN Blog API

## Description
This is a full-stack **MERN Blog API** that allows users to:
- Register and log in
- Create, read, update, and delete blog posts
- Add and delete comments
- Admin can manage all posts and comments

## Features
- **User Authentication** (JWT-based login)
- **CRUD operations for Blogs**
- **Commenting System**
- **Admin Dashboard**
- **MongoDB Database**

## Test User Credentials
**Regular User:**
```json
{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
}
```
**Admin User:**
```json
{
    "username": "admin",
    "email": "admin@example.com",
    "password": "admin123"
}
```

## API Endpoints


Post Routes
Method  Endpoint    Description Auth Required
POST    /api/posts  Create a new post (User Only)   ✅
GET /api/posts  Get all posts   ❌
GET /api/posts/:id  Get a single post   ❌
PUT /api/posts/:id  Update a post (Only owner)  ✅
DELETE  /api/posts/:id  Delete a post (Admin Only)  ✅
Comment Routes
Method  Endpoint    Description Auth Required
POST    /api/comments/:postId   Add a comment   ✅
GET /api/comments/:postId   Get comments for a post ❌
DELETE  /api/comments/:id   Delete a comment (Admin Only)   ✅



## Environment Variables

MONGO_URI=mongodb+srv://admin:admin123@wdc028-course-booking.tadnv.mongodb.net/BlogAPI?retryWrites=true&w=majority
JWT_SECRET=BlogAPI
PORT=5001


