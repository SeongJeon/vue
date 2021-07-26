const getters = {
  getTokenExpiryTime: state => {
    const tokenArr = state.token.split('.');
    const expArr = JSON.parse(atob(tokenArr[1]));
    return new Date(expArr['exp'] * 1000);
  },
};

export default getters;
