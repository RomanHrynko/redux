export const SET_LANGUAGE = 'SET/LANGUAGE';

export const setLanguage = language => {
  return {
    type: SET_LANGUAGE,
    payload: {
      language,
    },
  };
};
