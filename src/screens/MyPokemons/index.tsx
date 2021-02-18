import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Card from "../../components/Card";

import { MaterialIcons as Icon } from "@expo/vector-icons/";

import {
  clearAllPokemons,
  getPokemons,
} from "../../repositories/mypokemons.respositoy";
import { getUser } from "../../repositories/user.repository";

import {
  Container,
  Input,
  Title,
  ScrollView,
  Button,
  Paragraph,
} from "../../styles";
import { theme } from "../../theme";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

interface PokemonType {
  name: string;
}

interface Pokemon {
  id?: number;
  name?: string;
  imageUrl?: string;
  types?: PokemonType[];
}

function MyPokemons() {
  const [user, setUser] = useState<User>({});
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8%",
          width: "100%",
        }}
      >
        <TouchableOpacity onPress={handlerUpdateButton}>
          <Icon name="update" size={36} color={theme.colors.black} />
        </TouchableOpacity>

        <Title>Minha Pokédex</Title>

        <TouchableOpacity onPress={handlerDeleteButton}>
          <Icon name="clear" size={36} color={theme.colors.black} />
        </TouchableOpacity>
      </View>
      <Input placeholder="Pesquise na sua Pokédex..."></Input>

      <View style={{ width: "100%", height: "100%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {pokemons.length <= 0 ? (
            <View>
              <Paragraph>Você não possui nenhum pokemon</Paragraph>
            </View>
          ) : (
            pokemons.map((pokemon, index) => (
              <Card
                key={index}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
                types={pokemon.types}
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
