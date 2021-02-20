import styled from "styled-components/native";
import { theme } from "../../theme";

export const Center = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 15px;
  margin-top: -15%;

  color: #000;
  background-color: #fff;

  border-radius: 50px;
`;

export const PokemonName = styled.Text`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  line-height: 24px;

  color: #000;
  font-family: ${theme.fonts.title};
`;

export const Types = styled.ScrollView`
  width: 90%;
  margin-bottom: 5%;
`;

interface TypeElementProps {
  color?: string;
}
export const TypeElement = styled.View`
  background-color: ${(props: TypeElementProps) =>
    props.color ? props.color : theme.colors.red};
  border-radius: 40px;
  padding: 5px;
  min-width: 145px;
  min-height: 30px;

  margin-right: 8px;

  justify-content: center;
`;

export const TypeLabel = styled.Text`
  text-align: center;
  color: ${theme.colors.white};
  font-size: 15px;
`;

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

export const Card = styled.View`
  flex-direction: column;
  margin-bottom: 8%;
  width: 100%;
  padding: 8%;
  border-radius: 25px;

  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
`;

export const CardTitle = styled.Text`
  text-align: left;
  font-family: ${theme.fonts.title};
  font-size: 15px;
  line-height: 18px;
  color: ${theme.colors.black};
`;

export const CardSubtitle = styled.Text`
  font-family: ${theme.fonts.subTitle};
  font-size: 13px;
  line-height: 18px;
  margin-left: 10px;

  color: ${theme.colors.black};
`;

export const SectionTitle = styled.Text`
  text-align: left;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 2%;
  padding: 0px 10px;
  width: 100%;

  font-style: normal;
  font-family: ${theme.fonts.title};
  color: ${theme.colors.black};
`;

export const SkillsContainer = styled.ScrollView`
  width: 100%;
  height: 150px;
  padding: 5px;
`;

interface SkillProps {
  color?: string;
}
export const Skill = styled.View`
  background-color: ${(props: SkillProps) =>
    props.color ? props.color : theme.colors.white};
  border-radius: 25px;
  padding: 5px;
  min-width: 200px;
  min-height: 50px;
  margin-right: 8px;

  justify-content: center;
`;

export const SkillLabel = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.subTitle};

  color: ${theme.colors.black};
  font-size: 18px;
`;
