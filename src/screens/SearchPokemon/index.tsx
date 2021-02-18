import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Card from "../../components/Card";
import { getUser } from "../../repositories/user.repository";
import api from "../../services/api";

import {
  Container,
  Input,
  Title,
  ScrollView,
  Button,
  Paragraph,
} from "../../styles";

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

interface PokemonAbility {
  name: string;
}

interface PokemonType {
  name: string;
}
interface PokemonFromApi {
  id?: number;
  name?: string;
  abilities?: PokemonAbility[];
  weight?: number;
  order?: number;
  types?: PokemonType[];
  imageUrl?: string;
}

interface Result {
  name: string;
  url: string;
}

function SearchPokemon() {
  const [user, setUser] = useState<User>({});
  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState<any>([]);

  const { navigate } = useNavigation();

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      } else {
        setError("Usuário não encontrado");
      }

      //console.log(items);
    });
  }, [user, items]);

  function getAllPokemons() {
    api
      .get(
        "pokemon?limit=5&offset=200                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           "
      )
      .then((response) => {
        response.data.results.map((result: Result, index: number) => {
          api.get(result.url).then((item: any) => {
            setItems([
              ...items,
              {
                id: item.data.id,
                name: item.data.name,
                imageUrl: item.data.sprites.back_default,
              },
            ]);
          });
        });
      });

    console.log(items);
  }

  function navigateToDetailsPage(id?: number) {
    navigate("pokemon-details", {
      id,
    });
  }

  function handlerInput(event: string) {
    setSearchValue(event);
  }

  return (
    <Container>
      <Input
        placeholder="Pesquise por um pokemon..."
        onChangeText={handlerInput}
      ></Input>
      <Button
        onPress={() => {
          getAllPokemons();
        }}
      >
        <Paragraph>Buscar por pokemons</Paragraph>
      </Button>
      <View style={{ width: "100%", height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {items.length >= 1 ? (
            items.map((item: PokemonFromApi, index: number) => (
              <Card
                key={index}
                name={item.name}
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
