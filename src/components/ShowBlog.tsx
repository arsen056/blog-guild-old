import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {BlogType} from "../reducers/blogsReducer";
import {BlogItem} from "./BlogItem";

export const ShowBlog = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)

  const blog = blogs.find(b => b.id === id)

  const back = () => {
    navigate(-1)
  }


  return (
    <div>
      <button onClick={back}> Back</button>
      <div>
        <img src="https://via.placeholder.com/1000x312.png" alt=""/>
      </div>
      {blog &&
          <BlogItem
              id={blog.id}
              title={blog.name}
              description={blog.description}
              webSite={blog.websiteUrl}
              creationDate={blog.createdAt}
              isShow={true}
          />
      }
    </div>
  );
};
