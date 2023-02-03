import React, {FC, useEffect, useState} from 'react';
import {Box, Button, TextareaAutosize, TextField} from "@mui/material";
import {Field, Form, Formik, useFormik} from "formik";
import {WrapperContent} from "./WrapperContent";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";
import {BlogType} from "../reducers/blogsReducer";

export const AddBlog1 = () => {

  const {id} = useParams();

  const blogs = useSelector<AppRootStateType, BlogType[]>(state => state.blogs.blogs)

  const blog = blogs.find(blog => blog.id === id)

  const formik = useFormik({
    initialValues: {
      name: blog ? blog.name : '',
      description: blog ? blog.description : '',
      websiteUrl: blog ? blog.websiteUrl : ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <WrapperContent>
      <Box component={'form'} onSubmit={formik.handleSubmit} sx={{display: 'flex', flexDirection: 'column', rowGap: '2rem'}}>
        <TextField
          fullWidth
          id="blog-name"
          name="name"
          label="Blog name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="web-site"
          name="websiteUrl"
          label="Web site"

          value={formik.values.websiteUrl}
          onChange={formik.handleChange}
          error={formik.touched.websiteUrl && Boolean(formik.errors.websiteUrl)}
          helperText={formik.touched.websiteUrl && formik.errors.websiteUrl}
        />
        <TextField
          multiline
          fullWidth
          id="description-blog"
          name="description"
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
          rows={10}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Box>
    </WrapperContent>
  );
};
