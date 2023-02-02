import React, {FC, useEffect} from 'react';
import {PostItem} from "./PostItem";
import styled from "styled-components";
import {AppDispatch, AppRootStateType} from "../store/store";
import {fetchPostsForBlogs, getPosts, PostType} from "../reducers/postsReducer";
import {useSelector} from "react-redux";
import {WrapperContent} from "./WrapperContent";
import {Loader} from "./Loader";
import {StatusAppType} from "../reducers/appReducer";

type PostListPropsType = {
  blogID?: string
}

export const PostList: FC<PostListPropsType> = ({blogID}) => {

  const dispatch = AppDispatch()
  const status = useSelector<AppRootStateType, StatusAppType>(state => state.app.status)
  const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts.posts)

  useEffect(() => {
    if (blogID) {
      dispatch(fetchPostsForBlogs(blogID))
    } else {
      dispatch(getPosts())
    }

  }, [])

  const postsMap = posts.length
    ? blogID
      ? posts.map(post => <PostItem key={post.id} blogID={blogID} postid={post.id} title={post.title}
                                    description={post.shortDescription} date={post.createdAt}/>)
      : posts.map(post => <PostItem key={post.id} blogName={post.blogName} postid={post.id} title={post.title}
                                    description={post.shortDescription} date={post.createdAt}/>)
    : <h3>Post list empty</h3>

  return (
    <WrapperContent>

      {status === 'loading'
        ? <Loader/>
        : <PostsWrapper>
          {postsMap}
        </PostsWrapper>
      }
    </WrapperContent>
  );
};

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
