import CallAPI from "./call-api";
import IPost from "@/interfaces/post-interface";

const postRoutes= {
    getAllPost: '/api/posts',
    getPost: '/api/posts', // + post_id
    liked: '/api/posts/like',
}

let headersPost: object={}; 

if (typeof localStorage !== 'undefined') {
    let accessToken = localStorage.getItem("accessToken") as string;
    headersPost = {'Authorization': `Bearer ${accessToken}`}
} 
else {
    console.log("👉️ can't use localStorage")
}

export default class PostService {
    static getAllPost = async()=>{
        try{
            const config= {
                headers: {
                    ...headersPost
                }
            }
            const response = await CallAPI.call(postRoutes.getAllPost,{
                method:'GET',
                ...config
            })
            return response
        }
        catch(err){
            throw err;
        }
    }

    static getPost = async(post_id:string)=>{
        try{
            const config= {
                headers: {
                    ...headersPost
                },
            }
            const response = await CallAPI.call(`${postRoutes.getPost}/${post_id}`,{
                method: 'GET',
                ...config
            })
        }
        catch(err){
            throw err;
        }
    }

    static liked = async(post_id:string)=>{
        try{
            const config= {
                headers: {
                    ...headersPost
                },
                data: {post_id}
            }
            const response = await CallAPI.call(postRoutes.liked,{
                method: 'POST',
                ...config
            })
        }
        catch(err){
            throw err;
        }
    }
}