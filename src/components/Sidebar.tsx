import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

export const Sidebar = () => {
  return (
    <Aside>
      <ul>
        <li>
          <Link to={'blogs'}>Blogs</Link>
        </li>

        <li>
          <Link to={'posts'}>Posts</Link>
        </li>
      </ul>
    </Aside>
  );
};

const Aside = styled.aside`
  flex-basis: 20%;
`
