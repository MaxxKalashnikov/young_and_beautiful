# My Express Application

This is a simple Express application with user authentication using MariaDB. It includes basic functionality for user registration, login, and dashboard access.

## Files and Directories

- **models/**: This directory contains the models for interacting with the database.

  - **User.js**: Defines the schema and model for the user collection in the database.

- **public/**: This directory contains static files (HTML, CSS, JavaScript) to be served by Express.

  - **index.html**: The landing page of the application.
  - **styles.css**: CSS file for styling.
  - **script.js**: JavaScript file for client-side functionality.

- **routes/**: This directory contains route handlers for different parts of the application.

  - **auth.js**: Handles authentication-related routes such as registration, login, and logout.
  - **dashboard.js**: Handles routes related to the dashboard (authenticated area).

- **views/**: This directory contains HTML templates for rendering views.

  - **login.html**: HTML template for the login page.
  - **register.html**: HTML template for the registration page.
  - **dashboard.html**: HTML template for the dashboard page.

- **package.json**: Contains metadata about the project and its dependencies.

- **server.js**: The main entry point of the Express application. Sets up the server, middleware, routes, and database connection.

- **.env**: Contains environment variables, such as database connection settings. Not included in the repository.

## Getting Started

1. Install dependencies: npm install
2. Start the server: node server.js
3. Access the application in your web browser: http://localhost:3000

## Usage

- Register a new user by accessing the registration page (`/register`) and filling out the registration form.
- Log in using the login page (`/login`) with the registered username and password.
- Access the dashboard page (`/dashboard`) after successful login.

## Dependencies

- express
- sequelize (for interacting with MariaDB)
- bcrypt (for password hashing)
- dotenv (for managing environment variables)

## Contributing

Feel free to contribute to this project by submitting pull requests or reporting issues.

## License

This project is licensed under the [MIT License](LICENSE).
