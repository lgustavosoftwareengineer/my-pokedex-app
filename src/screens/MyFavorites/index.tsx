import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { getUser, storeUser } from "../../repositories/user.repository";

import { Container, Title, Input, Button, Paragraph } from "../../styles";
import Card from "../../components/Card";

import { theme } from "../../theme";

import { items } from "../../testData";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

function MyFavorites() {
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

  function navigateToDetailsPage(id: number) {
    navigate("pokemon-details", {
      id,
    });
  }

  return (
    <Container>
      <Title>
        Aqui estão seus pokemons favoritos{" "}
        <Title style={{ color: theme.colors.white }}>{user.name}</Title>
      </Title>
      <Input placeholder="Pesquise na sua lista de favoritos..."></Input>
      <View style={{ width: "100%", height: "88%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {items.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              types={item.types}
              imageUrl={item.imageUrl}
              onPress={() => navigateToDetailsPage(index)}
            />
          ))}
        </ScrollView>
      </View>
    </Container>
  );
}

export default MyFavorites;
