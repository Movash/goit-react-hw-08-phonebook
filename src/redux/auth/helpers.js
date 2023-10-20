export const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

export const handleRefresh = (state, { payload }) => {
  state.user = payload;
};

export const handleLogout = state => {
  state.token = '';
  state.user = null;
};