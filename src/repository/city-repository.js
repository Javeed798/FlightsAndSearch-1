const {City} = require("../models/index");const {Op} = require("sequelize");class CityRepository {   async createCity({name}) {      try {         const city = await City.create({name});         return city;      } catch (err) {         throw (err)      }   }      async deleteCity(cityId) {      try {         await City.destroy({            where: {               id: cityId,            }         });         return true;      } catch (err) {         throw (err);      }   }      async updateCity(cityId, data) {      try {         // const city = await City.update(data, {         //   where: {         //     id: cityId,         //   },         //         // });         const city = await City.findByPk(cityId);         city.name = data.name;         await city.save();         return city;      } catch (err) {         throw (err);      }   }      async getCity(cityId) {      try {         const city = await City.findByPk(cityId)         return city;      } catch (err) {         throw (err);      }   }      async getAllCities(filter) { // filter can be empty      try {         if (filter.name) {            const data = await City.findAll({               where: {                  name: {                      [Op.startsWith]: filter.name                  }               }            });            return data;         }         const cities = await City.findAll();         return cities;      } catch (err) {         throw (err);      }   }}module.exports = CityRepository;