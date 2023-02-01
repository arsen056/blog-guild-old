import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {getPostByID, PostType} from "../reducers/postsReducer";

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
    <div>
      {post &&
        <>
            <h2>{post.title}</h2>
            <p>{post.shortDescription}</p>
        </>
    }

    </div>
  );
};
