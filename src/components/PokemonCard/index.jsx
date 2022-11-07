import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPokemonOneThunk} from "../../redux/actions/pokemon.actions";
import styles from "./index.module.scss";

const PokemonCard = () => {
  const dispatch = useDispatch();
  const Pokemon = useSelector((state) => state.PokemonReducer.Pokemon);
  const errorMsg = useSelector((state) => state.PokemonReducer.errorMsg);

  const {name} = useParams();


  useEffect(() => {
    dispatch(getPokemonOneThunk(name));
  }, [dispatch, name]);


  return (
    <div className={
      styles.pokemonItem
    }>
      {
      errorMsg !== "" ? (
        <p className={
          styles.nothfound
        }>
          {errorMsg}</p>
      ) : Object.keys(Pokemon).length ? (

        <div className={
          styles.pokemonInfo
        }>

          <table>
            <tbody>
              <tr>
                <th>
                  <strong>Pokemon Name</strong>
                </th>
                <th>
                  <strong>Species</strong>
                </th>
                <th>
                  <strong>Stats</strong>
                </th>
                <th>
                  <strong>Types</strong>
                </th>
                <th>
                  <strong>Weight</strong>
                </th>
              </tr>
              <tr>
                <td> {
                  Pokemon.name
                } </td>
                <td>
                  <div className={
                    styles.sprints
                  }>
                    <img src={
                        Pokemon.sprites.front_default
                      }
                      alt="front_default"/>
                    <img src={
                        Pokemon.sprites.back_default
                      }
                      alt="back_default"/>
                    <img src={
                        Pokemon.sprites.front_shiny
                      }
                      alt="front_shiny"/>
                    <img src={
                        Pokemon.sprites.back_shiny
                      }
                      alt="back_shiny"/>
                  </div>
                </td>
                <td> {
                  Pokemon.stats.map(({stat, base_stat}) => {
                    return (
                      <p key={
                        stat.name
                      }>
                        {
                        stat.name
                      }
                        {base_stat} </p>
                    );
                  })
                } </td>
                <td> {
                  Pokemon.types.map(({slot, type}) => {
                    return (
                      <p key={
                        type.name
                      }>
                        {
                        type.name
                      }
                        {slot} </p>
                    );
                  })
                } </td>

                <td> {
                  Pokemon.weight
                } </td>
              </tr>
            </tbody>
          </table>
          <table className={styles.movesContent}>
            <tbody>
              <tr>
                <th>
                  <strong>Movies</strong>
                </th>
              </tr>
              <tr>
                <td >{
                  Pokemon.moves.map(({move}) => {
                    return <span key={move.name} className={styles.moveItem}>
                      {
                      move.name
                    }</span>;
                  })
                } </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null
    } </div>
  );
};

export default PokemonCard;
