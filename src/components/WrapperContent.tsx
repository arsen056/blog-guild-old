import React, {FC} from 'react';
import styled from "styled-components";

export const WrapperContent:FC<{children?: React.ReactNode}> = ({children}) => {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 20px;
`