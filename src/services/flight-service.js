const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightrepository = new FlightRepository();
    }

    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw {error:'Arrival time cannnot be before the Departure time.'}
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightrepository.createFlight({...data, totalSeats: airplane.capacity});
            // ...data brings it in first
            // totalSeats: airplane.capacity overwrites it
            return flight;

        }
        catch(error){
            console.log("Something went wrong in the flight Service layer");
            throw{error};
        }
    }

    //async getFlightData(data){
    //     try{
    //         const flights = await this.FlightRepository.getAllFlights(data);
    //         return flights;
    //     }
    //     catch(error){
    //         console.log("Something went wrong in the flight Service layer");
    //         throw{error};
    //     }
    // }
    // async getFlight(flightId){
    //     try {
    //         const flight = await this.FlightRepository.getFlightData(flightId);
    //         return flight;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
    // async updateFlight(flightId, data){
    //     try {
    //         const flight = await this.FlightRepository.updateFlights(flightId, data);
    //         return flight;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}

module.exports = FlightService;
/**
 * {
 *      flightNumber,
 *      airplaneId,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price,
 *      totalSeats --> airplane
 * }
 */