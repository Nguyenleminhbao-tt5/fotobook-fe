import { axiosBaseQuery } from "@/utils/axios-base-query";
import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


const accessToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InltbjJjMTRleHRpM3k1dnMzemJjZWtzMnVxOWpiZDgzIiwiaWF0IjoxNjk5MTQ1NTI4LCJleHAiOjE2OTkyMzE5Mjh9.h3-_sZ3k6htMbIx2Te4k8kDbiaYknQ7dGGKGahZ69PU";

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: axiosBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_DOMAIN_SERVER}/api/posts`
    }),
    endpoints: build => ({
        getAllPost: build.query<any,void> ({
            query: ()=>({
                url: `/`,
                method: 'GET', 
                headers: {'Authorization': `Bearer ${accessToken}`}
            })
        }),

        getPost: build.query<any, string> ({
            query: (post_id) => ({
                url: `/${post_id}`,
                method: 'GET',
                headers: {'Authorization': `Bearer ${accessToken}`}
            })
        }),

        liked: build.mutation<any, string> ({
            query: (post_id) => ({
                url: '/like',
                method: 'POST',
                data: {
                    post_id
                },
                headers: {'Authorization': `Bearer ${accessToken}`}
            })

        })

        
        

      
    })
})

export const {useGetAllPostQuery, useGetPostQuery, useLikedMutation} = postApi;