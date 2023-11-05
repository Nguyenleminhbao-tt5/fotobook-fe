import { axiosBaseQuery } from "@/utils/axios-base-query";
import { createApi } from "@reduxjs/toolkit/query/react";





export  const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: axiosBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/api/users`
    }),
    endpoints: build =>({
        
    })
})