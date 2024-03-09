const __reverseString = (str = '') => {
    if (typeof str !== 'string') return '';
    else  return str.split('').reverse().join('');
}

module.exports = {
    __reverseString
}
