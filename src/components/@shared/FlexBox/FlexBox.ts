import React from 'react';
import styled from 'styled-components/native';

const FlexBox = styled.View<React.CSSProperties>`
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: ${(props) => props.flexWrap};
  align-items: ${(props) => props.alignItems};
  row-gap: ${(props) => props.rowGap};
  column-gap: ${(props) => props.columnGap};
`;

export default FlexBox;
