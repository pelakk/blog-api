export const paginatedResults = (model) => {
  return (req, res, next) => {
    const page = parseInt(req.query.page); // taking current page
    const limit = 10; // objects limit per page

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    // setting previous next number
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    // setting previous page number
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = model.slice(startIndex, endIndex);

    res.paginatedResults = results;
    next();
  };
};
