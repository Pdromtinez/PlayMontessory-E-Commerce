# PlayMontessori

Welcome to PlayMontessori. This project is intended to be an online platform that offers Montessori toys for children's development.

## Project Structure

### Server

- **Controllers**: Controllers that handle routes and business logic.
- **Routes**: Definition of application routes.
- **Database**: SQL file and database configuration.
- **Middleware**: Middleware used in the application.
- **Models**: Definition of data models.
- **Schemas**: Definition of validation schemas.
- **Utils**: Utilities like Cloudinary configuration, default data, and JWT utilities.
- **app.js**: Main application file.
- **config.js**: Configuration file.
- **index.js**: Server entry point.

### Test

- Unit tests for controllers and routes.

### Src

- **Components**: React components used in the user interface.
- **Auth**: Components related to user authentication and access.
- **Pages**: Main application pages, such as the home page and registration page.
- **Assets**: Static files, such as images and SVG files.
- **Auth**: Components and routes related to user authentication.

## Configuration and Scripts

This project uses Vite for frontend development and Node.js for the server. Here are some useful commands:

- `npm run dev`: Start the development server with Vite.
- `npm run server`: Start the server in development mode.
- `npm run start`: Start the server in production mode.
- `npm run test`: Run unit tests.

## Main Dependencies

Some of the main dependencies used in this project include:

- `express` and `mysql2` for the server and database.
- `react` and `react-router-dom` for the user interface.
- `jsonwebtoken` for authentication.
- `cloudinary` for image storage.
- `zod` for data validation.

## Installation Guide

**Prerequisites:**

1. Make sure you have Node.js and npm installed. You can download and install Node.js from [the official website](https://nodejs.org/).

2. Ensure you have MySQL installed and configured on your system. You can download MySQL from [the official website](https://dev.mysql.com/downloads/).

3. You must have an account on [Cloudinary](https://cloudinary.com) as it is used for image storage.

**Installation Steps:**

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/your-user/e-commerce.git```

2. Install server and client dependencies:

    ```bash
    npm install
    cd src
    npm install

3. Set up the database:

   Create a MySQL database for the project.

   Copy the Schemma.sql file into the database folder and execute it in your database to create the necessary tables.

   Configure the database connection by editing the db.js file in the database folder. Make sure to provide your database information.

4. Configure Cloudinary:

   Create an account on Cloudinary if you don't have one.

   Copy your Cloudinary API Key, API Secret, and Cloud Name.

   Create a .env file in the project's root and add the environment variables.

5. Start the server:

    ```bash
    npm run server
6. Start the application:

    ```bash
    npm run dev
7. The application will be available at http://localhost:3000 in your browser. 

That's it! You should now have PlayMontessori E-Commerce project installed and running on your local machine. You can start exploring and contributing to the project as needed.

## Contribution

We welcome your contributions to help grow this project! If you want to contribute, follow these steps:

1. Clone the repository.
2. Create a branch for your contribution: `git checkout -b branch-name`.
3. Make your changes and ensure the tests pass.
4. Submit a pull request for us to review your changes.

## Authors

- [@Pedro Martínez](https://github.com/Pdromtinez)
- [@Jassed Martinez](https://github.com/Jassedd)
- [@Emlily Martínez](https://github.com/emilykml)
- [@Gisela Fernandez](https://github.com/Fer-gi)
- [@Luis Guillent](https://github.com/afterdarkv1)
- [@Diego Bordallo](https://github.com/DBordallo)

Thank you for being a part of this exciting Montessori Toys E-Commerce project!
