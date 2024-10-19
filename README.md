# Ken Caringal Portfolio Web App

## Description
This project is a portfolio web application built using Vue.js. It includes various sections like **Dashboard**, **Profile**, **Portfolio Showcase**, **Contact**, and **Creative**. The application features a login page, and only authenticated users can access the dashboard and other secure sections. It utilizes a responsive layout with a sidebar and a footer, and Bootstrap Icons for UI components.

---

## Installation




To set up and run this project locally, follow these steps:

### 1. Clone the repository

git clone "URL Of This Project"

### 2. Install Dependencies
Navigate to the project directory and install the necessary packages using npm:

cd <your-project-directory>
npm install

### 3. Install Bootstrap Icons
In addition to the default dependencies, install Bootstrap Icons:


npm install bootstrap-icons

### 4. Import Bootstrap Icons
Open main.js and import Bootstrap Icons into your project

import 'bootstrap-icons/font/bootstrap-icons.css';

## Project Structure
App.vue - The root component that structures the application layout, including the sidebar and footer.

AppFooter.vue - A simple footer component that stays at the bottom of the page, including copyright information.

AppSidebar.vue - A sidebar component with navigation links for different sections like Dashboard, Profile, Portfolio Showcase, and more.

DashboardLayout.vue - The layout for pages inside the dashboard, wrapping the content with the sidebar and footer.

LoginPage.vue - The login page, which includes form validation and handles redirection to the dashboard upon successful login.

HomePage.vue - The home/dashboard page displaying key statistics in cards.

ProfilePage.vue, PortFolio.vue, ConTact.vue, CreaTive.vue - Separate pages for profile, portfolio, contact information, and creative works.

## Routing Setup

Routing is defined in index.js with routes for the following components:

/ - LoginPage.vue
/dashboard - DashboardLayout.vue with child routes for:
/dashboard - HomePage.vue
/dashboard/profile - ProfilePage.vue
/dashboard/portfolio - PortFolio.vue
/dashboard/contact - ConTact.vue
/dashboard/creative - CreaTive.vue
The project uses dynamic imports to load the components when needed.

## Runing the project
After completing the installation steps:
Run the following command to start the development server:

npm run serve

Open the application in your browser at http://localhost:8080/.

## Login Credentials

The login system uses hard-coded credentials. Use the following to access the dashboard:

Username: ken
Password: 2024


## Technologies Used
Vue.js - JavaScript framework for building user interfaces.
Bootstrap - CSS framework for responsive design.
Bootstrap Icons - Icons used for navigation and actions.
Flexbox - Used for layout design, ensuring responsiveness across the app.



