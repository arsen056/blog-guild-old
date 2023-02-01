import React from 'react';
import './App.css';
import {Layout} from "./components/Layout";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {MainContent} from "./components/MainContent";
import {BlogList} from "./components/BlogList";
import {ShowBlog} from "./components/ShowBlog";
import {ShowPost} from "./components/ShowPost";
import {PostList} from "./components/PostList";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>}>

          <Route path={'/blogs'} element={<MainContent title={'Blogs'} />} >
            <Route path={'/blogs'} element={<BlogList/>}/>
            <Route path={'/blogs/:id'} element={<ShowBlog/>}/>
            <Route path={'/blogs/:id/:postid'} element={ <ShowPost/> }  />
          </Route>

          <Route path={'/posts'} element={<MainContent title={'Posts'} />} >
            <Route path={'/posts'} element={<PostList />}/>
            <Route path={'/posts/:postid'} element={<ShowPost/>}/>
          </Route>

          <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
          <Route path={'/404'} element={<h2>Not Found</h2>}/>
          <Route path={'/*'} element={<Navigate to={'/404'}/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
