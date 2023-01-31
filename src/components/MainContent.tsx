import React, {FC} from 'react';
import styled from "styled-components";

type MainContentType = {

  title: string
  element: React.ReactNode

}

export const MainContent:FC<MainContentType> = ({title, element}) => {
  return (
    <Main>
      <Title>{title}</Title>
      <div>
        {element}
      </div>
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

