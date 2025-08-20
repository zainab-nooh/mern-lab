# Hoot: Full-Stack Application Assignment
<img width="2324" height="978" alt="image" src="https://github.com/user-attachments/assets/1c3365aa-fc6a-442d-a147-ffb24c845a09" />


## 🎯 Project Overview

For this assignment, you will build **Hoot**, a simplified, full-stack micro-blogging application inspired by Twitter. You will apply the concepts and architecture from the Goat Cafe project to create a new application from scratch.

The goal is to build a MERN stack application that allows users to sign up, log in, create "hoots" (short posts), and see a list of all hoots.

---

## 🚀 Getting Started

You will be building both the backend API and the frontend React application for Hoot. This assignment will guide you through the high-level steps, but you will be responsible for writing the code by referencing the patterns and logic from the Goat Cafe project.

### Core User Stories:
1.  **As a User, I want to sign up for an account** so that I can start posting.
2.  **As a User, I want to log in** to my account.
3.  **As a logged-in User, I want to create a new hoot** (post) with text content.
4.  **As a logged-in User, I want to see a list of all hoots** from all users.

---

## 📝 Assignment Steps

Follow these steps in order. Refer to your `APP_OVERVIEW.md` from the Goat Cafe project for detailed examples of how to implement each part.

### 1. Project Setup
-   Use `npm create vite@latest hoot -- --template react` to initialize a new React project.
-   `cd` into the `hoot` directory.
-   Create the backend directory structure (`config`, `models`, `controllers`, `routes`).
-   Install all necessary backend and frontend dependencies (`express`, `mongoose`, `dotenv`, `bcrypt`, `jsonwebtoken`, `cors`, `react-router-dom`, etc.).

### 2. Backend Config Files
-   Create your `.env` file and define your `MONGO_URI`, `SECRET`, and `PORT`.
-   Create your `database.js` file to connect to your MongoDB.
-   Create the `checkToken.js` middleware to verify JWTs on incoming requests.
-   Create the `ensureLoggedIn.js` middleware to protect specific routes.

### 3. Mongoose Models
-   **User Model**: Create a `user.js` model. It should include `name`, `email`, and `password` fields. Don't forget the `pre-save` hook to hash the password!
-   **Hoot Model**: Create a `hoot.js` model. It should have:
    -   A `text` field (String, required).
    -   A `user` field that references the User model (`ObjectId`, `ref: 'User'`). This links the hoot to the user who created it.
    -   Don't forget to include `timestamps: true`!

### 4. Backend Controllers
-   **Users Controller**: Create `controllers/api/users.js`. Implement the `create` and `login` functions using the data/api controller pattern from the cafe project. This will handle signup and login logic.
-   **Hoots Controller**: Create `controllers/api/hoots.js`.
    -   Implement an `index` function to find and return all hoots.
    -   Implement a `create` function to create a new hoot. Remember to associate it with the logged-in user (`req.user._id`).

### 5. Backend Routes
-   **User Routes**: Create `routes/api/users.js`. Set up the `POST /` route for signup and the `POST /login` route for login.
-   **Hoot Routes**: Create `routes/api/hoots.js`.
    -   Set up the `GET /` route to get all hoots.
    -   Set up the `POST /` route to create a new hoot.
    -   **Important**: Protect these routes! A user must be logged in to see or create hoots. Use your `ensureLoggedIn` middleware here.

### 6. App Server and Server
-   Create your main `server.js` file to start your server.
-   Create your `app-server.js` file. Configure all your Express middleware (`cors`, `express.json`, etc.), mount your API routes, and set up the static file serving and the catch-all route for the React front-end.

### 7. Postman & Vite Config
-   **Postman**: Thoroughly test your backend API endpoints.
    -   Can you create a user?
    -   Can you log in with that user and get a token?
    -   Can you use that token to create a new hoot?
    -   Can you use that token to get the list of all hoots?
-   **Vite Config**: Update your `vite.config.js` to proxy `/api` requests to your backend server.

### 8. Frontend Utilities
-   Create the `send-request.js` utility. This is the foundation of your frontend's communication with the backend.
-   Create the `users-api.js` and `users-service.js` files to handle signup and login logic on the frontend, including storing the JWT in `localStorage`.
-   Create a `hoots-api.js` file to handle fetching and creating hoots.

### 9. Frontend Components
-   Create the necessary components for your UI. At a minimum, you'll need:
    -   `SignUpForm` and `LoginForm` components.
    -   A `NavBar` or similar component for navigation and logout.
    -   A `NewHootForm` component with a textarea and a submit button.
    -   A `HootList` component to display all the hoots.
    -   A `HootListItem` component to display the text and author of a single hoot.

### 10. Frontend Pages
-   Create the pages to structure your application:
    -   `AuthPage`: Should display either the `LoginForm` or `SignUpForm`.
    -   `HootFeedPage`: This will be the main page for logged-in users. It should display the `NewHootForm` and the `HootList`.

### 11. App & Entry Files
-   Structure your routing. Use the `AppRouter` pattern from the Goat Cafe project.
    -   Create `router/index.jsx` and `router/routes.js`.
    -   Your router should show `AuthPage` if there is no user, and the `HootFeedPage` if a user is logged in.
-   Update `main.jsx` to render your `AppRouter`.

### 12. Test Running App
-   Run both your backend and frontend servers (`npm run dev:full`).
-   Test the complete user flow in the browser:
    -   Sign up for a new account.
    -   Get redirected to the main feed.
    -   Create a new hoot.
    -   See the new hoot appear in the feed.
    -   Log out and log back in.

Good luck!
