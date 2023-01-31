import React, {FC} from 'react';
import styled from "styled-components";

type BlogItemType = {
  title: string
  webSite: string,
  description: string
}

export const BlogItem:FC<BlogItemType> = ({title, webSite, description}) => {
  return (
    <Item>
      <ImgWrapper>
        <img src="https://via.placeholder.com/156.png/" alt="image blog"/>
      </ImgWrapper>

      <div>
        <Title>{title}</Title>
        <div>
          <WebSite>Website: </WebSite>
          <Link href={webSite}> {webSite} </Link>
          <Description>{description}</Description>
        </div>
      </div>
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

const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
  padding: 0 0 10px 0;
`

const WebSite = styled.span`
  color: #737067;
  font-weight: 400;
  font-size: 18px;
`
const Link = styled.a`
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
