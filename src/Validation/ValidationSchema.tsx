import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),

	password: Yup.string()
		.required("Password is Required")
		.min(5, "Your password is too short.")
		.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
	confirmpassword: Yup.string()
		.oneOf([Yup.ref("password")], "Passwords must match")
		.required("Required"),
});
export default SignupSchema;

export const LoginSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),

	password: Yup.string()
		.required("Password is Required")
		.min(5, "Your password is too short.")
		.matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const GithubUsernameSchema = Yup.object().shape({
	username: Yup.string()
		.trim()
		.required("Username is required")
		.matches(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, underscores, and hyphens")
		.min(3, "Username must be at least 3 characters long")
		.max(39, "Username cannot exceed 39 characters"),
});
