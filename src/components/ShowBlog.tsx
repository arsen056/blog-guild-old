import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {BlogType, fetchBlogByID, fetchBlogs} from "../reducers/blogsReducer";
import {BlogItem} from "./BlogItem";
import {PostList} from "./PostList";

export const ShowBlog = () => {
  let {id} = useParams<{id: string}>()

  const navigate = useNavigate();
  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)
  const dispatch = AppDispatch()

  const blog = blogs.find(b => b.id === id)

  useEffect(() => {
    if (!blog && id) {
      dispatch(fetchBlogByID(id))
    }
  }, [])

  const back = () => navigate(-1)

  return (
    <>
      <button onClick={back}> Back</button>
      {/*<div>*/}
      {/*  <img src="https://via.placeholder.com/1000x312.png" alt=""/>*/}
      {/*</div>*/}
      {blog &&<>
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
      }

    </>
  );
};
