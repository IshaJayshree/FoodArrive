

const { Result } = require('express-validator');
const mongoose = require('mongoose');

// URL-encode the password
const password = encodeURIComponent('Isha@2425');

// MongoDB Atlas cluster name
const clusterName = 'cluster1';

// Your actual database name
const databaseName = 'FoodAtDoor';

// Create the MongoDB connection string
const mongoURI = `mongodb+srv://ishajayshree1002:${password}@${clusterName}.h7jxnqw.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const mongoDB = async () => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });

    console.log('Connected to MongoDB');

    try {
        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const food_Category = await mongoose.connection.db.collection("food_Category").find({}).toArray();

        global.food_items = fetched_data;
        global.food_Category = food_Category;

        // console.log(global.food_Category);
        // console.log(global.food_items);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

module.exports = mongoDB;



