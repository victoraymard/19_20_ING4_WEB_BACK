const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
app.use('/api/sensorModel', require('./Api/Sensor'));
app.use('/api/measureModel', require('./Api/Measure'));
const Port = (process.env.Port || 3001);




app.listen(Port, () => console.log('Server started'));
