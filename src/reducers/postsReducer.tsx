import {AppThunk} from "../store/store";
import {API} from "../API/Api";
import {setBlogs} from "./blogsReducer";

const initState: postsStateType = {
  posts: [],
  totalCount: 0,
}

export type postsStateType = {
  posts: PostType[]
  totalCount: number
}

export const postsReducer = (state= initState, action: PostsActionType) => {
  switch (action.type) {
    case "POSTS/SET_POSTS":
      return {...state, posts: action.posts}
    default:
      return state
  }
}

export type PostType = {
  id: string,
  blogId: string
  content: string,
  shortDescription: string,
  title: string,
  blogName: string,
  createdAt: string
}

export type PostsActionType = ReturnType<typeof setPosts>

export const setPosts = (posts: [], totalCount: number) => ({type: 'POSTS/SET_POSTS', posts, totalCount} as const)

export const fetchPostsForBlogs = (id: string): AppThunk => async dispatch => {
  try {
    const res = await API.getPostsForBlogs(id);
    dispatch(setPosts(res.data.items, res.data.totalCount))
  } catch (error: any) {
    console.log(error)
  }
}