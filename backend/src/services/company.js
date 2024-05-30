const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Company } = require("../models/index");

const NotFoundException = require("../exception/NotFoundException");
const BadRequestException = require("../exception/BadRequestException");

function omitHash(user) {
  console.log(user, "user12341234");
  const { hash, ...userWithoutHash } = user;
  return userWithoutHash;
}

const companyService = {
  authenticate: (body) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Company.scope("withHash").findOne({
          where: { userName: body?.userName },
        });
        if (!data) throw new NotFoundException("Not found company!");
        bcrypt.compare(body.password, data.password, function (err, result) {
          if (result) {
            let secret =
              "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";
            const token = jwt.sign({ sub: data.id }, secret, {
              expiresIn: "1d",
            });
            resolve({ ...omitHash(data.get()), token });
          } else {
            return resolve({ error: true });
          }
        });
      } catch (error) {
        reject(error);
      }
    }),
  findAll: ({ page, limit, orderBy, sortBy, keyword }) =>
    new Promise(async (resolve, reject) => {
      try {
        const query = {};

        if (keyword) {
          query.company_name = { [Op.substring]: keyword };
        }

        const queries = {
          offset: (page - 1) * limit,
          limit,
        };

        if (orderBy) {
          queries.order = [[orderBy, sortBy]];
        }

        const data = await Company.findAndCountAll({
          where: query,
          ...queries,
        });

        const res = {
          totalPages: Math.ceil(data?.count / limit),
          totalItems: data?.count,
          data: data?.rows,
        };

        resolve(res);
      } catch (error) {
        reject(error);
      }
    }),
  findById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const data = await Company.findByPk(id);
        if (!data) throw new NotFoundException("Not found comapny!");

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  create: (body) =>
    new Promise(async (resolve, reject) => {
      console.log(body, "body223423");
      try {
        const company = await Company.findOne({
          where: { company_name: body.companyName },
        });
        if (company)
          throw new BadRequestException(
            `Company ${body?.companyName} already exists`
          );

        const existingCustomerByEmail = await Company.findOne({
          where: { company_email: body?.companyEmail },
        });

        // Check if a customer with the provided userName already exists
        const existingCompanyUserName = await Company.findOne({
          where: { user_Name: body?.userName },
        });

        if (existingCustomerByEmail) {
          throw new BadRequestException(
            `Email ${body?.companyEmail} already exists`
          );
        }

        if (existingCompanyUserName) {
          throw new BadRequestException(
            `User Name ${body?.userName} already exists`
          );
        }
        console.log(existingCompanyUserName, existingCustomerByEmail, company, "company213412")
        const data = await Company.create(body);
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  updateById: (id, body) =>
    new Promise(async (resolve, reject) => {
      try {
        console.log(body, "body2334")
        const company = await Company.findByPk(id);
        if (!company) throw new NotFoundException("Not found comapny!");

        const data = await Company.update(body, {
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
  deleteById: (id) =>
    new Promise(async (resolve, reject) => {
      try {
        const company = await Company.findByPk(id);
        if (!company) throw new NotFoundException("Not found company!");

        const data = await Company.destroy({
          where: {
            id,
          },
        });

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }),
};

module.exports = companyService;
