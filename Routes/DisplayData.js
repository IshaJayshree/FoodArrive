

const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {

        // console.log(global.food_items,global.food_Category)
        res.send([global.food_items,global.food_Category]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error");
    }
});

module.exports = router;

// const express = require('express');
// const router = express.Router();
// const mongoDB = require('./db');

// router.post('/foodData', (req, res) => {
//     try {
//         // Pass a callback function to handle the response
//         mongoDB((error, data) => {
//             if (error) {
//                 console.error(error.message);
//                 return res.status(500).send("Server Error");
//             }
            
//             // Send the fetched data as the response
//             res.send(data);
//         });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Server Error");
//     }
// });

// module.exports = router;
