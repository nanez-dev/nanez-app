import styled from 'styled-components/native';
import { Text, View } from 'react-native';
import { CSSProperties } from 'styled-components';

export const GoToHomeButton = styled.View<CSSProperties>`
  width: 80%;
  height: 40px;
  background: #65bfc4;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
` as unknown as typeof View;

export const ButtonContent = styled.Text<CSSProperties>`
  font-size: 14px;
  font-weight: bold;
  color: white;
` as unknown as typeof Text;

export const Wrap = styled.View<CSSProperties>`
  align-items: center;
  padding-bottom: 40px;
` as unknown as typeof View;
