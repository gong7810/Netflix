function login(id: string, pw: string, authenticate: boolean) {
  return async (dispatch: any, getState: any) => {
    await dispatch({
      type: "LOGIN",
      payload: { id, pw, authenticate },
    });
    console.log("로그인 액션", id);
  };
}

export const loginAction = { login };
