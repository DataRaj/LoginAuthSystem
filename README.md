# GitHub profile search with auth system using appwrite as backend service

This React application demonstrates user authentication using Appwrite with React and TypeScript. The project includes features like User login, User signup, profile management, and protected routes to ensure only authenticated users can access certain parts of the application. The application utilizes Formik for form handling and Yup for form validation.

```React
├── src
│   ├── components
│   │   ├── login
│   │   │   └── Login.tsx
│   │   ├── signup
│   │   │   └── SignUp.tsx
│   │   ├── home
│   │   │   └── Home.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── appwrite
│   │       ├──appwrite.ts
│   │       └── auth.ts
│   ├── ProtectRoute
│   │       ├──ProtectRoute.tsx
│   │       └── protectedLoginRoute.tsx
│   ├── validation
│   │   └── ValidationSchema.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── package.json
├── README.md
└── tsconfig.json

```
## Technologies Used
- React
- TypeScript
- Tailwind CSS
- shadcn
- Appwrite
- TanStack Query 
- Formik
- Yup
  
# Getting Started
**Prerequisites**
- Node.js
- npm or yarn
- Appwrite server setup
  
**Installation**
- Clone the repository:
``` react
git clone https://github.com/your-username/auth-system.git
cd auth-system
```
- Install dependencies:
 ```
npm install
```
- Set up environment variables:
Create a .env file in the root directory and add your Appwrite project configuration:
```
VITE_APPWRITE_ENDPOINT=http://localhost/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```
- Running the Application To start the application in development mode:
```
npm run dev
```
Open your browser and navigate to [http://localhost:5173](http://localhost:5173).


