import Login from "./components/login/Login";
import SingUp from "./components/signup/SignUp";
import "./App.css";
import Home from "./components/home/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectRoute/ProtectedRoute";
import ProtectLoginRoute from "./ProtectRoute/ProtectLoginRoute";
import FloatingShape from "./components/ui/FloatingShape";

function App() {
	return (

		<Router>
		<div
		className="min-h-screen 
		bg-gradient-to-br 
		 from-red-950 via-rose-900 to-pink-950
		flex items-center justify-center relative overflow-hidden"
    >
    <FloatingShape
        color="bg-red-500"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-lime-500"
        size="w-32 h-32"
        top="40%"
        left="-10%"
        delay={2}
      />
			<Routes>
				<Route>
					<Route
						path="/login"
						element={
							<ProtectLoginRoute>
								<Login />
							</ProtectLoginRoute>
						}
					/>
					<Route path="/signup" element={<SingUp />} />
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<Home />
							</ProtectedRoute>
						}
					/>
				</Route>
			</Routes>
	</div>
		</Router>
	);
}

export default App;
