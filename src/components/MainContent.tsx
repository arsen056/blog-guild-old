import React, {FC} from 'react';
import styled from "styled-components";
import {Outlet} from "react-router-dom";
import {WrapperContent} from "./WrapperContent";

type MainContentType = {
  title: string
}

export const MainContent:FC<MainContentType> = ({title}) => {
  return (
    <Main>
      <WrapperContent>
        <Title>{title}</Title>
      </WrapperContent>
      <div>
        <Outlet/>
      </div>
    </Main>
  );
};

const Main = styled.main`
  flex-basis: 80%;
  background-color: #FAF7F8;
  height: 100%;
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

