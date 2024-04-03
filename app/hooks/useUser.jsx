import react, { useState, useEffect } from "react";
import axios from "axios";

const useUser = () => {
    const [User, setUser] = useState(undefined);

    useEffect(() => {
        getUserData();
    },[]); 

    const getUserData = async () => {

    }

    const loginUser = async (data) => {
        try {
            console.log(process.env.EXPO_SERVER_ADRESS);
            const response = await axios.post(process.env.EXPO_SERVER_ADRESS+'/api/login', {
                email: data.email,
                password: data.password
            });
            console.log("Login successful:", response.data);
        } catch (error) {
            console.error("Error occurred during login:", error);
        }
        console.log("response");

    }
    
    const signupUser = async (data) => {
        
    }

    const updateUser = async (data) => {
        switch(data.command){
            case "login":
                loginUser(data.data);
                break;
                
            default:
                break;
        }
    };

    return [User, updateUser];
};

export default useUser;