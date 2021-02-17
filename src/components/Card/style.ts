import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
  padding: 5%;
  border-radius: 25px;

  background-color: ${theme.colors.strongGray};
  color: ${theme.colors.white};
`;

export const CardImage = styled.Image`
  background-color: ${theme.colors.white};
  width: 80px;
  height: 80px;
  border-radius: 50px;
`;

export const CardBody = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: ${theme.colors.white};
  font-size: 18px;
  margin-bottom: 10px;
`;
export const CardFooter = styled.ScrollView`
  width: 150px;
`;

interface CardFooterElementProps {
  color?: string;
}
export const CardFooterElement = styled.View`
  background-color: ${(props: CardFooterElementProps) =>
    props.color ? props.color : theme.colors.red};
  border-radius: 40px;
  padding: 5px;
  min-width: 50px;
  margin-right: 8px;

  justify-content: center;
`;

export const CardFooterLabel = styled.Text`
  text-align: center;
  color: ${theme.colors.white};
  font-size: 12px;
`;
