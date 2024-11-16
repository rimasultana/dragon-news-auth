/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
    const { user } = useContext(AuthContext);

    if (user && user.email) {
        return children; 
    }

    return <Navigate to={"/auth/login"}></Navigate>;
}
