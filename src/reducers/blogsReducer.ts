import {AppThunk} from "../store/store";
import {API} from "../API/Api";

const initState: InitStateBlogs = {
  blogs: []
}

export const blogReducer = (state= initState, action: BlogsReducerAT) => {
  switch (action.type) {
    case "BLOGS/SET_BLOGS":
      console.log(1)
      return {...state, blogs: action.blogs}
    default:
      return state
  }
}

export type InitStateBlogs = {
  blogs: BlogType[]
}

export type BlogType = {
  "id": string,
  "name": string,
  "description": string,
  "websiteUrl": string,
  "createdAt": string
}

export type BlogsReducerAT = ReturnType<typeof setBlogs>
export const setBlogs = (blogs: any) => ({type: 'BLOGS/SET_BLOGS', blogs} as const)

export const fetchBlogs = (): AppThunk => async dispatch => {
  try {
    const res = await API.getBlogs()
    dispatch(setBlogs(res.data.items))
  } catch (error: any) {
    console.log(error)
  }
}