const { word } = require('./text');

exports.fname = () => {
    const w = word();
    return w[0].toUpperCase() + w.slice(1);
}

exports.lname = () => {
    const w = word();
    return w[0].toUpperCase() + w.slice(1);
}

