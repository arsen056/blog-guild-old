import React, {useEffect, useState} from 'react';
import {SuperInputText} from "./SuperInputText/SuperInputText";
import {addBlog, BlogType} from "../reducers/blogsReducer";
import {AppDispatch} from "../store/store";
import {API} from "../API/Api";
import {Box, TextField} from "@mui/material";

export const AddBlog = () => {
  const dispatch = AppDispatch()
  const [blogName, setBlogName] = useState<string>('')
  const blogNameOnChange = (blogName: string) => {
    setBlogName(blogName)
  }

  const [webSite, setWebSite] = useState<string>('')
  const webSiteOnChange = (webSite: string) => {
    setWebSite(webSite)
  }

  const [blogDescription, setBlogDescription] = useState<string>('')
  const blogDescriptionOnChange = (blogDescription: string) => {
    setBlogDescription(blogDescription)
  }

  const addBlogHandler = () => {
    const blog: BlogType = {id: '', name: blogName, websiteUrl: webSite, description: blogDescription, createdAt: ''}
    dispatch(addBlog(blog))
  }

  return (
    <Box component={'div'}>

      <TextField id="blog-name" name={'blogName'} label="Blog name" variant="standard" />


      <SuperInputText value={webSite} name={'webSite'} onChangeText={webSiteOnChange}/>



      <SuperInputText value={blogDescription} name={'blogDescription'} onChangeText={blogDescriptionOnChange}/>

      <button onClick={addBlogHandler}>Add blog</button>
    </Box>
  );
};
