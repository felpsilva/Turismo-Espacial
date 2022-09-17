const path = require('path')

exports.destination = (req, res) => {
    res.sendFile(path.join(__dirname, "../destination-moon.html"));
}
exports.destination2 = (req, res) => {
    res.sendFile(path.join(__dirname, "../destination-mars.html"));
}
exports.destination3 = (req, res) => {
    res.sendFile(path.join(__dirname, "../destination-europa.html"));
}
exports.destination4 = (req, res) => {
    res.sendFile(path.join(__dirname, "../destination-titan.html"));
}