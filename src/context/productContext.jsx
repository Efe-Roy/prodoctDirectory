import React, { useContext, useReducer, useEffect } from "react";
import { endpoint } from "../utils/constants";
import httpAuthAxios from "../utils/httpConfig";
import productReducer from "../reducers/productReducer";

const initialState = {
  isLoading: true,
  query: "a",
  page: 0,
  postsPerPage: 8,
  hits: [],
};

const AppContext = React.createContext();

// to create a provider fucntion
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const fecthData = (url) => {
    dispatch({ type: "SET_LOADING" });
    httpAuthAxios
      .get(url)
      .then((res) => {
        console.log("hits", res.data);
        console.log("get", res.data[0].brickCategory.brick);
        dispatch({ type: "GET_DATAS", payload: { hits: res.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fecthDataById = (url) => {
    dispatch({ type: "SET_LOADING" });
    httpAuthAxios
      .get(url)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_DATAS", payload: { hits: res.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const fecthDataPromo = (url) => {
    dispatch({ type: "SET_LOADING" });
    httpAuthAxios
      .get(url)
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "GET_DATAS", payload: { hits: res.data } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // search
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: searchQuery,
    });
  };

  // pagination
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  // to call teh api func
  useEffect(() => {
    fecthData(`${endpoint}PageNumber=${state.page}&PageSize=${state.postsPerPage}`);
    // fecthData( `${endpoint}PageNumber=${state.page}&PageSize=8&SearchString=${state.query}` );
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, searchPost, getNextPage, getPrevPage, fecthDataById }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook chitsreate
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
