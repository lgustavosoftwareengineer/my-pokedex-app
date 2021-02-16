import AsyncStorage from "@react-native-async-storage/async-storage";

interface User {
  name?: string;
  age?: number;
  sex?: number;
}

export const storeUser = async (user: User) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem("@user", jsonValue);
  } catch (e) {
    return e;
  }
};

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("@user");
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    return e;
  }
};
