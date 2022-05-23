import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { di } from "../../core/injection_container";
import { CounterEntity } from "../../domain/entity/counter.entity";
import CounterService from "../../domain/service/counter.service";

export interface CounterState {
  value: number;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  success: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
      if (payload) {
        state.success = false;
      }
    },
    setSuccess: (state) => {
      state.success = true;
    },
    setCountData: (state, { payload }) => {
      state.value = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

// Reducers export
export const { setLoading, setSuccess, setCountData, setError } =
  counterSlice.actions;

// State variables export
export const selectCount = (state: RootState): number => state.counter.value;
export const selectLoading = (state: RootState): boolean =>
  state.counter.loading;
export const selectSuccess = (state: RootState): boolean =>
  state.counter.success;

// Actions export
export const fetchCountData = () => {
  return async (dispatch: any) => {
    dispatch(setLoading(true));

    try {
      const data: CounterEntity = await di.resolve(CounterService).fetchCount();
      dispatch(setCountData(data.data));
      dispatch(setSuccess());
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export default counterSlice.reducer;
