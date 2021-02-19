import styled from "styled-components/native";
import { theme } from "../../theme";

export const Title = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.title};
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.09px;
  margin-bottom: 5%;

  font-style: normal;
  color: #000;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 15px;
  margin-bottom: 20px;

  color: #000;
  background-color: #fff;
  font-family: ${theme.fonts.normal};

  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  width: 50%;
  justify-content: center;
  padding-left: -10px;
`;

export const Divisor = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${theme.colors.black};
  margin-right: 10px;
`;

export const Main = styled.View`
  width: 100%;
  height: 100%;
  padding-bottom: 40%;
`;
