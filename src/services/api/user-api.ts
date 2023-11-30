import CallAPI from "./call-api";
import IUser from "@/interfaces/user-interface";

const userRoutes = {
  login: "/api/users/login",
  signUp: "/api/users/sign-up",
  getUserByToken: "/api/users",
  refreshAccessToken: "/api/users/refresh-access-token",

};

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
}
