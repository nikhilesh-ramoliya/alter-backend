const express = require('express');
const app = express();
const connection = require("./mongoose/connection");
const contactRoute = require('./routes/contactRoute');
const bannerRoute = require('./routes/bannerRoute');
const productRoute = require('./routes/productRoute');
const cors = require('cors');
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary").v2;
const fileupload = require('express-fileupload');


cloudinary.config({
    cloud_name: "shree8469175299",
    api_key: "521737544827983",
    api_secret: "go35syQTS0ShOHbahARMJYOtSfo"
});


app.use(fileupload({
    useTempFiles: true, 
}));

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit:"50mb", extended: true }));
app.use("/contact", contactRoute);
app.use("/banner", bannerRoute);
app.use("/product", productRoute);


app.listen(process.env.PORT||3000, ()=>console.log('server is running at port 3000'))