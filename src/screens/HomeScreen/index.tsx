import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getUser, storeUser } from "../../repositories/user.repository";

import { Container, Title, Input, Button, Paragraph } from "./styles";
import { useNavigation } from "@react-navigation/native";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

function HomeScreen(props: any) {
  const [user, setUser] = useState<User>({});
  const [error, setError] = useState("");

  const { navigate } = useNavigation();

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      } else {
        setError("Usuário não encontrado");
      }
    });
  }, [user]);

  return (
    <Container>
      <Title>Aqui estão seus pokemons favoritos</Title>
      <Input placeholder="Pesquise por pokemon"></Input>
      <Button onPress={() => navigate("tabs")}>
        <Paragraph>Clique aqui para ir para o teste das tabs</Paragraph>
      </Button>
    </Container>
  );
}

export default HomeScreen;
