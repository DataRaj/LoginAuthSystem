import { Link } from "react-router-dom";
import { FormFooterProps } from "../../types/type";
const FormFooter = ({ question, path, linkContent }: FormFooterProps) => {
  return (
    <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
      <p className="text-sm text-gray-400">
        {question}{" "}
        <Link className="text-green-400 hover:underline" to={path}>
          {linkContent}
        </Link>
      </p>
    </div>
  );
};

export default FormFooter;
