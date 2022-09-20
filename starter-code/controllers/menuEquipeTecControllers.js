const path = require('path');

exports.tec1 = (req, res) => {
    res.sendFile(path.join(__dirname,"../crew-commander.html"));
};
