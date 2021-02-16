import React, { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Title,
  SubTitle,
  Input,
  Button,
  Paragraph,
  Logo,
  SexButton,
  Row,
  Label,
  Image,
} from "./styles";

import { getUser, storeUser } from "../../repositories/user.repository";

import logo from "../../assets/pokemon-logo.png";
import manSymbol from "../../assets/man-symbol.png";
import womanSymbol from "../../assets/woman-symbol.png";
import { theme } from "../../theme";

function SignUp() {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [sex, setSex] = useState<number>(1);

  const { navigate } = useNavigation();

  function handlerConfirmSignUp() {
    if (name == "" || age == 0) {
      Alert.alert(
        "Algum campo está faltando",
        "Por favor preencha todos os campos"
      );
    } else {
      storeUser({ age, name, sex });
      getUser().then((value) => console.log(value));
      navigate("tabs", { screen: "home" });
    }
  }

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        navigate("tabs", { screen: "home" });
      } else {
        return null;
      }
    });
  }, []);

  return (
    <Container>
      <Title>
        Seja bem vindo(a) ao app{" "}
        <Title style={{ color: theme.colors.white }}>Minha Pokédex</Title>
      </Title>

      <Logo source={logo} />

      <SubTitle>Preencha os dados para ter acesso à sua Pokédex</SubTitle>

      <Input
        placeholder="Qual o seu nome?"
        onChangeText={(text) => setName(text)}
      ></Input>
      <Input
        placeholder="Qual a sua idade?"
        keyboardType="numeric"
        onChangeText={(text) => setAge(Number(text))}
      ></Input>

      <Label>Qual seu sexo?</Label>

      <Row>
        <SexButton
          onPress={() => setSex(1)}
          style={{
            backgroundColor: sex == 0 ? theme.colors.white : theme.colors.black,
          }}
        >
          <Image source={manSymbol} />
        </SexButton>
        <SexButton
          onPress={() => setSex(0)}
          style={{
            backgroundColor: sex == 0 ? theme.colors.black : theme.colors.white,
          }}
        >
          <Image source={womanSymbol} width={10} />
        </SexButton>
      </Row>

      <Button onPress={handlerConfirmSignUp}>
        <Paragraph>Acessar Pokédex</Paragraph>
      </Button>
    </Container>
  );
}

export default SignUp;
