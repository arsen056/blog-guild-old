import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {BlogType, fetchBlogByID, fetchBlogs} from "../reducers/blogsReducer";
import {BlogItem} from "./BlogItem";
import {PostItem} from "./PostItem";
import {PostList} from "./PostList";

export const ShowBlog = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)
  // const openedBlog = useSelector<AppRootStateType, BlogType | undefined>(state => state.blogs.openedBlog)
  const dispatch = AppDispatch()

  const blog = blogs.find(b => b.id === id)

  const back = () => navigate(-1)

  return (
    <div>
      <button onClick={back}> Back</button>
      <div>
        <img src="https://via.placeholder.com/1000x312.png" alt=""/>
      </div>
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
    </div>
  );
};
