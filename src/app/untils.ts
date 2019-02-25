export const getQuery = (obj: object): string => {
  let query = '';
  for (let key in obj) {
    query += `${key}=${obj[key]}&`;
  }
  return `?${query}`;
};
