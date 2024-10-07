import { Input } from "@/components/ui/input";
import { useFormik } from "formik";
import SignupSchema from "@/Validation/ValidationSchema";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Register } from "@/appwrite/Auth";
import { Lock, Mail, User } from "lucide-react";
import { motion } from "framer-motion";
import FormTitle from "../ui/FormTitle";
import FormFooter from "../ui/FormFooter";
import FormButton from "../ui/FormButton";
// import PasswordStrengthMeter from "../ui/passwordStrengthMeter";

function SignUp() {
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmpassword: "",
		},
		validationSchema: SignupSchema,
		onSubmit: async (values) => {
			const registerpromise = Register(values.email, values.password, values.firstName);

			toast.promise(registerpromise, {
				loading: "Registering user ...",
				error: "Ragistration failed",
				success: "Register successful",
			});

			try {
				await registerpromise;
				navigate("/");
			} catch (error) {
				console.error("Error register in:", error);
			}
		},
	});



	return (
		<motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
		<div className="p-8">
			<FormTitle content="REGISTER"/>

			<form onSubmit={formik.handleSubmit}>
				<Input
				Icon={User}
				type="text" 
				placeholder="Enter First Name" 
				id="firstName" {...formik.getFieldProps("firstName")} />

				{formik.touched.firstName && formik.errors.firstName ? <div className="text-red-600">{formik.errors.firstName}</div> : null}
				<Input 
				Icon={User}
				type="text" 
				placeholder="Enter Last Name" 
				id="lastName" {...formik.getFieldProps("lastName")} />
				{formik.touched.lastName && formik.errors.lastName ? <div className="text-red-600">{formik.errors.lastName}</div> : null}

				<Input
				Icon={Mail}
				type="email" 
				placeholder="Enter email" 
				id="email" {...formik.getFieldProps("email")} />
				{formik.touched.email && formik.errors.email ? <div className="text-red-600">{formik.errors.email}</div> : null}

				<Input
				Icon={Lock}
				type="password" 
				placeholder="Enter password" 
				id="password" 
				{...formik.getFieldProps("password")} />
				{formik.touched.password && formik.errors.password ? <div className="text-red-600">{formik.errors.password}</div> : null}
				{/* <PasswordStrengthMeter password={formik.touched.password} */}
				<Input
				Icon={Lock}
				type="password" 
				placeholder="confirm password" 
				id="confirmpassword" {...formik.getFieldProps("confirmpassword")} />
				{formik.touched.confirmpassword && formik.errors.confirmpassword ? <div className="text-red-600">{formik.errors.confirmpassword}</div> : null}
				<FormButton content="SignUp" />
				
			</form>
		</div>
		<FormFooter
				question={`Already have an account?`}
				path="/login"
				linkContent="Login"
				/>
    </motion.div>
	);
}

export default SignUp;
