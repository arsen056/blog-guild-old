import React from 'react';
import {Wrapper} from "./Wrapper";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";

export const Header = () => {
  const isSuperAdmin = useSelector<AppRootStateType, boolean>(state => state.app.isSuperAdmin)
  return (
    <HeaderStyled>
      <Wrapper>
        <h1>Blogger platform</h1>
        {isSuperAdmin && <span>SuperAdmin</span>}
      </Wrapper>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  box-shadow: 0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1);
  padding: 1rem 0;
  position: relative;
  z-index: 10;
`
