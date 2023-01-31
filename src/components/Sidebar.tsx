import React from 'react';
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <Aside>
      <ul>
        <li>Blogs</li>
        <li>Posts</li>
      </ul>
    </Aside>
  );
};

const Aside = styled.aside`
  flex-basis: 20%;
`
