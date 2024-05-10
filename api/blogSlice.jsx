import { apiSlice } from '../api/apiSlice'

export const blogSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBlogs: builder.query({
            query: () => '/blogs',
            // if has a blog update, refetch all blogs
            providesTags: (result = [], error, arg) => [
                'Blog', // the name of tag type and refetch all blogs after invalidation
                ...result.map(({ id }) => ({ type: 'Blog', id })) // after invalidate each individual blog cache and then update
            ]
        }),
        getBlog: builder.query({
            query: id => `/blogs/${id}`,
            providesTags: (result, error, arg) => [{ type: 'Blog', id: arg }] // after invalidate specific blog cache and then update
        }),
        addLike: builder.mutation({
            query: ({id}) => ({
                url: `blogs/${id}/like`,
                method: 'GET',
            }),
            // update cache data
            async onQueryStarted({id}, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    blogSlice.util.updateQueryData('getBlogs', undefined, draft => {
                    const blog = draft.find(blog => blog.id === id)
                    if (blog) {
                      blog.likes++
                    }
                  })
                )
                try {
                  await queryFulfilled
                } catch {
                  patchResult.undo()
                }
            }
            // invalidatesTags: ['Blog'] // invalidate all blogs cache
        }),
        // for the data update
        editBlog: builder.mutation({
            query: ({ id, data }) => ({
                url: `/blog/edit/${id}`,
                method: 'POST',
                body: data
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Blog', id: arg.id }] // invalidate specific blog cache
        })
    })
})

export const {
    useGetBlogsQuery,
    useGetBlogQuery,
    useAddLikeMutation,
    useEditBlogMutation
} = blogSlice


