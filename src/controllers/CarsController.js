const Car = require('../models/Car');

class CarsController {

    constructor(dao) {
        this.dao = dao;
        this.index = this.index.bind(this)
        this.create = this.create.bind(this)
    } 

    async index (req,res) {
        const cars = await this.dao.find();
        return res.json(cars)
    }

    async create (req,res) {
        const car = await this.dao.create(req.body);
        return res.status(201).send(car);
    }

    
};


module.exports = new CarsController(Car)