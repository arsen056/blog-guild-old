import React, {FC} from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

type PostItemPropsType = {
  postid: string
  blogID?: string
  title: string
  description?: string
  blogName?: string
  date: string
}

export const PostItem: FC<PostItemPropsType> = ({postid, blogName, title, date, description}) => {

  return (
    <PostItemStyled className={'post-item'}>
      <div>
        <img className={'post-img'} src="https://via.placeholder.com/300x180.png/" alt=""/>
      </div>
      <PostInfo>
        <BlogIcon>
          {blogName && <img src="https://via.placeholder.com/48x48.png" alt="blog icon"/>}
        </BlogIcon>
        <div>
          <NavLink to={`${postid}`}>
            <Title className={'post-title'}>{title}</Title>
          </NavLink>
          <p>{blogName}</p>
          {!blogName && <p className={'post-description'}>{description}</p>}
          <Date className={'post-date'}>{date}</Date>
        </div>
      </PostInfo>

    </PostItemStyled>
  );
};

const PostItemStyled = styled.div`
  max-width: 300px;
  margin: 20px 0;
`

const Date = styled.div`
  padding: 10px 0;
  font-size: 14px;
  color: #636262;
`

const Title = styled.h3`
  padding: 10px 0;
  display: inline-block;
`

const PostInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`

const BlogIcon = styled.div`

  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`