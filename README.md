# Final - Quang Bui

## Overview
WeatherApp is a React-based web application that demonstrates key features of modern web development. The app includes dynamic routing, global state management using Redux, API integration for fetching weather data, form validation, and a light/dark theme toggle feature. This project is designed to meet the requirements of the **CSCI 6333 Final Assignment**.


<img width="793" alt="0" src="https://github.com/user-attachments/assets/f72a0ebd-b5ad-4def-86dc-e19ee945ce8d">
<img width="791" alt="1" src="https://github.com/user-attachments/assets/b1124533-39d3-4d2c-88b5-b76ea7132e43">
<img width="745" alt="2" src="https://github.com/user-attachments/assets/7a95a40e-8d41-48e7-ae15-48cb8e718dd7">
<img width="784" alt="3" src="https://github.com/user-attachments/assets/1068d94d-bd11-4fc6-bbc7-7f49ad3109e6">
<img width="782" alt="4" src="https://github.com/user-attachments/assets/7c14f9f5-96a6-44fb-ad9e-ca2633c65f5b">

---

## Features

### Part 01: React Router Implementation
- Implemented navigation with React Router to handle routing between five pages:
  1. **Home**: Displays a welcome message.
  2. **About**: Provides an overview of the app, with nested routes for:
     - **Team**: Information about the team behind the app.
     - **Mission**: Details about the app's mission.
  3. **Contact**: A page with a controlled form.
  4. **Redux Example**: Demonstrates Redux state management with a counter example.
  5. **Weather App**: Fetches and displays weather data from the OpenWeatherMap API.
- Added navigation links in the navbar for easy access to each page.
- Utilized nested routes for `About`, including `Team` and `Mission`.
  
<img width="558" alt="Screenshot 2024-12-10 at 1 05 23 PM" src="https://github.com/user-attachments/assets/d9aac0c2-bcac-413b-8495-dece6aaf896a">

### Part 02: Global State Management with Redux
- Created a Redux store to manage a **Counter** state.
- Actions implemented: **Increment**, **Decrement**, and **Reset**.
- Built a `CounterComponent` to display the counter value and buttons.
- Used React-Redux hooks (`useSelector` and `useDispatch`) to connect components to the Redux store.
  
<img width="849" alt="Screenshot 2024-12-10 at 1 20 45 PM" src="https://github.com/user-attachments/assets/33554995-486d-4f25-9b17-ce916dc64ef4">

### Part 03: Fetch and Display Data
- Implemented `WeatherContext` to share weather data and loading/error states across components.
- Used the OpenWeatherMap API to fetch weather data dynamically based on user input.
- Handled loading and error states during API requests to ensure a smooth user experience.
- Styled components:
  - Used **CSS Modules** for the `WeatherDisplay` component.
  - Styled the search bar using **styled-components**.
<img width="841" alt="Screenshot 2024-12-10 at 1 12 04 PM" src="https://github.com/user-attachments/assets/69525990-ac74-4808-bfe9-ee0026de10cd">

### Part 04: Global Theme Management
- Created a `ThemeContext` to manage light and dark modes globally.
- Added a **Theme Toggle Button** in the navbar for switching between themes.
- Dynamically applied light or dark styles to components based on the current theme.
<img width="732" alt="Screenshot 2024-12-10 at 1 13 26 PM" src="https://github.com/user-attachments/assets/8f615a41-f735-49a3-8783-d8f8cad20e18">

### Part 05: Form Handling with Validation
- Developed a controlled form on the **Contact** page with the following fields:
  1. **Name**: Required field with validation.
  2. **Email**: Required field with email format validation.
  3. **Message**: Optional field.
- Displayed error messages for invalid form submissions.
- Logged form data to the console upon valid submission and reset the form afterward.
<img width="643" alt="Screenshot 2024-12-10 at 1 14 52 PM" src="https://github.com/user-attachments/assets/4b482b98-68b6-45f0-a12c-c1d21eda2d04">

---

## Dependencies
- **React**: Framework for building the user interface.
- **React Router**: For handling dynamic routing.
- **Redux**: State management for the counter example.
- **React-Redux**: To connect Redux with React components.
- **Axios**: To fetch data from the OpenWeatherMap API.
- **styled-components**: For styling the search bar.
- **CSS Modules**: To style the weather display component.
- **OpenWeatherMap API**: For fetching real-time weather data.

---


