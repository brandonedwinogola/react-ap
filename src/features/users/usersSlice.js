import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    setUserList: (state, action) => {
      state.users = action.payload;
    },
  },
});

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:3001' });

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery,
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users',
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...user }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;

export const { setUserList } = usersSlice.actions;

export default usersSlice.reducer;
