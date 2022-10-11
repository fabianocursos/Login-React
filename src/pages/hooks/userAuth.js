import { userContext } from "react";
import { AuthContext } from "../contexts/auth";

const useAuth = () =>{
    const context = userContext(AuthContext);

    return context;

};

export default useAuth;
