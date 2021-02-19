import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons as Icon } from "@expo/vector-icons/";

import { getUser, storeUser } from "../../repositories/user.repository";

import {
  Container,
  Title,
  Input,
  Paragraph,
  ScrollView,
  SubTitle,
} from "../../styles";

import Card from "../../components/Card";

import { theme } from "../../theme";

import {
  clearAllMyFavorites,
  getMyFavorites,
} from "../../repositories/favorites.repository";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Header, Main, Actions, Button, Divisor } from "./styles";
import { Pokemon, User } from "./interfaces";

function MyFavoritesPokemons() {
  const [user, setUser] = useState<User>({});
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokemon[]>([]);
  const [error, setError] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { navigate } = useNavigation();

  function getAllPokemons() {
    getMyFavorites().then((value) => {
      if (value) {
        setPokemons(value);
      } else {
        setError("Pokemons não encontrados");
      }
    });
  }

  const handlerUpdateButton = useCallback(() => {
    if (pokemons.length > 1) {
      getAllPokemons();
    }
    getAllPokemons();
  }, [pokemons]);

  const handlerDeleteButton = useCallback(() => {
    clearAllMyFavorites();
    getAllPokemons();
  }, [pokemons]);

  function handlerInput(event: string) {
    setSearchValue(event);
    if (event.length > 1) {
      const _pokemonsFiltered = pokemons.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setPokemonsFiltered(_pokemonsFiltered);
    }
  }

  useEffect(() => {
    getUser().then((value) => {
      if (value) {
        setUser(value);
      } else {
        setError("Usuário não encontrado");
      }
    });

    getAllPokemons();
  }, []);

  function navigateToDetailsPage(id?: number) {
    navigate("pokemon-details", {
      id,
    });
  }

  return (
    <Container>
      <Title>Pokemons favoritos </Title>

      <SubTitle>Seja bem vindo(a), {user.name}</SubTitle>

      <Input
        placeholder="Pesquise na sua lista de favoritos..."
        onChangeText={handlerInput}
      ></Input>

      <Actions>
        <Button onPress={handlerUpdateButton}>
          <Icon name="update" size={26} color={theme.colors.gray} />
        </Button>
        <Divisor />
        <Button onPress={handlerDeleteButton}>
          <Icon name="clear" size={26} color={theme.colors.gray} />
        </Button>
      </Actions>

      <Main>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pokemons.length <= 0 ? (
            <View>
              <Paragraph>Você não possui nenhum pokemon</Paragraph>
            </View>
          ) : pokemonsFiltered.length > 0 && searchValue.length > 0 ? (
            pokemonsFiltered.map((pokemon, index) => (
              <Card
                key={index}
                name={pokemon.name}
                types={pokemon.types}
                imageUrl={pokemon.imageUrl}
                onPress={() => navigateToDetailsPage(pokemon?.id)}
              />
            ))
          ) : (
            pokemons.map((pokemon, index) => (
              <Card
                key={index}
                name={pokemon.name}
                types={pokemon.types}
                imageUrl={pokemon.imageUrl}
                onPress={() => navigateToDetailsPage(pokemon?.id)}
              />
            ))
          )}
        </ScrollView>
      </Main>
    </Container>
  );
}

export default MyFavoritesPokemons;
