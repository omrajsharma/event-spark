import { createContext, useState } from "react";

interface UserInfo {
    userId: string,
    username: string,
    name: string,
    email: string,
}

interface UserContextType {
    userInfo: UserInfo,
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
    resetUserContext: () => void;
    isUserInfo: () => boolean;
}

export const UserContext = createContext<UserContextType>({
    userInfo: {
        userId: "",
        username: "",
        name: "",
        email: "",
    },
    setUserInfo: () => {},
    resetUserContext: () => {},
    isUserInfo: () => false,
});

export default function UserContextProvider({children}: any) {
    const [userInfo, setUserInfo] = useState({userId: "", username: "", name: "", email: ""})

    const resetUserContext = () => {
        setUserInfo({userId: "", username: "", name: "", email: ""})
    }

    const isUserInfo = () => {
        if (userInfo.userId.length > 0 && userInfo.username.length > 0) 
            return true
        return false
    }

    return (
        <UserContext.Provider value={{userInfo, setUserInfo, resetUserContext, isUserInfo}}>
            {children}
        </UserContext.Provider>
    )
}