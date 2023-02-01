import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Sidebar = () => {

  const activeStyle = {color: '#F8346B', textDecoration: "underline"}
  const linkStyles = {textDecoration: 'none', fontSize: '20px', color: '#000000'}

  return (
    <Aside>
      <ul>
        <Li>
          <Link to={'blogs'}>Blogs</Link>
        </Li>

        <Li>
          <Link to={'posts'} >Posts</Link>
        </Li>
      </ul>
    </Aside>
  );
};

const Aside = styled.aside`
  flex-basis: 20%;
`
const Li = styled.li`
  list-style: none;
  padding: 10px 0;
`

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: #F8346B;
    text-decoration: underline;
  }
`