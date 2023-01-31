import React, {FC, useEffect} from 'react';
import styled from "styled-components";
import {BlogItem} from "./BlogItem";
import {AppDispatch, AppRootStateType} from "../store/store";
import {BlogType, fetchBlogs} from "../reducers/blogsReducer";
import {useSelector} from "react-redux";

type MainContentType = {
  title: string
}

export const MainContent:FC<MainContentType> = ({title}) => {

  const dispatch = AppDispatch()
  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)

  const blogsMap = blogs.map(b => <BlogItem key={b.id} title={b.name} webSite={b.websiteUrl} description={b.description}/>)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [])

  return (
    <Main>
      <Title>{title}</Title>
      <div>
        {blogsMap}
      </div>
      <ButtonWrapper><button>Show more</button></ButtonWrapper>


    </Main>
  );
};

const Main = styled.main`
  flex-basis: 80%;
  background-color: #FAF7F8;
  padding: 20px 20px 50px;  
`

const Title = styled.h2`
  font-size: 25px;
  font-weight: 600;
  padding: 10px 0;
  position: relative;
  
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #DEDBDC;
    bottom: 0;
    left: 0;
  }
`

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