import { CSSProperties } from 'styled-components';
import styled from 'styled-components/native';

export const Poster = styled.Image<CSSProperties>`
  width: ${(props) => props.width ?? 0};
  height: ${(props) => props.height ?? 0};
`;

export const Container = styled.View<CSSProperties>``;
