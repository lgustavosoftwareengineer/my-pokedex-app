import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons/";

import Card from "../../components/Card";

import {
  clearAllPokemons,
  getPokemons,
} from "../../repositories/myPokemons.repository";
import { getUser } from "../../repositories/user.repository";

import { theme } from "../../theme";
import {
  Container,
  Input,
  Title,
  ScrollView,
  Button,
  Paragraph,
  SubTitle,
} from "../../styles";
import { Header } from "./style";

import { Pokemon, User } from "./interfaces";

function MyPokemons() {
  const [user, setUser] = useState<User>({});
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [pokemonsFiltered, setPokemonsFiltered] = useState<Pokemon[]>([]);

  const [searchValue, setSearchValue] = useState("");

  const [error, setError] = useState("");

  const [counter, setCounter] = useState(0);

  const { navigate } = useNavigation();

  function getAllPokemons() {
    getPokemons().then((value) => {
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
    clearAllPokemons();
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
      <Header>
        <TouchableOpacity onPress={handlerUpdateButton}>
          <Icon name="update" size={36} color={theme.colors.black} />
        </TouchableOpacity>

        <Title>Pokédex de {user.name}</Title>

        <TouchableOpacity onPress={handlerDeleteButton}>
          <Icon name="clear" size={36} color={theme.colors.black} />
        </TouchableOpacity>
      </Header>

      <Input
        placeholder="Pesquise na sua Pokédex..."
        onChangeText={handlerInput}
      ></Input>

      <View style={{ width: "100%", height: "100%", paddingBottom: "10%" }}>
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
      </View>
    </Container>
  );
}

export default MyPokemons;
