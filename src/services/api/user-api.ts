import CallAPI from "./call-api";
import IUser from "@/interfaces/user-interface";

const userRoutes = {
  login: "/api/users/login",
  signUp: "/api/users/sign-up",
  getUserByToken: "/api/users",
  refreshAccessToken: "/api/users/refresh-access-token",
  follow:'/api/users/follow',
  getFollower: '/api/users/follower',
  getFollowing: '/api/users/following',

};

let headersPost: object={}; 

if (typeof localStorage !== 'undefined') {
    let accessToken = localStorage.getItem("accessToken") as string;
    headersPost = {'Authorization': `Bearer ${accessToken}`}
} 
else {
    console.log("👉️ can't use localStorage")
}

export default class UserService {
    static login = async (email: string, password: string) => {
    try{
        let config: Object = {
            data: { email, password },
          };
        let response = await CallAPI.call(userRoutes.login, {
            method: "POST",
            ...config,
          });
        return response ;
    }
    catch (error){
        throw error;
    }

    };

    static signUp = async ({ firstName, lastName, email, password, dob, sex }: IUser) => {
    try {
        const config = {
            data: { firstName, lastName, email, password, dob, sex },
          };
        let response = await CallAPI.call(userRoutes.signUp, {
            method: "POST",
            ...config,
        });
        return response;
    } 
    catch (error) {
        throw error;
    }
    };

    static getUserByToken = async (token: string) => {
        try{
            const response = await CallAPI.call(`${userRoutes.getUserByToken}/${token}`,{
                method: "GET"
            });

            return response;
        }
        catch (error) {
            throw error;
        }
    }

    static refreshAccessToken = async (refreshToken: string) => {
       
        try{
            const config = {
                data: {refreshToken}
            }
            const response = await CallAPI.call(userRoutes.refreshAccessToken,{
                method: "POST",
                ...config
            })

            return response;
        }
        catch (error) {
            throw error;
        }


    }

    static follow = async (follower_id: string)=>{
        try{
            const config = {
                data: {follower_id}
            }

            const response = await CallAPI.call(userRoutes.follow,{
                method:'POST',
                ...config
            })
            return response;
        }
        catch (error) {
            throw error;
        }
    }

    static getFollower = async ()=>{
        try{
            const config = {
                headers: {
                    ...headersPost
                }
            }

            const response = await CallAPI.call(userRoutes.getFollower,{
                method:'GET',
                ...config
            })
            return response;
        }
        catch (error) {
            throw error;
        }
    }

    static getFollowing = async ()=>{
        try{
            const config = {
                headers: headersPost
            }

            const response = await CallAPI.call(userRoutes.getFollowing,{
                method:'GET',
                ...config
            })
            return response;
        }
        catch (error) {
            throw error;
        }
    }
}
