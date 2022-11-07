import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';

import { HOME_PAGE, POKEMON_CARD_PAGE } from './costants/urls';

export const routes = [

    {
        element: <PokemonList />,
        path: HOME_PAGE
    },
    {
        element: <PokemonCard />,
        path: POKEMON_CARD_PAGE
    }
]