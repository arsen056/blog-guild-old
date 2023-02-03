import axios from "axios";

const instance = axios.create({
  baseURL: 'https://blogs-and-posts-ver2-dgfu.vercel.app/',
})

export const API = {
  auth(){
    return instance.post('auth/login', {
      loginOrEmail: "SuperAdmin",
      password: "SuperAdmin"
    })
  },
  me() {
    return instance.get('auth/me')
  },
  getBlogs() {
    return instance.get('blogs')
  },
  getBlogByID(id: string) {
    return instance.get(`blogs/${id}`)
  },
  getPosts() {
    return instance.get(`posts`)
  },
  getPostsForBlogs(id: string) {
    return instance.get(`blogs/${id}/posts`)
  },
  getPostByID(postID: string) {
    return instance.get(`posts/${postID}`)
  }
}