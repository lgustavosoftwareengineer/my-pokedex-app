import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Card from "../../components/Card";
import { getUser } from "../../repositories/user.repository";

import { Container, Input, Title, ScrollView } from "../../styles";
import { items } from "../../testData";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  imageUrl: string;
}

function SearchPokemon() {
  const [user, setUser] = useState<User>({});
  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      } else {
        setError("Usuário não encontrado");
      }
    });
  }, [user, filteredPokemons]);

  function navigateToDetailsPage(id: number) {
    navigate("pokemon-details", {
      id,
    });
  }

  function handlerInput(event: string) {
    setSearchValue(event);

    if (event.length <= 1) {
      setFilteredPokemons([]);
    } else {
      setFilteredPokemons(
        items.filter((pokemon: Pokemon) => {
          return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
        })
      );
    }
  }

  return (
    <Container>
      <Input
        placeholder="Pesquise por um pokemon..."
        onChangeText={handlerInput}
      ></Input>

      <View style={{ width: "100%", height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredPokemons.length >= 1 ? (
            filteredPokemons.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                types={item.types}
                imageUrl={item.imageUrl}
                onPress={() => navigateToDetailsPage(item.id)}
              />
            ))
          ) : (
            <Title>Nenhum resultado para vc</Title>
          )}
        </ScrollView>
      </View>
    </Container>
  );
}

export default SearchPokemon;
