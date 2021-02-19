import styled from "styled-components/native";
import { theme } from "../../theme";

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 15px;
  margin-bottom: 8%;

  color: #000;
  background-color: #fff;
  font-family: ${theme.fonts.normal};

  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  width: 50%;
  justify-content: center;
`;

export const Divisor = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${theme.colors.black};
  margin-right: 10px;
`;
