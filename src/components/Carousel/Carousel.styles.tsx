import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Indicator = styled.View<{ focused: boolean }>`
  margin: 0px 4px;
  background-color: #333333;
  opacity: ${(props) => (props.focused ? '1' : '0.5')};
  width: ${(props) => (props.focused ? '12px' : '6px')};
  height: 6px;
  border-radius: 3px;
`;

export const IndicatorWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  position: absolute;
  bottom: 12px;
`;
