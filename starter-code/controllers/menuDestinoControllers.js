const path = require('path')

exports.destination = (req, res) => {
    res.sendFile(path.join(__dirname, "../destination-moon.html"));
}
