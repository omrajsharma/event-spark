import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const AppAlert = () => {
    const {showAlert} = useContext(AlertContext);
    return {showAlert};
};

export default AppAlert;