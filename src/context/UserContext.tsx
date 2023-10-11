import { createContext, useState } from "react";

interface UserInfo {
    userId: string,
    username: string
}

interface UserContextType {
    userInfo: UserInfo,
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    resetUserContext: () => void;
}

export const UserContext = createContext<UserContextType>({
    userInfo: {
        userId: "",
        username: ""
    },
    setUserInfo: () => {},
    resetUserContext: () => {}
});

export default function UserContextProvider({children}: any) {
    const [userInfo, setUserInfo] = useState({userId: "", username: ""})

    const resetUserContext = () => {
        setUserInfo({userId: "", username: ""})
    }

    return (
        <UserContext.Provider value={{userInfo, setUserInfo, resetUserContext}}>
            {children}
        </UserContext.Provider>
    )
}