import axios from "axios";

const instance = axios.create({
  baseURL: 'https://ht-02-03.vercel.app/api/',
})

export const API = {
  getBlogs() {
    return instance.get('blogs')
  }
}