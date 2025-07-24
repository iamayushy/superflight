import AuthBase from "@/components/auth";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { users } from "@/mock/users";
import { userContext } from "@/context/userContext";

interface ILoginProps {
  isModalView?: boolean;
  onSignup: () => void;
  onSuccessFull: () => void;
}
function Login({isModalView = false, onSignup, onSuccessFull}: ILoginProps) {
  const { updateUser } = useContext(userContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = users.find(
      (user) =>
        user.email === formData.emailOrUsername &&
        user.password === formData.password
    );
    if (user) {
      updateUser(user);
      if (isModalView) {
        onSuccessFull()
      }
      else {
      navigate("/");
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <AuthBase
        header={{
          title: "Sign in to continue",
          subtitle: "Sign in to access all the features on this app",
          icon: (
            <img src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/login.svg" />
          ),
        }}
        footer={
          <p className="text-[#00000099]">
            Do not have an account?{" "}
            <Link className="text-primary" to={ isModalView ? "" : "/auth/signup"} onClick={() => {
              isModalView && onSignup()
            }}>
              Sign Up
            </Link>
          </p>
        }
      >
        <form
          onSubmit={handleSubmit}
          className="px-12 pb-14 flex flex-col gap-3.5"
        >
          {error && (
            <div className="text-red-500 text-sm mb-2 p-2 bg-red-50 rounded">
              {error}
            </div>
          )}

          <Input
            required
            name="emailOrUsername"
            label="Email or username"
            type="email"
            placeholder="Enter your email or username"
            value={formData.emailOrUsername}
            onChange={handleInputChange}
            disabled={isLoading}
          />

          <Input
            required
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={isLoading}
          />

          <Button type="submit" className="mt-6" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </AuthBase>
    </div>
  );
}

export default Login;
