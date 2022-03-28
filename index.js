const {lnames, fnames} = require('./lib/names');
const {pics} = require('./lib/pics');
const lipsum = require('./lib/lipsum');

const FirstName = () => {
    return fnames[Math.floor(Math.random()*fnames.length)];
}
const LastName = () => {
    return lnames[Math.floor(Math.random()*lnames.length)];
}
const ProfilePic = () => {
    return pics[Math.floor(Math.random()*pics.length)];
}
const Description = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut rhoncus purus. Mauris luctus, lorem sit amet placerat facilisis, nibh neque tempus eros, at tincidunt justo tortor eget leo. Quisque fringilla convallis faucibus. Nam vitae mattis elit, imperdiet bibendum nisl. Aliquam lacinia feugiat bibendum. Aliquam volutpat ornare tellus at euismod.";
}
const BriefText = () => {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}
const LongText = () => {
	return lipsum;
}
const genRand = (template) => {
    let ret = {};
    for (const [entry, value] of Object.entries(template)) {
        if (Array.isArray(value)) {
	    ret[entry] = value[Math.floor(Math.random()*value.length)];
	} else if (typeof value === 'object') {
	    ret[entry] = module.exports.genRand(value);
	} else if (typeof value === 'function') {
	    ret[entry] = value();
	} else {
	    ret[entry] = value;
	}
    }
    return ret;
}

const genRands = (template, num) => {
    return [...Array(num).keys()].map(() => module.exports.genRand(template));
}

module.exports = {
    genRands: genRands, 
    genRand: genRand, 
    FirstName: FirstName, 
    LastName: LastName,
    Description: Description,
    BriefText: BriefText,
    LongText: LongText,
    ProfilePic: ProfilePic
};
