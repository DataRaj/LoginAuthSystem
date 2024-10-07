import { account } from "@/appwrite/appwrite";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

// type ProtectedRouteProps = PropsWithChildren;
interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }): React.ReactNode => {
	// function ProtectedRoute({ children }: ProtectedRouteProps) {

	const [isAuthenticated, setAuthenticated] = useState<boolean | null>(null);

	useEffect(() => {
		(async () => {
			try {
				await account.get();
				setAuthenticated(true);
			} catch (e) {
				setAuthenticated(false);
			}
		})();
	}, []);

	if (isAuthenticated === null) return <div>Loading...</div>;

	return isAuthenticated ? <>{children}</> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
