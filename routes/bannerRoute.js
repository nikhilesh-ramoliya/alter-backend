const bannerRoute = require('express').Router();
const bannermodel = require('../mongoose/schemas/banner');
const cloudinary = require("cloudinary").v2;

bannerRoute.get('/', (req, res) => {
    bannermodel.find({}, (err, data) => {
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
}  // get all banners
);

bannerRoute.post('/', (req, res) => {
    console.log(req.body)
    // const banner = new bannermodel(req.body);
    // console.log(banner);
    // banner.save((err, data) => {
    //     if (err) {
    //         res.status(500).json({
    //             message: err.message
    //         });
    //     } else {
    //         res.status(200).json({
    //             message: 'success',
    //             data: data
    //         });
    //     }
    // });
  
  }//add new banner
);

bannerRoute.delete('/:id', (req, res) => {
    const id = req.params.id
    bannermodel.findByIdAndDelete(id, (err, data) => {
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
}  // delete banner
);


module.exports = bannerRoute;