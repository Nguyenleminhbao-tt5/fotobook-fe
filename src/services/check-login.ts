import { useRouter } from "next/navigation";

const checkLogin  = ()=>{
    const router = useRouter();
    if (typeof localStorage !== 'undefined') {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) router.push("/authen/login");
    } 
    else {
        console.log("👉️ can't use localStorage")
    }
}

export default checkLogin;