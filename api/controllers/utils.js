module.exports = {
  queryId: (id) => {
    return { where: { id: Number(id) } };
  },

  exec: async (res, fn) => {
    try {
      const result = await fn();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },
};
