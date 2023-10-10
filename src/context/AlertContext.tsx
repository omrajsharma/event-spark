// AlertContext.tsx
import { createContext, useState } from 'react';

interface AlertOptions {
  message?: string;
  type?: "SUCCESS" | "ERROR" | "WARNING" | "INFO";
  duration?: number;
}

export interface AlertContextType {
  showAlert?: (args: AlertOptions) => void;
  displayAlert?: boolean;
  properties?: AlertOptions;
  setDisplayAlert?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertContext = createContext<AlertContextType>({
  showAlert: () => null,
  displayAlert: false,
  properties: {
    message: "",
    type: "ERROR",
    duration: 2000
  }

});

export default function AlertContextProvider({ children }: any) {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [properties, setProperties] = useState<AlertOptions>({});

  const showAlert = (args: AlertOptions) => {
    setDisplayAlert(true);
    setProperties({
      message: args.message,
      type: args.type,
      duration: args.duration,
    });

    setTimeout(() => {
      setDisplayAlert(false);
      setProperties({});
    }, args.duration ? args.duration : 2000);
  };

  return (
    <AlertContext.Provider value={{ showAlert, displayAlert, properties, setDisplayAlert }}>
      {children}
    </AlertContext.Provider>
  );
}