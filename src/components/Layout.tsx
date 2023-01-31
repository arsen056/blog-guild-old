import React from 'react';
import {Sidebar} from "./Sidebar";
import {MainContent} from "./MainContent";
import {Wrapper} from "./Wrapper";
import {Navigate, Route, Routes} from "react-router-dom";
import styled from "styled-components";

export const Layout = () => {
  return (
    <Wrapper>
      <GridLayout>
        <Sidebar/>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
          <Route path={'/blogs'} element={<MainContent title={'Blogs'}/>}/>
          <Route path={'/posts'} element={<MainContent title={'Posts'}/>}/>
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
