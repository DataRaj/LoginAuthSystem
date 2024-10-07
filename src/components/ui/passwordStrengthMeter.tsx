import { Check, X } from "lucide-react";
import {
  PasswordCheckProps,
  PasswordLengthStrength,
  PasswordStrengthColor,
} from "../../types/type";
import { motion } from "framer-motion";
export const PasswordCriteria = ({ password }: PasswordCheckProps) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item, index) => {
        return (
          <div key={index} className="flex items-center text-xs">
            {item.met ? (
              <Check className="size-4 text-green-500 mr-2" />
            ) : (
              <X className="size-4 text-gray-500 mr-2" />
            )}
            <span className={item.met ? "text-green-500" : "text-gray-500"}>
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};
const PasswordStrengthMeter = ({ password }: PasswordCheckProps) => {
  const getStrength = (pass: string): number => {
    let strength = 0;
    if (pass.length > 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^A-Za-z0-9]/)) strength++;
    return strength;
  };

  const getStrengthTextAndColor = (
    strength: number
  ): { text: PasswordLengthStrength; color: PasswordStrengthColor } => {
    if (strength === 0) return { text: "Very Weak", color: "bg-red-500" };
    if (strength === 1) return { text: "Weak", color: "bg-red-400" };
    if (strength === 2) return { text: "Fair", color: "bg-yellow-500" };
    if (strength === 3) return { text: "Good", color: "bg-yellow-400" };
    return { text: "Strong", color: "bg-green-500" };
  };
  const strength = getStrength(password);
  return (
    <div className="mt-2 ">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-400">Password strength: </span>
        <span className="text-xs text-gray-400">
          {getStrengthTextAndColor(strength).text}
        </span>
      </div>
      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-700
                ${
                  index < strength
                    ? getStrengthTextAndColor(strength).color
                    : "bg-gray-600"
                }
                `}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
