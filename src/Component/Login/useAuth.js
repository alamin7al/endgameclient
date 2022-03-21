import { useContext } from "react";
import { Authcon } from "./AuthProvider";

// import { AuthContext } from "./AuthProvider";



const useAuth = () => {
  const auth = useContext(Authcon)
  return auth
};

export default useAuth;