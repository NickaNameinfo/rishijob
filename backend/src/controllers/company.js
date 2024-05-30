const companyService = require("../services/company");
const bcrypt = require("bcryptjs");

const courseController = {
  authenticate: async (req, res, next) => {
    console.log(req.body, "bodyweqrqwe3124332");
    try {
      const data = await companyService.authenticate(req.body);
      return res.json({ success: true, data });
    } catch (error) {
      console.error("Authentication Error:", error);
      return res.json({ success: false, error: "Authentication failed." });
    }
  },
  findAll: async (req, res, next) => {
    try {
      const {
        page = 1,
        limit = 500,
        orderBy = "companyName",
        sortBy = "asc",
        keyword,
      } = req.query;

      const data = await companyService.findAll({
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
      const data = await companyService.findById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    console.log(req.files, req.body, "asdfasdfasd");
    let tempData = {
      ...req.body,
      password: await bcrypt.hash(req?.body?.password, 10),
    };
    console.log(tempData, "tempData45235");
    try {
      const data = await companyService.create(tempData);
      return res.json({ success: true, data });
    } catch (error) {
      return res.json({ success: false, error: "Company create failed." });
    }
  },
  updateById: async (req, res, next) => {
    console.log(req?.files?.companyLogo, "089")
    try {
      const { id } = req.params;
      let tempData = {
        ...req.body,
        ...(req?.body?.password && {
          password: await bcrypt.hash(req?.body?.password, 10),
        }),
        companyLogo: req?.files?.companyLogo?.[0]?.path,
      };
      const data = await companyService.updateById(id, tempData);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
  deleteById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await companyService.deleteById(id);
      return res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = courseController;
