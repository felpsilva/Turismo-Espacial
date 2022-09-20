const path = require('path');

exports.technology = (req, res) => {
    res.sendFile(path.join(__dirname, '../technology-vehicle.html'))
}