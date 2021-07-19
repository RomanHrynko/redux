export const SET_LANGUAGE = 'SET/LANGUAGE';

const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};

export default setLanguage;
