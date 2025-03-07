# 🚀 Blog App Backend

Welcome to the **Blog App Backend**! This project provides a RESTful API to manage blog posts, including features like creating, updating, deleting, and retrieving blog posts.

## 🌟 Features

✅ Retrieve all blogs  
✅ Retrieve a single blog by ID  
✅ Create a new blog  
✅ Update an existing blog  
✅ Delete a blog  
✅ Create comments on blog posts  
✅ Like and Unlike blog posts  

---

## 🛠️ Getting Started

### 📌 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

### 🔧 Installation

1️⃣ **Clone the repository:**
   ```bash
   git clone https://github.com/Jaishu07/blog-app-backend.git
   cd blog-app-backend
   ```

2️⃣ **Install dependencies:**
   ```bash
   npm install
   ```

3️⃣ **Set up environment variables:**
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   ```

4️⃣ **Start the server:**
   ```bash
   npm start
   ```
   The server will run on `http://localhost:4000`.

---

## 📌 API Endpoints

### Create a New Post

- **Endpoint:** `POST /api/v1/posts/create`
- **Description:** Create a new blog post.
- **Request Body:**

  ```json
  {
      "title": "Dummy Post2",
      "body": "Dummy Post1"
  }
  ```

- **Example Request:**

  ```bash
  curl --location 'http://localhost:4000/api/v1/posts/create' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "title": "Dummy Post2",
      "body": "Dummy Post1"
  }'
  ```

### Retrieve All Posts

- **Endpoint:** `GET /api/v1/posts`
- **Description:** Retrieve all blog posts.
- **Example Request:**

  ```bash
  curl --location 'http://localhost:4000/api/v1/posts'
  ```

### Create a Comment

- **Endpoint:** `POST /api/v1/comments/create`
- **Description:** Create a new comment on a blog post.
- **Request Body:**

  ```json
  {
      "post": "6429343f2b912f721b9c50b8",
      "user": "Abir Pal",
      "body": "This is the Second Comment"
  }
  ```

- **Example Request:**

  ```bash
  curl --location 'http://localhost:4000/api/v1/comments/create' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "post": "6429343f2b912f721b9c50b8",
      "user": "Abir Pal",
      "body": "This is the Second Comment"
  }'
  ```

### Like a Post

- **Endpoint:** `POST /api/v1/likes/like`
- **Description:** Like a blog post.
- **Request Body:**

  ```json
  {
      "post": "6429343f2b912f721b9c50b8",
      "user": "Abir Pal"
  }
  ```

- **Example Request:**

  ```bash
  curl --location 'http://localhost:4000/api/v1/likes/like' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "post": "6429343f2b912f721b9c50b8",
      "user": "Abir Pal"
  }'
  ```

### Unlike a Post

- **Endpoint:** `POST /api/v1/likes/unlike`
- **Description:** Unlike a blog post.
- **Request Body:**

  ```json
  {
      "post": "6429343f2b912f721b9c50b8",
      "like": "64293e833d3611dfcad7a664"
  }
  ```

- **Example Request:**

  ```bash
  curl --location 'http://localhost:4000/api/v1/likes/unlike' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "post": "6429343f2b912f721b9c50b8",
      "like": "64293e833d3611dfcad7a664"
  }'
  ```

📖 **For detailed API documentation, visit:** [Postman API Docs](https://documenter.getpostman.com/view/24441701/2s93RUvs44)

---

## 🤝 Contributing

Contributions are welcome! 🚀 Feel free to fork the repository and submit a pull request with improvements.

---

