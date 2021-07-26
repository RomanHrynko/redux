export const FILTER_TEXT = 'FILTER_TEXT';

export const filterText = text => {
  return {
    type: FILTER_TEXT,
    payload: {
      text,
    },
  };
};
