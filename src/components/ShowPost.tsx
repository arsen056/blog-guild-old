import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppDispatch, AppRootStateType} from "../store/store";
import {getPostByID, PostType} from "../reducers/postsReducer";

export const ShowPost = () => {

  const {postid} = useParams();
  const dispatch = AppDispatch()
  const posts = useSelector<AppRootStateType, PostType[]>(state => state.posts.posts)
  const post = posts.find(post => post.id === postid)
  const navigate = useNavigate();

  useEffect(() => {
    if (!post && postid) {
      dispatch(getPostByID(postid))
    }
  }, [])

  const back = () => navigate(-1)

  return (
    <div>
      <button onClick={back}>Back</button>
      {post &&
        <>
            <h2>{post.title}</h2>
            <p>{post.shortDescription}</p>
        </>
    }
    </div>
  );
};
