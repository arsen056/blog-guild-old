import React, {FC, useEffect} from 'react';
import {PostItem} from "./PostItem";
import styled from "styled-components";
import {AppDispatch, AppRootStateType} from "../store/store";
import {fetchPostsForBlogs, getPosts, PostType} from "../reducers/postsReducer";
import {useSelector} from "react-redux";

type PostListPropsType = {
  blogID?: string
}

export const PostList: FC<PostListPropsType> = ({blogID}) => {

  const dispatch = AppDispatch()

  const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts.posts)

  useEffect(() => {
    if (blogID) {
      dispatch(fetchPostsForBlogs(blogID))
    } else {
      dispatch(getPosts())
    }

  }, [])

  const postsMap = posts.length
    ? posts.map(post => {
      return <PostItem key={post.id} blogID={blogID} postid={post.id} title={post.title} description={post.shortDescription} date={post.createdAt}/>
    })
    : <h3>Post list empty</h3>



  return (
    <PostsWrapper>
      {postsMap}
    </PostsWrapper>
  );
};

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0;
`
