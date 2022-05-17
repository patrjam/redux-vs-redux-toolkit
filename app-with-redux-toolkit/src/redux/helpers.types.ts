import { createAsyncThunk as _createAsyncThunk, AsyncThunkOptions, AsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { State } from "./store"
import { extraArgument } from "./store"


type ExtraType = typeof extraArgument

declare type AsyncThunkConfig = {
    state: State;
    dispatch?: Dispatch;
    extra: ExtraType;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: number;
    rejectedMeta?: unknown;
  };
  export const createAsyncThunk = <Returned,  ThunkApiConfig extends AsyncThunkConfig, ThunkArg = void>(
    typePrefix: string,
    payloadCreator: (arg: ThunkArg, config: AsyncThunkConfig) => Promise<any>,
    options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> => 
      //@ts-expect-error
    _createAsyncThunk(typePrefix, payloadCreator, options)