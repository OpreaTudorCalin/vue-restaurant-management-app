# Restaurant Management App

This is a simple restaurant management application built with Vue.js. The application allows users to view, add, update, and delete restaurants. Users can log in or sign up to access the features of the application.

## Features

- User authentication: Users can log in or sign up to access the application.
- Home Page: Displays a list of restaurants with their details, including ID, name, contact information, and address. Users can update or delete individual restaurants.
- Add Restaurant: Allows users to add a new restaurant by providing the name, contact information, and address.
- Update Restaurant: Enables users to update the details of an existing restaurant.
- Navigation: Provides a navigation bar with links to the home page, add restaurant page, and a logout option.

## Technologies Used

- Vue.js: A JavaScript framework for building user interfaces.
- Axios: A library for making HTTP requests from the browser.
- JSON Server: A fake REST API server for testing and prototyping.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/OpreaTudorCalin/vue-restaurant-management-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd restaurant-management-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the JSON server:

   ```bash
   npm run server
   ```

2. In a separate terminal, start the application:

   ```
   npm run serve
   ```

3. Open your web browser and access the application at http://localhost:8080.

4. You can now navigate through the application, log in, sign up, and perform various actions related to restaurant management.

### Customize

- If you want to use your own REST API server, update the API endpoints in the Vue component files (HomeComp.vue, AddRestaurant.vue, UpdateRestaurant.vue, LoginPage.vue, and SignUp.vue) with the appropriate URLs.

## Contributing

- Contributions are welcome! If you find any issues or want to enhance the application, feel free to submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- The project is inspired by various restaurant management applications and tutorials available online.

- Special thanks to the Vue.js community and the authors of the dependencies used in this project.
