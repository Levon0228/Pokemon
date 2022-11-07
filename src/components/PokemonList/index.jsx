import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getPokemonThunk } from "../../redux/actions/pokemon.actions";
import styles from "./index.module.scss";

//ReactPaginate package
import ReactPaginate from "react-paginate";

const PokemonList = () => {
  const Pokemons = useSelector((state) => state.PokemonReducer.Pokemons);
  const pageCount = useSelector((state) => state.PokemonReducer.pageCount);
  const dispatch = useDispatch();


  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(getPokemonThunk(currentPage));
  }, [currentPage, dispatch, location.pathname]);



  return (
    <div>
      <ul className={styles.pokemonListContainer}>
        {Pokemons?.map(({ name }) => {
          return (
            <li
              key={name}
              className={styles.pokemonItem}
              onClick={() => navigate(`/${name}`)}
            >
              {name}
            </li>
          );
        })}
      </ul>
       <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        boxSizing: 'border-box',
        width: '100%',
        height: '100%',
      }}
    >
      <ReactPaginate
        activeClassName={`${styles.paginateItem } ${styles.active} `}
        breakClassName={`${styles.paginateItem } ${styles.breakMe} `}
        breakLabel={'...'}
        containerClassName={`${styles.pagination}`}
        disabledClassName={`${styles.disabledPage}`}
        marginPagesDisplayed={2}
        nextClassName={`${styles.paginateItem } ${styles.next} `}
        onPageChange={(data) => {
          setCurrentPage(data.selected);
          window.scrollTo(0, 0);
        }}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(pageCount / 16)}
        pageClassName={`${styles.paginateItem } ${styles.paginationPage} `}
        previousClassName={`${styles.paginateItem } ${styles.previous}`}
      />
    </div>
    </div>
  );
};

export default PokemonList;
