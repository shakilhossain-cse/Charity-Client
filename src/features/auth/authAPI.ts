import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { Pokemon } from './types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://frozen-scrubland-97783.herokuapp.com/api/v1/auth' }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { email: string, password: string }) => {
        return {
          url: '/login',
          method: 'POST',
          body
        }
      },
    }),
  }),
})

export const { useLoginUserMutation } = authApi
