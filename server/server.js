const express = require("express"); 
const cors = require("cors"); 
const app = express(); 
 
var corsOptions = { 
    origin: "http://localhost:3002" 
}; 
 
app.use(cors(corsOptions)); 
 
//parse requests of content-type - application/json 
app.use(express.json()); 
 
// parse requests of content-type - application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 
 
app.use('/images', express.static('./images')) 
 
// simple route 
app.get("/", (req, res) => { 
    res.json( "Welcome to our Survey." ); 
}); 

require('./app/routes/section.routes')(app); 
require('./app/routes/user.routes')(app); 
 
const db = require('./app/models'); 
db.sequelize.sync().then(() => { 
    console.log("Database synced successfully."); 
}).catch(err => { 
    console.error("Error syncing database:", err); 
}); 
 
const Port = 3005; 
app.listen(Port , () => { 
    console.log(`Server is running on port ${Port}.`); 
})