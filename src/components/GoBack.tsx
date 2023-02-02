import React, {FC} from 'react';
import styled from "styled-components";
import BackIcon from "../assets/back_arrow.svg";
import {useNavigate} from "react-router-dom";

type GoBackProps = {
  title: string
}

export const GoBack:FC<GoBackProps> = ({title}) => {
  const navigate = useNavigate();

  const back = () => navigate(-1)
  return (
    <GoBackStyled onClick={back}>{title}</GoBackStyled>
  );
};



const GoBackStyled = styled.button`
  background: transparent;
  padding-left: 20px ;
  border: none;
  cursor: pointer;
  font-size: 20px;
  background: url(${BackIcon});
  background-repeat: no-repeat;
  background-position: left ;
`