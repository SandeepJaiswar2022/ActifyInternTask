#  React, Springboot Actify APP

This is a basic web application built using React for the frontend and Spring Boot for the backend(only few endpoints to interact with database).The frontend is responsive, supporting both mobile and desktop views.

## Features
- **Frontend**: Built with React, using `react-router-dom` for routing, `redux-toolkit` for state management, and `axios` for API calls.

1. `Sorting : based on User name(Ascending or descending)`
2. `Searching : Search by city`
3. `Pagination : navigate to specific page`
3. `Form Validation : using react hook form`
4. `Excel data download : filter and download the data in excel file`

- **Backend**: Developed with Spring Boot to handle REST API requests and manage database operations.
- **Responsive Design**: Fully responsive for mobile and desktop devices. Screenshots below showcase the difference between mobile and desktop views.

### Screen Shots
1. Desktop
   a.Home
   b.Form
   c.Table
2. Mobile(Small Devices)

## Installation and Setup

### Prerequisites
- Node.js (v16+)
- Java (v17+)
- MySQL or any compatible database

### Frontend (React)
1. Navigate to the React project folder:
  
   cd FrontEnd_Actify_React_Intern_Task

2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev

4. The app will be available at http://localhost:5173.

### BackEnd (SpringBoot)

1. Navigate to the Spring Boot project folder:

cd springbootfile

2. Build the project:
./mvn clean install

3. Run the application:
java -jar target/BackEnd_BasicRestEndPoints_Actify-0.0.1-SNAPSHOT.jar

4. The backend will be available at http://localhost:8080.












