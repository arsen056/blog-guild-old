import {AppThunk} from "../store/store";
import {API} from "../API/Api";

const initState: InitStateBlogs = {
  blogs: [],
}

export const blogReducer = (state= initState, action: BlogsReducerAT) => {
  switch (action.type) {
    case "BLOGS/SET_BLOGS":
      return {...state, blogs: action.blogs}
    case "BLOGS/SET_OPENED_BLOG":
      return {...state, openedBlog: action.blog}
    default:
      return state
  }
}

export type InitStateBlogs = {
  blogs: BlogType[]
}

export type BlogType = {
  id: string,
  name: string,
  description: string,
  websiteUrl: string,
  createdAt: string,
}

export type BlogsReducerAT = ReturnType<typeof setBlogs> | ReturnType<typeof setOpenedBlog>
export const setBlogs = (blogs: BlogType[]) => ({type: 'BLOGS/SET_BLOGS', blogs} as const)
export const setOpenedBlog = (blog: BlogType) => ({type: 'BLOGS/SET_OPENED_BLOG', blog} as const)

export const fetchBlogs = (): AppThunk => async dispatch => {
  try {
    const res = await API.getBlogs()
    dispatch(setBlogs(res.data.items))
  } catch (error: any) {
    console.log(error)
  }
}

export const fetchBlogByID = (id: string): AppThunk => async dispatch => {
  try {
    const res = await API.getBlogByID(id)
    dispatch(setBlogs([res.data]))

  } catch (error: any) {
    console.log(error)
  }
}