import { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthProvider";




const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;