import Header from "@/components/header";
import Button from "@/components/ui/button";
import { userContext } from "@/context/userContext";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function FeedLayout() {
    const navigate = useNavigate();
    const {id, resetUser} = useContext(userContext)
    const handleSession = () => {
      if (id) {
        resetUser()
      }
      navigate("/auth/signin")
    }
  return (
    <div className="p-8 px-16">
      <Header
        leftContent={
          <div className="flex gap-2.5 cursor-pointer"
          onClick={handleSession}
          >
            <p className="text-sm font-medium">{id ? "Logout" : "Login"}</p>
            <Button.Icon>
              <img
                src="https://cdn.pixelbin.io/v2/damp-resonance-90df08/original/superflight/login.svg"
                alt="login"
              />
            </Button.Icon>
          </div>
        }
      />
      <Outlet />
    </div>
  );
}
