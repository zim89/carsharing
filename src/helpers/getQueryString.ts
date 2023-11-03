const getQueryString = (page = 1, limit = 12): string => {
  const query = {
    page: String(page),
    limit: String(limit),
  };

  return new URLSearchParams(query).toString();
};

export default getQueryString;
