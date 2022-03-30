const {lname, fname} = require('./lib/names2');
const {pics} = require('./lib/pics');
const { sentence, paragraph } = require('./lib/text');

const FirstName = fname;
const LastName = lname;
const ProfilePic = () => {
    return pics[Math.floor(Math.random()*pics.length)];
}
const Description = () => {
    return paragraph();
}
const BriefText = () => {
    return sentence();
}
const LongText = () => {
	return [...Array(Math.floor(Math.random()*(5-3)+3))].map(paragraph);
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
