import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getUser, storeUser } from "../../repositories/user.repository";

import { Container, Title, Input } from "./styles";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

const HomeScreen: React.FC = () => {
  const [user, setUser] = useState<User>({});
  const [error, setError] = useState("");

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
    </Container>
  );
};

export default HomeScreen;
