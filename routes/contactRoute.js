const contactRoute = require('express').Router();
const contactmodel = require('../mongoose/schemas/contacts');




contactRoute.get('/', (req, res) => {
    contactmodel.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: 'success',
                data: data
            });
        }
    });
})

contactRoute.post('/', (req, res) => {
    const contact = new contactmodel(req.body);
    contact.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: 'success',
                data: data
            });
        }
    });
})

contactRoute.delete('/:id', (req, res) => {
    const params = req.params.id
    console.log(params);
    contactmodel.findByIdAndDelete(params, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: 'success',
                data: data
            });
        }
    });
}
)

contactRoute.put("/:id", (req,res)=>{
    const params  = req.params.id
    console.log(req.body);
    contactmodel.findByIdAndUpdate(params, req.body, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: 'success',
                data: data
            });
        }
    });
})


module.exports = contactRoute;
