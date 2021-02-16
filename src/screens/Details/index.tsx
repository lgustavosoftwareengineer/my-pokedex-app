import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import { Container } from "../../styles";

import { items } from "../../testData";

interface Params {
  id: number;
}
interface Pokemon {
  name?: string;
  types?: string[];
  imageUrl?: string;
}

function Details() {
  const route = useRoute();
  const [pokemon, setPokemon] = useState<Pokemon>({});

  const params = route.params as Params;

  useEffect(() => {
    setPokemon(items[params.id]);
  }, [pokemon]);

  return (
    <Container>
      <Text>Detalhes do pokemon: {params.id}</Text>
      <Text>Nome: {pokemon.name}</Text>
      <Image
        source={{
          uri: pokemon.imageUrl,
        }}
        style={{ width: 100, height: 100 }}
      />

      {pokemon.types?.map((type, index) => (
        <Text key={index}>{type}</Text>
      ))}
    </Container>
  );
}

export default Details;
