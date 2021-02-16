import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { Container, Title, Paragraph, SubTitle, Button } from "../../styles";

import { items } from "../../testData";
import { theme } from "../../theme";

interface Params {
  id: number;
}
interface Pokemon {
  name?: string;
  types?: string[];
  imageUrl?: string;
}

function PokemonDetails() {
  const route = useRoute();
  const [pokemon, setPokemon] = useState<Pokemon>({});

  const params = route.params as Params;

  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    setPokemon(items[params.id]);
  }, [pokemon]);

  return (
    <Container>
      <Title style={{ color: theme.colors.white }}>
        <Title>Nome:</Title> {pokemon.name}
      </Title>
      <Image
        source={{
          uri: pokemon.imageUrl,
        }}
        style={{ width: 200, height: 200 }}
      />
      <SubTitle>Tipo</SubTitle>
      {pokemon.types?.map((type, index) => (
        <Paragraph key={index}>{type}</Paragraph>
      ))}
      <Button onPress={() => goBack()}>
        <Paragraph>Voltar</Paragraph>
      </Button>
    </Container>
  );
}

export default PokemonDetails;
