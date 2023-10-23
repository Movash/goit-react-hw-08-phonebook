export const handleAuth = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
};

export const handleRefreshFul = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
};

export const handleRefreshRej = (state) => {
  state.token = '';
  state.isRefreshing = false;
};

export const handleLogout = state => {
  state.token = '';
  state.user = null;
};