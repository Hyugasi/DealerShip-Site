const mongoose = require('mongoose')
mongoose.Promise = Promise;


let mongoURI = ""
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost/dealership";
}
mongoose.connect(mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
})


module.exports = mongoose;