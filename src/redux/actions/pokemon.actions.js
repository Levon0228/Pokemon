import axios from "axios";
export const GET_LIST = "GET_LIST";
export const GET_ONE = "GET_ONE";
export const NOT_FOUND = "NOT_FOUND";

export const getPokemonThunk = (currentPage) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=16&offset=${currentPage * 16}`
    );

    dispatch({
      type: GET_LIST,
      payload: response,
    });
  };
};

export const getPokemonOneThunk = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      dispatch({
        type: GET_ONE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: NOT_FOUND,
      });
    }
  };
};
