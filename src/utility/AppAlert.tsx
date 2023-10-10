import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const AppAlert = () => {
    const {displayAlert, properties, showAlert } = useContext(AlertContext);
    return {displayAlert, properties, showAlert};
};

export default AppAlert;