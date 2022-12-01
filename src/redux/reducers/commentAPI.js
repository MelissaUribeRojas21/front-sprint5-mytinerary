import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import baseURL from '../../url'

export const commentsAPI = createApi({
    reducerPath: "commentsAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL
    }),
    endpoints: (builder) => ({
        createComments: builder.mutation({
            query: (comment) => ({
                url: `/api/comments`,
                method: 'POST',
                body: comment,
                headers:{"Authorization": "Bearer " + localStorage.getItem("token")}
            })
        }),

        getShowComments: builder.mutation({
            query: (id) => ({
                url: `/api/comments?showId=${id}`,
                method: "GET"
            })
        }),
    })
    })

    export default commentsAPI
    export const {
        useCreateCommentsMutation,
        useGetShowCommentsMutation,
    } = commentsAPI


