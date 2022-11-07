import {
  GET_LIST,
  GET_ONE,
  NOT_FOUND,
} from "./../actions/pokemon.actions";

const initialstate = {
  Pokemons: [],
  pageCount: 0,
  Pokemon: {},
  errorMsg: "",
};

export const PokemonReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_LIST: {
      return {
        state,
        Pokemons: action.payload.data.results,
        pageCount: action.payload.data.count,
      };
    }
    case GET_ONE: {
      return {
        ...state,
        errorMsg: "",
        Pokemon: action.payload.data,
      };
    }
    case NOT_FOUND: {
      return {
        ...state,
        errorMsg: "Not Found",
        Pokemon: {},
      };
    }

    default:
      return state;
  }
};
