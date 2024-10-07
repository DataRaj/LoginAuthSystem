import { account } from "@/appwrite/appwrite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import FormButton from "../ui/FormButton";
import { motion } from "framer-motion";
import FormTitle from "../ui/FormTitle";

interface User {
  name: string;
  email: string;
}

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        setUser(null);
      }
    })();
  }, []);

  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent form submission from reloading the page

    try {
      await account.deleteSession("current");
      toast.success("Logout successful");
      navigate("/login");  // Redirect to login after logout
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout failed", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80
       backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      <FormTitle content="Dashboard" />
      <div className="space-y-6">
        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Profile Information
          </h3>
          <p className="text-gray-300">Name: {user?.name}</p>
          <p className="text-gray-300">Email: {user?.email}</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4"
      >
        <form onSubmit={handleLogout}>
          <FormButton content="Logout" />
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Home;

/* 
import { account } from "@/appwrite/appwrite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import FormButton from "../ui/FormButton";
import { motion } from "framer-motion";
import FormTitle from "../ui/FormTitle";

interface User {
  name: string;
  email: string;
}

function Home() {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        setUser(null);
      }
    })();
  }, []);

  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent form submission from reloading the page

    try {
      await account.deleteSession("current");
      toast.success("Logout successful");
      navigate("/login");  // Redirect to login after logout
    } catch (error) {
      toast.error("Logout failed");
      console.error("Logout failed", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full mx-auto mt-10 p-8 bg-gray-900 bg-opacity-80
       backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
    >
      <FormTitle content="Dashboard" />
      <div className="space-y-6">
        <motion.div
          className="p-4 bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-green-400 mb-3">
            Profile Information
          </h3>
          <p className="text-gray-300">Name: {user?.name}</p>
          <p className="text-gray-300">Email: {user?.email}</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-4"
      >
        <form onSubmit={handleLogout}>
          <FormButton content="Logout" type="submit" />
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Home;

*/