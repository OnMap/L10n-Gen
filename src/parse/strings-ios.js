const { parseLineToPair } = require('../utils/iosParserUtils');

const stringsParse = (text = '') => {
  const translationsPairs = text
    .split('\n')
    .filter(line => line.includes('=') && !line.startsWith('/*') && !line.endsWith('*/'))
    .map(parseLineToPair);

  return Promise.resolve(translationsPairs);
};

module.exports = stringsParse;
