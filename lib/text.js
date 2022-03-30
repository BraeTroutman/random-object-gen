const { wordFrequencies } = require('./freq.js');

const vowelFrequencies = new Map([
  ['a', 0.21435695538057747],
  ['e', 0.33338582677165357],
  ['i', 0.18283464566929136],
  ['o', 0.19703412073490817],
  ['u', 0.07238845144356956]
]);

const consonantFrequencies = new Map([
  ["b", 0.024103781967398506],
  ["c", 0.044944183266288636],
  ["d", 0.06870870288696103],
  ["f", 0.03599411945265675],
  ["g", 0.032553029935863266],
  ["h", 0.09845070194995074],
  ["j", 0.002471768526147434],
  ["k", 0.012471930079645876],
  ["l", 0.06502528312250602],
  ["m", 0.03886977172490671],
  ["n", 0.10903245609783681],
  ["p", 0.031163669849270593],
  ["q", 0.0015347582351895833],
  ["r", 0.09672207951663195],
  ["s", 0.10221489846362625],
  ["t", 0.14630284818817754],
  ["v", 0.015799932147530657],
  ["w", 0.03812662563207807],
  ["x", 0.0024233024766151315],
  ["y", 0.03189066059225513],
  ["z", 0.0011954958884634649]
]);

const choose = (freqMap) => {
    let chance = 1;
    for (const [value,frequency] of freqMap.entries()) {
	if (Math.random()*chance < frequency) return value;
	chance -= frequency;
    }
}

const capitalize = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('');
const vowel = () => choose(vowelFrequencies);
const consonant = () => choose(consonantFrequencies);
const syllable = () => choose(new Map([[vowel, 0.2], [consonant, 0.5], [() => '', 0.3]]))() 
    + vowel() 
    + choose(new Map([[consonant, 0.7], [() => '', 0.3]]))();
const word = () => choose(wordFrequencies).split('').map((c) => c == 'c' ? consonant() : c == 'v' ? vowel() : c).join(''); 
const punctuation = () => choose(new Map([['.', 0.7], ['!', 0.1], [',', 0.1], ['?', 0.1]]));
const sentence = () => [capitalize(word()), ...[...Array(Math.floor(Math.random()*(20-5)+5))].map(word)].join(' ') + punctuation();
const paragraph = () => [...Array(Math.floor(Math.random()*(7-3)+3))].map(sentence).join(' ');

module.exports = {
    choose, 
    vowel, 
    consonant, 
    word, 
    punctuation, 
    wordFrequencies,
    sentence,
    paragraph,
    capitalize,
};
