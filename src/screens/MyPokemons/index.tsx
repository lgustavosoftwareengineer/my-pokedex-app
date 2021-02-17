import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Card from "../../components/Card";
import { getUser } from "../../repositories/user.repository";

import { Container, Input, Title, ScrollView } from "../../styles";
import { items } from "../../testData";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}
function MyPokemons() {
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
      <Title>Minha Pokédex</Title>
      <Input placeholder="Pesquise na sua Pokédex..."></Input>
      <View style={{ width: "100%", height: "90%" }}>
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

export default MyPokemons;
