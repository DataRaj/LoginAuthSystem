import * as React from "react";

import { cn } from "@/lib/utils";
import { LucideProps } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface ForwardRefProps extends InputProps {
	className?: string;
	type?: string;
	Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

const Input = React.forwardRef<HTMLInputElement, ForwardRefProps>(
	({ className, type, Icon, ...props }, ref) => {
		return (
			<div className="relative mb-6">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Icon className="size-5 text-green-500" />
				</div>
				<input
					type={type}
					className={cn(
						"w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400 transition duration-200",
						className
					)}
					ref={ref}
					{...props}
				/>
			</div>
		);
	}
);
Input.displayName = "Input";

export { Input };
