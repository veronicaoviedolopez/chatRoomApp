export const Set_User = "SET_USER";
export const _Success = "_SUCCESS";
export const _Error = "_ERROR";

const GetUser = (x) => {
  return (dispatch) => {
    //Aqui iran las llamadas APIs

    dispatch(rSuccess({ x }));

    //dispatch(rError("Error"));
  };
};

const SetUser = (user) => ({
  type: Set_User,
  user,
});

const rSuccess = (user) => ({
  type: _Success,
  user,
});

const rError = (error) => ({
  type: _Error,
  error,
});

export { SetUser as setUser, GetUser as getUser };
