import React from 'react';
import {Sidebar} from "./Sidebar";
import {Wrapper} from "./Wrapper";
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {Header} from "./Header";

export const Layout = () => {
  return (
    <>
      <Header/>
      <Wrapper>
        <GridLayout>
          <Sidebar/>
          <Outlet/>
        </GridLayout>
      </Wrapper>
    </>
  );
};

const GridLayout = styled.div`
  display: flex;
`
