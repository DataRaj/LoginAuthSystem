import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/Validation/ValidationSchema";
import { useFormik } from "formik";
import { SignIn } from "@/appwrite/Auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
import FormTitle from "../ui/FormTitle";
import { motion } from "framer-motion";
import FormFooter from "../ui/FormFooter";
import FormButton from "../ui/FormButton";
function Login() {
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: async (values) => {
			const login = SignIn(values.email, values.password);
			toast.promise(login, {
				loading: " Logging in ...",
				success: "login successful",
				error: "Error",
			});

			try {
				await login;
				navigate("/");
			} catch (error) {
				console.error("Error logging in:", error);
			}
		},
	});

	return (
		<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5 }}
		className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
		>
		<div className="p-8">
		<FormTitle content="Welcome Back" />
			<form onSubmit={formik.handleSubmit}>

				<Input
				Icon={Mail}
				type="email" placeholder="Enter email" id="email" {...formik.getFieldProps("email")} />
				{formik.touched.email && formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}
				<Input
				Icon={Lock}
				type="password" placeholder="Enter password" id="password" {...formik.getFieldProps("password")} />
				{formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}
				{/* Login button */}
				<FormButton content="Login"/>
			</form>
		</div>
		<FormFooter
        question={`Don't have an account?`}
        path="/signup"
        linkContent="Sign Up"
      />
	</motion.div>
	);
}

export default Login;
