import React, {FC} from 'react';
import styled from "styled-components";

type PostItemPropsType = {
  title: string
  description: string
  date: string
}

export const PostItem: FC<PostItemPropsType> = ({title, date, description}) => {
  return (
    <PostItemStyled className={'post-item'}>
      <div>
        <img className={'post-img'} src="https://via.placeholder.com/300x180.png/" alt=""/>
      </div>
      <Title className={'post-title'}>{title}</Title>
      <p className={'post-description'}>{description}</p>
      <Date className={'post-date'}>{date}</Date>
    </PostItemStyled>
  );
};

const PostItemStyled = styled.div`
  max-width: 300px;
`

const Date = styled.div`
  padding: 10px 0;
  font-size: 14px;
  color: #636262;
`

const Title = styled.h3`
  padding: 10px 0;
`