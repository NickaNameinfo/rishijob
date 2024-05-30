const jobsService = require("../services/jobs");

const courseController = {
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 500,
        orderBy = "jobTitle",
        sortBy = "desc",
        keyword,
      } = req.query;

      const data = await jobsService.findAll({
        page: +page ? +page : 1,
        limit: +limit ? +limit : 3,
        orderBy,
        sortBy,
        keyword,
      });
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await jobsService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.files, req.body, "asdfasdfasd");
    let inputData = {
      ...req.body,
      resume: req?.files?.resume?.[0]?.path,
    };
    try {
      const data = await jobsService.create(inputData);
      return res.json({ success: true, data });
    } catch (error) {
      return res.json({ success: false, error: "Jobs create failed." });
    }
  },
  updateById: async (req, res, next) => {
    try {
      const { id } = req.params;
      let inputData = {
        ...req.body,
        resume: req?.files?.resume?.[0]?.path,
      };
      const data = await jobsService.updateById(id, inputData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await jobsService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = courseController;
