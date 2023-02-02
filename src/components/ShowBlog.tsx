import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {BlogType, fetchBlogByID} from "../reducers/blogsReducer";
import {BlogItem} from "./BlogItem";
import {PostList} from "./PostList";
import {GoBack} from "./GoBack";
import styled from "styled-components";
import {WrapperContent} from "./WrapperContent";

export const ShowBlog = () => {
  let {id} = useParams<{ id: string }>()

  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)
  const dispatch = AppDispatch()

  const blog = blogs.find(b => b.id === id)

  useEffect(() => {
    if (!blog && id) {
      dispatch(fetchBlogByID(id))
    }
  }, [])


  return (
    <div>
      <WrapperContent>
        <GoBack title={'Back to blogs'}/>
      </WrapperContent>

      <ImgWrapper>
        <img src="https://via.placeholder.com/1000x312.png" alt=""/>
      </ImgWrapper>
      <WrapperContent>
        {blog && <>
            <BlogItem
                id={blog.id}
                title={blog.name}
                description={blog.description}
                webSite={blog.websiteUrl}
                creationDate={blog.createdAt}
                isShow={true}
            />
            <PostList blogID={blog.id}/>
        </>
        }</WrapperContent>
    </div>
  );
};

 const ImgWrapper = styled.div`
  width: 100%;
  
  img {
    width: 100%;
  }
`

