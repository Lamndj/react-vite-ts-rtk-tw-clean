import React from "react";

import { useAppSelector, useAppDispatch } from "../../../core/hooks";
import {
  selectCount,
  selectSuccess,
  selectLoading,
  fetchCountData,
} from "../../../redux/counter/counterSlice";

export default function Counter(): JSX.Element {
  const count = useAppSelector(selectCount);
  const loading = useAppSelector(selectLoading);
  const success = useAppSelector(selectSuccess);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>{count}</h3>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(fetchCountData())}
        className="py-1 px-3 min-w-[4rem] bg-red-400 text-white text-3xl cursor-pointer hover:bg-red-600 rounded-md"
      >
        FETCH DATA
      </button>

      <p>loading: {JSON.stringify(loading)}</p>
      <p>success: {JSON.stringify(success)}</p>
    </div>
  );
}
