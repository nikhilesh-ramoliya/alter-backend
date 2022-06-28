const ProductRoute = require("express").Router();

const Product  = require("../mongoose/schemas/products");

ProductRoute.get("/", (req, res) => {

    Product.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: "success",
                data: data
            });
        }
    });
}
);
ProductRoute.post("/", (req, res) => {
    console.log(req.body);
    const Product1 = new Product(req.body);    
    Product1.save((err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: "success",
                data: data   
            });
        }
    });
    
}
);
ProductRoute.delete("/:id", (req, res) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: "success",
                data: data
            });
        }
    });
}
);

ProductRoute.put("/:id", (req, res) => {
    const id = req.params.id;
    Product.findByIdAndUpdate(id, req.body,{new:true}, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message
            });
        } else {
            res.status(200).json({
                message: "success",
                data: data
            });
        }
    });
}
);





module.exports = ProductRoute;

