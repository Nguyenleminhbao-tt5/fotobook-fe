'use client'

import checkTokenExpiration from "@/utils/check-token-expiration";
import UserService from "./api/user-api";
import IUser from "@/interfaces/user-interface";


const getUser  = async ()=>{
    if (typeof localStorage !== 'undefined') {

        const accessToken = localStorage.getItem("accessToken") as string;
        const refreshToken = localStorage.getItem("refreshToken") as string;


        if (accessToken && refreshToken)
        {
            const isAccessTokenExpired = checkTokenExpiration(accessToken); // true: token expired,
            const isRefreshTokenExpired = checkTokenExpiration(refreshToken); // refresh token expired
            
            if ( !isAccessTokenExpired && !isRefreshTokenExpired )  // get user
            {
               
                try{
                    console.log('Get user');
                    const response = await UserService.getUserByToken(refreshToken);
                    if (response && response.type=="Success")
                    {
                        return response.message ;
                    }
                }
                catch(err)
                {
                    throw err;
                }
            }
        }
       
    } 
    else {
        console.log("👉️ can't use localStorage")
    }
}

export default getUser;


