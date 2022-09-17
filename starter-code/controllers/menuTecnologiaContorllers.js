const path = require('path');

exports.technology = (req, res) => {
    res.sendFile(path.join(__dirname, '../technology-capsule.html'))
}