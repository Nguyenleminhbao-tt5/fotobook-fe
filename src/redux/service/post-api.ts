import { axiosBaseQuery } from "@/utils/axios-base-query";
import { createApi } from "@reduxjs/toolkit/dist/query";
import build from "next/dist/build";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: axiosBaseQuery({
        baseUrl: "http://localhost/3001/"
    }),
    endpoints: build => ({
        
    })
})