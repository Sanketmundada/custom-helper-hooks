import { useReducer } from "react";
import { FetchAction, ReducerState } from "./types";

const initialState = {
  isLoading: false,
  data: null,
  error: null,
  response: null,
};

const reducer = <T>(state: ReducerState<T>, action: FetchAction) => {
  switch (action.type) {
    case "loading": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "success": {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload.data,
        response: action.payload.response,
      };
    }
    case "failure": {
      return {
        ...state,
        isLoading: false,
        data: null,
        response: null,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

/**
 *
 * @param uri Api to be called
 * @param options extra config options
 * @returns object {fetch,data,isLoading,response,error}
 *
 */
const useFetch = <T>(uri: RequestInfo, options?: RequestInit) => {
  const [state, dispatch] = useReducer<
    (state: ReducerState<T>, action: FetchAction) => ReducerState<T>
  >(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "loading" });
    try {
      const resp = await fetch(uri, options);

      if (!resp.ok) {
        throw resp;
      }

      const data = await resp.json();
      dispatch({
        type: "success",
        payload: {
          data,
          response: resp,
        },
      });
    } catch (error) {
      dispatch({
        type: "failure",
        payload: {
          error: error,
        },
      });
    }
  };

  return { fetch: fetchData, ...state };
};

export default useFetch;
