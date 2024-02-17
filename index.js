

const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const mongoDB = require("./db");

// Enable CORS for all routes
app.use(cors());

// Connect to MongoDB
mongoDB();


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
});


// Routes
app.get('/', (req, res) => {
    res.send('isha');
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData.js"));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

