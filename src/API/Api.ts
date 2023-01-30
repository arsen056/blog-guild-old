import axios from "axios";

const instance = axios.create({
  baseURL: 'https://blogs-and-posts-ver2-dgfu.vercel.app/',
  withCredentials: true,
})

export const API = {
  getBlogs() {
    return instance.get('posts')
  }
}