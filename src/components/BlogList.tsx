import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {BlogType, fetchBlogs} from "../reducers/blogsReducer";
import {BlogItem} from "./BlogItem";
import styled from "styled-components";
import {WrapperContent} from "./WrapperContent";
import {StatusAppType} from "../reducers/appReducer";
import {Loader} from "./Loader";
import {Link, NavLink} from "react-router-dom";


export const BlogList = () => {

  const dispatch = AppDispatch()

  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)
  const status = useSelector<AppRootStateType, StatusAppType>(state => state.app.status)
  const isSuperAdmin = useSelector<AppRootStateType, boolean>(state => state.app.isSuperAdmin)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  const blogsMap = blogs.map(b => <BlogItem key={b.id} id={b.id} title={b.name} webSite={b.websiteUrl} description={b.description} isShow={false}/>)

  return (
    <WrapperContent>
      {isSuperAdmin &&
          <Link to={'add_blog'}>
              <button>Add blog</button>
          </Link>
          }


      <div>
        {status === 'loading'
          ? <Loader/>
          :blogsMap}
      </div>
      <ButtonWrapper>
        <button>Show more</button>
      </ButtonWrapper>
    </WrapperContent>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  button {
    padding: 10px 30px;
    background: transparent;
    border: 1px solid #1A1718;
    border-radius: 2px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    transition: all 0.3s linear;
    
    &:hover {
      background-color: #1A1718;
      color: #fff;
    }
  }
`
