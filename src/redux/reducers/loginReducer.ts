const initialState = {
  id: "" as any,
  pw: "" as any,
  authenticate: false as any,
};

export const loginReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        id: payload.id,
        pw: payload.pw,
        authenticate: payload.authenticate,
      };
    default:
      return { ...state };
  }
};
