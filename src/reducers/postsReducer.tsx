import {AppThunk} from "../store/store";
import {API} from "../API/Api";
import {appSetStatus} from "./appReducer";

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
      return {...state, posts: action.posts, totalCount: action.totalCount}
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

export const setPosts = (posts: PostType[], totalCount: number) => ({type: 'POSTS/SET_POSTS', posts, totalCount} as const)

export const fetchPostsForBlogs = (id: string): AppThunk => async dispatch => {
  try {
    dispatch(appSetStatus('loading'))
    const res = await API.getPostsForBlogs(id);
    dispatch(setPosts(res.data.items, res.data.totalCount))
  } catch (error: any) {
    console.log(error)
  } finally {
    dispatch(appSetStatus('success'))
  }
}

export const getPosts = (): AppThunk => async dispatch => {
  try {
    dispatch(appSetStatus('loading'))
    const res = await API.getPosts();
    dispatch(setPosts(res.data.items, res.data.totalCount))
  } catch (error: any) {
    console.log(error)
  } finally {
    dispatch(appSetStatus('success'))
  }
}


export const getPostByID = (postID: string): AppThunk => async dispatch => {
  try {
    const res = await API.getPostByID(postID);
    dispatch(setPosts([res.data], 2))
  } catch (error: any) {
    console.log(error)
  }
}

