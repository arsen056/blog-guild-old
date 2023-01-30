import React, {FC} from 'react';
import styled from "styled-components";

export const Wrapper:FC<{children?: React.ReactNode}> = ({children}) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`