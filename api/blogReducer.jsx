import { blogSlice } from '@api/blogSlice'
import {
    createSlice,
    // createEntityAdapter,
    createSelector,
    createAsyncThunk
} from '@reduxjs/toolkit'

// export const fetchBlogs = createAsyncThunk('posts/fetchBlogs', async () => {
//     const response = await fetch('/api/blogs')
//     return response.data
// })

const blogReducer = createSlice({
    name: 'blogs',
    initialState: {
      blogs: []
    },
    reducers: {
    },
    // extraReducers(builder) {
    //     builder
    //     .addCase(fetchBlogs.fulfilled, (state, action) => {
    //         state.blogs.push(action.payload)
    //     })
    // }
})

export const selectBlogsResult = blogSlice.endpoints.getBlogs.select()

export const selectAllBlogs = createSelector(
  selectBlogsResult,
  result => result?.data ?? []
)

export default blogReducer.reducer