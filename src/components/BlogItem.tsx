import React, {FC} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

type BlogItemType = {
  id: string
  title: string
  webSite: string,
  description: string
  creationDate?: string
  isShow: boolean
}

export const BlogItem: FC<BlogItemType> = ({id, title, webSite, description, creationDate, isShow}) => {


  return (
    <Item>
      <ImgWrapper>
        <img src="https://via.placeholder.com/156.png/" alt="image blog"/>
      </ImgWrapper>

      <ContentBlog>
        {!isShow
          ? <NavLink to={`/blogs/${id}`}>
            <Title>{title}</Title>
          </NavLink>
          : <Title>{title}</Title>
        }

        {!!creationDate &&
            <CreationDate>Blog creation date: <span>{creationDate}</span></CreationDate>}

        <WebSite>Website: </WebSite>
        <LinkWebSite href={webSite}> {webSite}</LinkWebSite>
        <Description>{description}</Description>
        {isShow && <ShowMore>Show more</ShowMore>}

      </ContentBlog>

    </Item>
  );
};

const Item = styled.div`
  padding: 30px 0;
  display: flex;
  column-gap: 2rem;
  border-bottom: 2px solid #DEDBDC;

  :last-child {
    border: none;
  }
`

const ImgWrapper = styled.div`
  width: 156px;
  height: 156px;
  border-radius: 50%;

  img {
    overflow: hidden;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: #1A1718;
`

const Title = styled.h3`
  display: inline-block;
  font-size: 25px;
  font-weight: 600;
  padding: 0 0 10px 0;
`


const WebSite = styled.div`
  color: #737067;
  font-weight: 400;
  font-size: 18px;
`
const LinkWebSite = styled.a`
  color: #3677F7;
  font-weight: 400;
  font-size: 18px;
`
const Description = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding: 20px 0;
  color: #1A1718;
`

const CreationDate = styled.div`
  color: #737067;
  font-weight: 400;
  font-size: 18px;
  padding: 5px 0;

  span {
    color: #000000;
  }
`

const ContentBlog = styled.div`
  flex-basis: 80%;
`

const ShowMore = styled.div`
  text-align: center;
  cursor: pointer;
`
