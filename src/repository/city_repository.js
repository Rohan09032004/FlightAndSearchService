const {City} = require('../models/index.js')

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }
        catch(error){
            console.log("Something went wrong in the repository Layer.");
            throw {error};
        }
    }
    async deleteCity(cityid){
        try{
            await City.destroy({
                where:{
                    id : cityid
                }
            });
            return true;
        }
        catch(error){
            console.log("Something went wrong in the repository Layer.");
            throw {error};
        }
    }
};
module.exports = CityRepository;