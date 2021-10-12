export interface ReducerState<T> {
  isLoading: boolean;
  error: any;
  data: T | null;
  response: Response;
}
export type FetchAction =
  | { type: "loading" }
  | {
      type: "success";
      payload: {
        data: any;
        response: any;
      };
    }
  | {
      type: "failure";
      payload: {
        error: any;
      };
    };
