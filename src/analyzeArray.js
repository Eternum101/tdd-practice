function analyzeArray(arr) {
    if(!Array.isArray(arr)) return {};
    if (arr.some((item) => typeof item !== 'number')) return {};

    const average = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length };
}

module.exports = { analyzeArray };