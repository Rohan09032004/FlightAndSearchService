const {City} = require('../models/index.js')

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({
                name
            });
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
    async updateCity(cityID, data){
        try{
            // The Below approach also works but will not return the updated object.
            // if we are using postgress then returning:true can be used,else not
            // const city = await City.update(data, {
            //     where :{
            //         id :cityID
            //     },
            //     returning :true
            // });

            // for getting updated data in mysql, we use the below approach
            const city = await City.findByPk(cityID);
            city.name = data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in the repository Layer.");
            throw {error};
        }

    }

    async getCity(cityid){
        try{
            const city = await City.findByPk(cityid);
            return city;
        }
        catch (error){
            console.log("Something went wrong in the repository Layer.");
            throw {error};
        }
    }

};
module.exports = CityRepository;