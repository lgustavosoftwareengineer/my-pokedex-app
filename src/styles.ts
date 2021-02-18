import styled from "styled-components/native";
import { theme } from "./theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.red};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20% 10%;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.title};
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.09px;

  font-style: normal;
  color: #000;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 25px 20px;

  font-style: normal;
  font-family: ${theme.fonts.subTitle};
  color: #000;
`;

export const Input = styled.TextInput`
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  line-height: 24px;

  width: 100%;
  padding: 15px;
  margin-bottom: 20px;

  color: #000;
  background-color: #fff;
  font-family: ${theme.fonts.normal};

  border-radius: 50px;
`;

export const Paragraph = styled.Text`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  width: 100%;
  text-align: center;
  padding: 15px;

  color: #fff;
  font-family: ${theme.fonts.normal};
`;

export const Button = styled.TouchableOpacity`
  background-color: #000;
  width: 100%;
  border-radius: 50px;
  height: 10%;
  margin: 10px;

  justify-content: center;
`;

export const Label = styled.Text`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 10px 0px 3px;

  font-style: normal;
  font-family: ${theme.fonts.subTitle};
  color: #000;
`;

export const SexButton = styled.TouchableOpacity`
  background-color: #fff;

  width: 30%;
  border-radius: 50px;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin: 20px;
  width: 100%;
  justify-content: space-around;
`;

export const ScrollView = styled.ScrollView`
  padding: 5px;
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
`;
