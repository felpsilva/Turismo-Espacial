const path = require('path');

exports.tec1 = (req, res) => {
    res.sendFile(path.join(__dirname,"../crew-commander.html"));
};
exports.tec2 = (req, res) => {
    res.sendFile(path.join(__dirname,"../crew-specialist.html"));
};
exports.tec3 = (req, res) => {
    res.sendFile(path.join(__dirname,"../crew-pilot.html"));
};
exports.tec4 = (req, res) => {
    res.sendFile(path.join(__dirname,"../crew-engineer"));
};