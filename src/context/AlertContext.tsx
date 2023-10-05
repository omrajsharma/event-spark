import { createContext, useState } from 'react'
export const AlertContext = createContext({});

interface ShowAlertArg {
    message: string,
    type: "SUCCESS" | "ERROR" | "WARNING" | "INFO",
    duration?: number,
}

export default function AlertContextProvider({children} : any) {
    const [displayAlert, setDisplayAlert] = useState(false);
    const [properties, setProperties] = useState({});

    const showAlert = (
        args: ShowAlertArg
    ) => {
        setDisplayAlert(true)
        setProperties({
            message: args.message,
            type: args.type,
        })

        setTimeout(() => {
            setDisplayAlert(false)
            setProperties({})
        }, (args.duration ? args.duration : 2000) )
    }

    return (
        <AlertContext.Provider value={{showAlert, displayAlert, properties, setDisplayAlert}}>
            {children}
        </AlertContext.Provider>
    )
}