
import { useGetUserByTokenQuery, useRefreshAccessTokenMutation } from "@/redux/service/user-api";
import useUser from "@/stores/user-store";
import checkTokenExpiration from "@/utils/check-token-expiration";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";



const checkLogin  = async ()=>{
    const router = useRouter();
    if (typeof localStorage !== 'undefined') {

        const accessToken = localStorage.getItem("accessToken") as string;
        const refreshToken = localStorage.getItem("refreshToken") as string;

        if ( !accessToken && !refreshToken) 
        {
            console.log('login again')
            router.push("/authen/login")
        }
        else {
            const isAccessTokenExpired = checkTokenExpiration(accessToken); // true: token expired,
            const isRefreshTokenExpired = checkTokenExpiration(refreshToken); // refresh token expired
    
            const { user, setUser } = useUser();
    
            if ( !isAccessTokenExpired && !isRefreshTokenExpired && !user?.email)  // refresh user
            {
    
                console.log('refresh user');
                axios({
                    method: 'GET',
                    url:`${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/api/users/${refreshToken}`
                })
                .then(response =>{
                   setUser(response.data.message)
                })
                .catch(error =>{
                    console.log(error)
                })
                
            }
            else if (isAccessTokenExpired && !isRefreshTokenExpired) // refresh access token
            {
                try{
                    console.log('refresh access token');
    
                    const [refreshAccessToken] = useRefreshAccessTokenMutation();
                    refreshAccessToken(refreshToken).unwrap().
                    then((response)=>{
                        localStorage.setItem(
                            "accessToken",
                            String(response.message.accessToken)
                        );
                    })
                    .catch((error)=>{
                        throw error;
                    })
                }
                catch (error){
    
                }
    
                
            }
            else if (isAccessTokenExpired && isRefreshTokenExpired) // login again
            {
                console.log('login again')
                router.push("/authen/login")
            }
    
        }


       
    } 
    else {
        console.log("👉️ can't use localStorage")
    }
}

export default checkLogin;


