import Header from "@/components/header";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
    return <div className="p-8 px-16">
        <Header leftContent={<Link to={"/"}>Back to home</Link>}/>
        <Outlet/>
    </div>
}
