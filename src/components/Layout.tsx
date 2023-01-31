import React from 'react';
import {Sidebar} from "./Sidebar";
import {MainContent} from "./MainContent";
import {Wrapper} from "./Wrapper";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {BlogList} from "./BlogList";
import {PostList} from "./PostList";
import {ShowBlog} from "./ShowBlog";

export const Layout = () => {
  return (
    <Wrapper>
      <GridLayout>
        <Sidebar/>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
          <Route path={'/blogs'} element={<MainContent title={'Blogs'} element={ <BlogList/> }/>}/>
          <Route path={'/blogs/:id'} element={<MainContent title={'Blogs'} element={ <ShowBlog/> }/>}/>
          <Route path={'/posts'} element={<MainContent title={'Posts'} element={ <PostList/>}/>}/>
          <Route path={'/404'} element={<h2>Not Found</h2>}/>
          <Route path={'/*'} element={<Navigate to={'/404'}/>}/>
        </Routes>
      </GridLayout>

    </Wrapper>
  );
};

const GridLayout = styled.div`
  display: flex;
`
