import react, { useState, useEffect } from "react";
import axios from "axios";

const useUser = () => {
    const [User, setUser] = useState(undefined);

    useEffect(() => {
        getUserData();
    },[]); 

    const getUserData = async () => {
        try {
            const response = await axios.get(process.env.EXPO_PUBLIC_SERVER_ADDRESS+'/api/isAuthenticated');
            if (response.data.code == 0) {
                setUser({userId: response.data.userId});
            }

        } catch (error) {
            console.error("Error occurred during login:", error);
        }
    }

    const loginUser = async (data) => {
        try {
            const response = await axios.post(process.env.EXPO_PUBLIC_SERVER_ADDRESS+'/api/login', {
                email: data.email,
                password: data.password
            });
            console.log("Login successful:", response.data);
            if (response.data.code == 0) {
                setUser({userId: response.data.useruserId});
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
        }
    }

    const logoutUser = async () => {
        try {
            const response = await axios.get(process.env.EXPO_PUBLIC_SERVER_ADDRESS+'/api/logout');
            if (response.code == 0){
                setUser({userId: -1});
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
        }
    }
    
    const signupUser = async (data) => {
        
    }

    const updateUser = async (data) => {
        switch(data.command){
            case "login":
                loginUser(data.data);
                break;
            case "logout":
                logoutUser();
                break;
            default:
                break;
        }
    };

    return [User, updateUser];
};

export default useUser;