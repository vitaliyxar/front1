const reducerGenerator =
  (initialState, handlers) =>
  (state = initialState, { type, payload }) =>
    handlers[type] ? handlers[type](state, payload) : state;

export default reducerGenerator;
