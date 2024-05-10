import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from '@api/apiSlice'
import blogReducer from '@api/blogReducer'

export default configureStore({
    reducer: {
        blogs: blogReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})