import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {getPostByID, PostType} from "../reducers/postsReducer";
import {GoBack} from "./GoBack";
import styled from "styled-components";
import {WrapperContent} from "./WrapperContent";

export const ShowPost = () => {
  const {postid} = useParams();
  const dispatch = AppDispatch()
  const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts.posts)
  const post = posts.find(post => post.id === postid)


  useEffect(() => {
    if (!post && postid) {
      dispatch(getPostByID(postid))
    }
  }, [])

  return (
    <WrapperContent>
      <GoBack title={'Back to posts'}/>
      {post &&
        <>
            <BlogName>
                <img src="https://via.placeholder.com/48x48.png" alt="blog"/>
                <span>{post.blogName}</span>
            </BlogName>
            <Title>{post.title}</Title>
            <Date>{post.createdAt}</Date>
            <ContentImage>
                <img src="https://via.placeholder.com/940x432.png" alt="content"/>
            </ContentImage>
            <PostText>{post.shortDescription}</PostText>
        </>
    }
    </WrapperContent>
  );
};

const BlogName = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 22px;
  font-weight: 600;
  padding: 40px 0;
  
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`
const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
`

const Date = styled.div`
  font-size: 18px;
  color: #797476;
  padding: 10px 0;
`

const ContentImage = styled.div`
  max-width: 940px;
  
  img {
    width: 100%;
  }
`

const PostText = styled.p`
  font-size: 20px;
  padding: 20px 0;
`


