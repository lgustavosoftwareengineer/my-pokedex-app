export function getColor(pokemonType: any) {
  // grass
  const types = [
    {
      normal: "#A8A878",
    },
    {
      fighting: "#C03028",
    },
    {
      flying: "#A890F0",
    },
    {
      poison: "#A040A0",
    },
    {
      ground: "#E0C068",
    },
    {
      rock: "#B8A038",
    },
    {
      bug: "#A8B820",
    },
    {
      ghost: "#705898",
    },
    {
      steel: "#B8B8D0",
    },
    {
      fire: "#E24242",
    },
    {
      water: "#6890F0",
    },
    {
      grass: "#78C850",
    },
    {
      electric: "#F8D030",
    },
    {
      psychic: "#F85888",
    },
    {
      ice: "#98D8D8",
    },
    {
      dragon: "#C6A114",
    },
    {
      dark: "#705848",
    },
    {
      fairy: "#EE99AC",
    },
    {
      unknown: "#68A090",
    },
    {
      shadow: "#352457",
    },
  ];
  var res = "";
  types.map((item: any, index) => {
    if (item[pokemonType]) {
      res = item[pokemonType];
    }
  });
  return res;
}
