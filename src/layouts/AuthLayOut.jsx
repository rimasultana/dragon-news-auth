import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayOut = () => {
    return (
        <div className="bg-[#F3F3F3]">
           <header className="w-11/12 mx-auto py-5 ">
            <Navbar/>
           </header>
            <Outlet/>
        </div>
    );
};

export default AuthLayOut;