import AuthBase from "@/components/auth";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { userContext } from "@/context/userContext";
import { useContext, useId, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
interface IRegisterProps {
  isModalView?: boolean;
  onSignin: () => void;
  onSuccessFull: () => void;
}
function Register ({isModalView, onSignin, onSuccessFull}: IRegisterProps) {
    const { updateUser } = useContext(userContext);
    const id = useId();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    repeatPassword: "",
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
    if (formData.password.trim() !== formData.password) {
        setError("please use same password")
        return
    }
    const userPayload = {
        id,
        profilePic: "https://avatar.iran.liara.run/public/69",
        name: "Some Random",
        email: formData.emailOrUsername,
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (userPayload) {
        updateUser(userPayload)
        if (isModalView) {
            onSuccessFull()
        }
        else {
            navigate("/")
        }
    }

  };
    return <div className="flex flex-col items-center mt-16">
        <AuthBase
        header={{
            title: "Create an account to continue",
            subtitle: "Create an account to access all the features on this app",
            icon: (
            <img src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/login.svg" />
          ),
        }}
        footer={
            <p className="text-[#00000099]">Already have an account? <Link className="text-primary" to={ isModalView ? "" : "/auth/signin"} onClick={() => {
              isModalView && onSignin()
            }}>Sign In</Link></p>
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

          <Input
            required
            name="repeatPassword"
            type="password"
            label="Repeat password"
            placeholder="Enter your password again"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            disabled={isLoading}
          />

          <Button type="submit" className="mt-6" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
        </AuthBase>
    </div>
}

export default Register;
